from sqlalchemy import create_engine,text

engine = create_engine("mysql+pymysql://root:marj#09142003@localhost/job_order")

def load_list():
    with engine.connect() as conn:
        result = conn.execute(text("select * from technician"))
        cust_list = []
        all_res = result.all()
        
        for row in all_res:
            cust_list.append(row._asdict())

        return cust_list