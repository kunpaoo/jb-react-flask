from sqlalchemy import create_engine,text
from datetime import date

today = date.today()

engine = create_engine("mysql+pymysql://online:Incorrect0-@localhost/jbm")

def load_list():
    with engine.connect() as conn:
        columns = "job_order.order_id, job_order.job_name, job_order.order_date, job_order.est_completion, technician.tech_name, technician.tech_phone, technician.tech_email, customer.cust_name, customer.cust_phone"
        q = "select " + columns +  " from job_order join technician on technician.tech_id = job_order.tech_id join customer on job_order.cust_id = customer.cust_id;"
        result = conn.execute(text(q))
        order_list = []
        all_res = result.all()

        
        for row in all_res:
            order_list.append(row._asdict())

        return order_list
    
def add_list(data):
    with engine.connect() as conn:
        if data["warranty"] == "on" : warranty = True
        else : warranty = False

        if data["returning"] == "on" : returning = True
        else: returning = "False"



        # tech_id = f"select tech_id from technician where tech_name = '{data.tech_name}'"
        tech_id = 3
        cust = f"select cust_id from customer where cust_name = '{data['cust_name']}' limit 1"
        cust_id = conn.execute(text(cust)).all()[0][0]
        fee_id = 1
        
        
        columns = f"order_date, job_name, est_completion, fee_id, cust_id, tech_id"
        q=f"insert into job_order({columns}) values ('{data['order_date']}','{data['job_name']}','{data['est_completion']}',{fee_id},{cust_id},{tech_id});"
        result = conn.execute(text(q))
        conn.commit()
        

        order_id = conn.execute(text("select max(order_id) from job_order;")).all()[0][0]
        unit_columns = "order_id, unit_name, brand, warranty, returning, defect_description"
        unit = f"insert into unit_item({unit_columns}) values('{order_id}','{data['unit_name']}','{data['brand']}',{warranty},{returning},'{data['desc']}')"
        unit_add = conn.execute(text(unit))
        conn.commit()       

        return "DATA INSERTED WITH UNIT" 
        