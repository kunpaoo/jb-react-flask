from sqlalchemy import text
from datetime import date
from engine import engine


    # class Part:
    #     def __init__(self,name,quantity=0,receipt=None):
    #         self.name = name
    #         self.quantity = quantity
    #         self.receipt = receipt

    #     def getID(self):
            
    #             q = f"select item_id from part where item_name = '{self.name}'"
    #             res = conn.execute(text(q)).all()
    #             if len(res) != 0:
    #                 return res[0]
    #             return res

    #     def addPart(self):
    #         with engine.connect() as conn:
    #             if self.receipt is None:      # adding a part to be purchased that has no past data in inventory
    #                 q = f"insert into part(item_name,quantity) values ('{self.name}',{self.quantity});"
    #                 conn.execute(text(q))
    #                 conn.commit()             

    #             else:                         # adding a part after receiving from delivery
    #                 q = f"insert into part(quantity,vendor,vendor_phone,)"
                    
                

def loadParts():
    with engine.connect() as conn:
        q = "select * from inventory where unit=0 order by item_id desc;"
        res = conn.execute(text(q)).all()
        parts_list = []
        for row in res:
            parts_list.append(row._asdict())
        return parts_list
        

def isPartAvailable(name,brand):
    with engine.connect() as conn:
        q=f"select item_id, po_id, quantity,price from inventory where item_name='{name}' and brand = '{brand}'"
        res = conn.execute(text(q)).all()

        q=f"select item_id,est_price,op_id from order_part where item_name = '{name}' and brand = '{brand}'"
        i = conn.execute(text(q)).all()
        if i[0]._asdict()['item_id'] == None and len(res) != 0:
            item_id = res[0]._asdict()['item_id']
            q=f"update order_part set item_id = {item_id} where op_id = {i[0]._asdict()['op_id']}"
            conn.execute(text(q))
            conn.commit()

        

        
        if len(res) != 0 and res[0]._asdict()['quantity']!=0:
            fin_price = res[0]._asdict()['price']
            est_price = i[0]._asdict()['est_price']
            resdict = res[0]._asdict()
            resdict['updated_price'] = "NOT UPDATED"
            # update pricings to final price
            if fin_price != est_price:
                q=f"update order_part set est_price = {fin_price} where op_id = {i[0]._asdict()['op_id']}"
                conn.execute(text(q))
                conn.commit()
                resdict['updated_price'] = "PRICE UPDATED"

            return resdict
        else:
            return False

def updateQuantity(data):
    with engine.connect() as conn:
        q=f"select item_id, withdrawn from order_part where op_id = {data['op_id']}"
        item_id = conn.execute(text(q)).all()[0][0]
        initial_w = conn.execute(text(q)).all()[0][1]
        q=f"select quantity from inventory where item_id = {item_id}"
        initial_q = conn.execute(text(q)).all()[0][0]
        


        if (data['wdraw'] and not initial_w):
            new_q = -1
        elif(data['wdraw'] and initial_w):
            new_q = 1
            

        q=f"update inventory set quantity = {initial_q+new_q} where item_id = {item_id}"
        conn.execute(text(q))
        conn.commit()
        q=f"update order_part set withdrawn = {data['wdraw']} where op_id = {data['op_id']}"
        conn.execute(text(q))
        conn.commit()
        return f"UPDATE QUANTITY: INITIAL WITHDRAW ({initial_w}) NEW WITHDRAW ({data['wdraw']}) QUANTITY ({initial_q+new_q} ADDED ({new_q}))"



# # if item to be purchased has history in inventory, use same id
# # otherwise, id = none ?


# # def searchPart(name):   # search part to reuse id, if part has no history in inventory -> new id
#     #     with engine.connect() as conn:
#     #         q=f"select item_name from part where item_name like '%{name}%'"
#     #         res = conn.execute(text(q)).all()
#     #         out = []

#     #         for row in res:
#     #             out.append(row._asdict())
        
#     #     return out
            

            
# class Vendor:
#     def __init__(self,name,phone,email,address):
#         self.name = name
#         self.email = email
#         self.phone = phone
#         self.address = address

# # class PurchaseOrder:
# #     def __init__(self,vendor,items,id=None):
# #         self.vendor = Vendor(vendor['name'],vendor['phone'],vendor['email'],vendor['address'])
        
# #         self.parts = []
# #         for item in items:
# #             part = Part(item["item_name"],item["brand"],item["price"],item["quantity"])
# #             part_id = part.getID()
# #             if len(part_id) == 0:  # if no history, add
# #                 part.addPart()
# #             part_id = part.getID()[0]
# #             self.parts.append({
# #                 'part':part,
# #                 'id':part_id
# #             })

# #         self.completed = False
# #         self.id = id

    

# #     def updatePO(self):
# #         with engine.connect() as conn:
# #             q = f"update purchase_ord set item_id = {self.part_id}, quantity = {self.quantity} where po_id = {self.id}"
# #             conn.execute(text(q))
# #             conn.commit()

    

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
        
        d_columns = "po_id, date_format(deli_date,'%Y-%m-%d') as deli_date,origin,destination,notes,deli_status"
        q=f"select {d_columns} from delivery where po_id = {id}"
        result = conn.execute(text(q))
        delivery =  result.all()
        deli_list = []
        for row in delivery:
            deli_list.append(row._asdict())


        out = {
            'vendor':vendor,
            'items':[],
            'delivery':deli_list
        }

        for item in items_res:
            out['items'].append(item._asdict())

        return out