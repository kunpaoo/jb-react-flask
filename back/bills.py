from sqlalchemy import text,create_engine
from engine import engine

def loadBalances():
    with engine.connect() as conn:
        columns = "customer.cust_id, customer.cust_name"
        q = f"select {columns} from customer"
        res = conn.execute(text(q)).all()
        out =[]

        for row in res:
            rowdict = row._asdict()
            rowdict['balances'] = getBalances(rowdict['cust_id'])
            out.append(rowdict)
        return out

    
def getBalances(id):
    with engine.connect() as conn:
        q=f"select order_id,balance from job_order where cust_id = {id}"
        res = conn.execute(text(q)).all()
        out = []
        total = 0 
        for row in res:
            rowdict = row._asdict()
            total+=rowdict['balance']
            out.append(rowdict)
        
        b = {
            "orders":out,
            "total":total
        }

        return b
    
def getPayments(order_id):
    with engine.connect() as conn:
        q=f"select * from payment where order_id = {order_id} order by pmt_id desc"
        res = conn.execute(text(q)).all()
        out = []
        for row in res:
            out.append(row._asdict())
        return out


def loadStatement(cust_id):
    

def loadPendingOrders(cust_id):
    with engine.connect() as conn:
        q=f"select order_id, job_name, balance, cost from job_order where cust_id = {cust_id} and completed = 0"
        res = conn.execute(text(q)).all()
        out = []
        for row in res:
            out.append(row._asdict())
        return out