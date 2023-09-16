from sqlalchemy import create_engine,text

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
    
# def add_list(data):
#     with engine.connect() as conn:
#         # q = "insert into job_order "+ 