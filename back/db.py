from sqlalchemy import create_engine,text

engine = create_engine("mysql+pymysql://online:Incorrect0-@localhost/job_order")

def load_list():
    with engine.connect() as conn:
        result = conn.execute(text("select * from customers"))
        cust_list = []
        all_res = result.all()
        
        for row in all_res:
            cust_list.append(row._asdict())

        return cust_list
    
def add_list(data):
    with engine.connect() as conn:
        name = data['name']
        address = data['address']
        phone = data['phone']
        q = f"insert into customers(name,address,cont_num) values ('{name}', '{address}', {phone});"
        conn.execute(text(q))
        conn.commit()


def edit_list(data,id):
    with engine.connect() as conn:
        name = data['name']
        address = data['address']
        phone = data['phone']
        q = f"UPDATE customers SET name = '{name}', address= '{address}', cont_num ={phone} WHERE id = {id};"
        conn.execute(text(q))
        conn.commit()
        
