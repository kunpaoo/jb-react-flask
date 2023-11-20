from sqlalchemy import create_engine,text
from datetime import date

engine = create_engine("mysql+pymysql://online:Incorrect0-@localhost/jbm")


class Part:
    def __init__(self,name,quantity=0,receipt=None):
        self.name = name
        self.quantity = quantity
        self.receipt = receipt

    def getID(self):
        with engine.connect() as conn:
            q = f"select item_id from part where item_name = '{self.name}'"
            res = conn.execute(text(q)).all()
            if len(res) != 0:
                return res[0]
            return res

    def addPart(self):
        with engine.connect() as conn:
            if self.receipt is None:      # adding a part to be purchased that has no past data in inventory
                q = f"insert into part(item_name,quantity) values ('{self.name}',{self.quantity});"
                conn.execute(text(q))
                conn.commit()             

            else:                         # adding a part after receiving from delivery
                q = f"insert into part(quantity,vendor,vendor_phone,)"
                
            
    


# if item to be purchased has history in inventory, use same id
# otherwise, id = none ?


 # def searchPart(name):   # search part to reuse id, if part has no history in inventory -> new id
    #     with engine.connect() as conn:
    #         q=f"select item_name from part where item_name like '%{name}%'"
    #         res = conn.execute(text(q)).all()
    #         out = []

    #         for row in res:
    #             out.append(row._asdict())
        
    #     return out
            

            
class Vendor:
    def __init__(self,name,phone,email,address):
        self.name = name
        self.email = email
        self.phone = phone
        self.address = address

# class PurchaseOrder:
#     def __init__(self,vendor,items,id=None):
#         self.vendor = Vendor(vendor['name'],vendor['phone'],vendor['email'],vendor['address'])
        
#         self.parts = []
#         for item in items:
#             part = Part(item["item_name"],item["brand"],item["price"],item["quantity"])
#             part_id = part.getID()
#             if len(part_id) == 0:  # if no history, add
#                 part.addPart()
#             part_id = part.getID()[0]
#             self.parts.append({
#                 'part':part,
#                 'id':part_id
#             })

#         self.completed = False
#         self.id = id

    

#     def updatePO(self):
#         with engine.connect() as conn:
#             q = f"update purchase_ord set item_id = {self.part_id}, quantity = {self.quantity} where po_id = {self.id}"
#             conn.execute(text(q))
#             conn.commit()

    

def addPO(data):
    with engine.connect() as conn:
        date_ordered = date.today().strftime('%Y-%m-%d')
        columns = 'vendor, vendor_phone,vendor_add,vendor_email,date_ordered'
        vendor = data['vendor']
        q=f"insert into purchase_ord({columns}) values ('{vendor['name']}','{vendor['phone']}','{vendor['address']}','{vendor['email']}','{date_ordered}')"
        conn.execute(text(q))
        conn.commit()

        po_id = conn.execute(text("select max(po_id) from purchase_ord")).all()[0][0]

        for item in data['parts']:  # add items to purchase parts
            columns = 'item_name,brand,quantity,price,po_id'
            q=f"insert into purchase_part({columns}) values ('{item['item_name']}','{item['brand']}',{item['quantity']},{item['price']},{po_id})"
            conn.execute(text(q))
            conn.commit()
        return "PO ADDED WITH ITEMS"
        

def updatePO(data,id):
    with engine.connect() as conn:
        columns = ""
        vendor = data['vendor']
        q = f"update purchase_ord set vendor = {vendor['name']}, vendor_phone = {vendor['phone']}, vendor_add = {vendor['address']}, vendor_email={vendor['email']} where po_id ={id};"
        conn.execute(text(q))
        conn.commit()
        ven = "UPDATED VENDORS"


        old_data = getPO(id)
        new_items = data['parts']
        old_items = old_data['items']

        partq = f"select pp_id from purchase_part where po_id = {id};"
        p = conn.execute(text(partq))
        p_id = p.all()


        deleted = ""
        up = 0
        for index in range(p_id):
            idd = p_id[index][0]
            new_item = new_items[index]
            if new_item['item_name'] is None:
                q = f"delete from purchase_part where pp_id = {idd}"
                conn.execute(text(q))
                conn.commit()
                deleted = f"DELETED ITEM {idd}"
                break

            q=f"update purchase_part set item_name = '{new_item['item_name']}', brand = '{new_item['brand']}', price = {new_item['price']}, quantity = {new_item['quantity']} where pp_id = {idd}"
            conn.execute(text(q))
            conn.commit()
            up +=1
        
        added = ""
        if len(new_items) > index:
            for ind in range(index,len(new_items)):
                new_item = new_items[ind]
                q = f"insert into purchase_part(po_id,item_name,brand,price,quantity) values ({id},'{new_item['item_name']}','{new_item['brand']}',{new_item['price']},{new_item['quantity']})"
                conn.execute(text(q))
                conn.commit()
                added = "ADDED ITEMS"
                
        return f"{ven}, UPDATED {up}, {deleted}, {added}"



def loadPOs():
    with engine.connect() as conn:
        q = f"select po_id, vendor, completed, date_format(date_ordered,'%Y-%m-%d') as date_ordered from purchase_ord order by po_id desc;"
        res = conn.execute(text(q)).all()
        out = []
        
        for row in res:
            out.append(row._asdict())
        
        return out
    
def getPO(id):
    with engine.connect() as conn:
        purch_ord = "po_id, vendor, vendor_phone, vendor_add, vendor_email"
        q=f"select {purch_ord} from purchase_ord where po_id ={id}"
        vendor = conn.execute(text(q)).all()[0]._asdict()
        
        purch_part = "purchase_part.item_name, purchase_part.brand, purchase_part.price, purchase_part.quantity"
        q=f"select * from purchase_part where po_id = {id}"
        items_res = conn.execute(text(q)).all()
        
        
        out = {
            'vendor':vendor,
            'items':[]
        }
        for item in items_res:
            out['items'].append(item._asdict())


        
        return out