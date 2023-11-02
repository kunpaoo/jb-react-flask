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
            

            


class PurchaseOrder:
    def __init__(self,item_name,quantity,id=None):
        self.quantity = quantity
        self.completed = False
        self.part = Part(item_name)
        self.part_id = self.part.getID()
        if len(self.part_id) == 0:  # if no history, add
            self.part.addPart()
        self.part_id = self.part.getID()[0]
        self.id = id

    def addPO(self):
        with engine.connect() as conn:
            q = f"insert into purchase_ord(item_id,quantity,completed) values ({self.part_id},{self.quantity},{self.completed})"
            conn.execute(text(q))
            conn.commit()
            self.id = conn.execute(text("select max(po_id) from purchase_ord"))


    def updatePO(self):
        with engine.connect() as conn:
            q = f"update purchase_ord set item_id = {self.part_id}, quantity = {self.quantity} where po_id = {self.id}"
            conn.execute(text(q))
            conn.commit()

    

def loadPOs():
    with engine.connect() as conn:
        q = f"select purchase_ord.po_id, purchase_ord.item_id, purchase_ord.quantity, purchase_ord.completed, part.item_name from purchase_ord left join part on part.item_id = purchase_ord.item_id;"
        res = conn.execute(text(q)).all()
        out = []
        
        for row in res:
            out.append(row._asdict())
        
        return out
    
def getPO(id):
    with engine.connect() as conn:
        q=f"select * from (select purchase_ord.po_id, purchase_ord.item_id, purchase_ord.quantity, purchase_ord.completed, part.item_name from purchase_ord left join part on part.item_id = purchase_ord.item_id) where po_id ={id}"
        res = conn.execute(text(q)).all()[0]
        
        return res._asdict