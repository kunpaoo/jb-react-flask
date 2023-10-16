from sqlalchemy import create_engine,text
from datetime import date

today = date.today()

engine = create_engine("mysql+pymysql://online:Incorrect0-@localhost/jbm")

def load_list():
    with engine.connect() as conn:
        columns = "job_order.order_id, job_order.job_name, date_format(job_order.order_date,'%Y-%m-%d') as order_date, date_format(job_order.est_completion,'%Y-%m-%d') as est_completion, technician.tech_name, technician.tech_number, technician.tech_email, customer.cust_name, customer.cust_phone"
        q = "select " + columns +  " from job_order join technician on technician.tech_id = job_order.tech_id join customer on job_order.cust_id = customer.cust_id order by job_order.order_id desc;"
        result = conn.execute(text(q))
        order_list = []
        all_res = result.all()

        
        for row in all_res:
            order_list.append(row._asdict())

        return order_list
    
def load_row(id):
    with engine.connect() as conn:
        columns = "job_order.order_id, job_order.job_name, date_format(job_order.order_date,'%Y-%m-%d') as order_date, date_format(job_order.est_completion,'%Y-%m-%d') as est_completion, technician.tech_name, technician.tech_number, technician.tech_email, customer.cust_name, customer.cust_phone"
        q = f"select * from (select {columns} from job_order join technician on technician.tech_id = job_order.tech_id join customer on job_order.cust_id = customer.cust_id order by job_order.order_id desc) as all_list where order_id = {id};"
        result = conn.execute(text(q))
        # order_list = []
        # all_res = result.all()

        
        # for row in all_res:
        #     order_list.append(row._asdict())
        
        order = result.all()[0]._asdict()


        unit_columns = "order_id, unit_name, brand, warranty, returning, defect_description"
        q = f"select {unit_columns} from unit_item where order_id = {id}"
        result = conn.execute(text(q))
        ures = result.all()
        unit_list = []

        for row in ures:
            unit_list.append(row._asdict())

        unit_columns = "order_id, item_name, brand, est_price"
        q = f"select {unit_columns} from order_part where order_id = {id}"
        result = conn.execute(text(q))
        pres = result.all()
        part_list = []

        for row in pres:
            part_list.append(row._asdict())

        out = {
            "order": order,
            "units": unit_list,
            "parts": part_list
        }

        return out
    
# def load_units(id):
#     with engine.connect() as conn:
        
#         return unit_list


def add_list(data):
    with engine.connect() as conn:

        # tech_id = f"select tech_id from technician where tech_name = '{data.tech_name}'"
        tech_id = 3
        cust = f"select cust_id from customer where cust_name = '{data['cust_name']}' limit 1"
        cust_id = conn.execute(text(cust)).all()[0][0]
        fee_id = 1
        
        
        columns = f"order_date, job_name, est_completion, cust_id, tech_id"
        q=f"insert into job_order({columns}) values ('{data['order_date']}','{data['job_name']}','{data['est_completion']}',{cust_id},{tech_id});"
        result = conn.execute(text(q))
        conn.commit()
        


        
        order_id = conn.execute(text("select max(order_id) from job_order;")).all()[0][0]
        

        # unit itemize
        for unit in range(1,data['units']+1):
            if data[f"warranty{unit}"] == "yes" : warranty = True
            else : warranty = False

            if data[f"returning{unit}"] == "yes" : returning = True
            else: returning = False
            unit_columns = "order_id, unit_name, brand, warranty, returning, defect_description"
            u = f"insert into unit_item({unit_columns}) values('{order_id}','{data[f'unit_name{unit}']}','{data[f'brand{unit}']}',{warranty},{returning},'{data[f'desc{unit}']}')"
            unit_add = conn.execute(text(u))
            conn.commit()  


        # part itemize
        if data["item_name1"] is not None:
            for part in range(1,data['num_of_parts']+1):
                unit_columns = "order_id, item_name, brand, est_price"
                u = f"insert into order_part({unit_columns}) values('{order_id}','{data[f'item_name{part}']}','{data[f'item_brand{part}']}','{data[f'est_price{part}']}')"
                unit_add = conn.execute(text(u))
                conn.commit()  
        
                  

        return "DATA INSERTED WITH UNIT AND PARTS" 


def update_list(data,id):
    with engine.connect() as conn:
        tech_id = 3
        cust = f"select cust_id from customer where cust_name = '{data['cust_name']}' limit 1"
        cust_id = conn.execute(text(cust)).all()[0][0]
        fee_id = 1
        
        q=f"update job_order set order_date = '{data['order_date']}', job_name = '{data['job_name']}', est_completion = '{data['est_completion']}', cust_id = {cust_id}, tech_id = {tech_id} where order_id = {id});"
        result = conn.execute(text(q))
        conn.commit()
         

        # unit itemize

        # missing delete unit
        # update existing items, not add 
        # select count() as num_of_x

        num_units = conn.execute(text(f"select count(unit_id) as num_unit from unit_item where order_id={id};").all()[0][0])
        
        for unit in range(1,num_units+1):
            unitq = f"select unit_id from unit_item where order_id = {id}, unit_name = {data[f'unit_name{unit}']}"
            u_id = conn.execute(text(unitq)).all()[0][0]
            if data[f"warranty{unit}"] == "yes" : warranty = True
            else : warranty = False

            if data[f"returning{unit}"] == "yes" : returning = True
            else: returning = False
            
            u = f"update unit_item set unit_name = '{data[f'unit_name{unit}']}', brand = '{data[f'brand{unit}']}', warranty = {warranty}, warranty = {returning}, defect_description = '{data[f'desc{unit}']}') where unit_id = {u_id};"
            unit_update = conn.execute(text(u))
            conn.commit()  



        # excess units to add
        if(data['numunits']>num_units):
            for unit in range(num_units,data["numunits"]+1):
                unit_columns = "order_id, unit_name, brand, warranty, returning, defect_description"
                u = f"insert into unit_item({unit_columns}) values('{id}','{data[f'unit_name{unit}']}','{data[f'brand{unit}']}',{warranty},{returning},'{data[f'desc{unit}']}')"
                unit_add = conn.execute(text(u))
                conn.commit()


        num_parts = conn.execute(text(f"select count(op_id) as num_parts from order_part where op_id={p_id};").all()[0][0])

        # part itemize
        if data["item_name1"] is not None:
            for part in range(1,data['num_of_parts']+1):
                partq = f"select op_id from order_part where order_id = {id}, item_name = {data[f'item_name{unit}']}"
                p_id = conn.execute(text(partq)).all()[0][0]
                unit_columns = "order_id, item_name, brand, est_price"
                u = f"update order_part set item_name = '{data[f'item_name{part}']}', brand = '{data[f'item_brand{part}']}', est_price = '{data[f'est_price{part}']}' where op_id = {p_id};"
                unit_add = conn.execute(text(u))
                conn.commit()  

        if data["num_of_parts"] > num_parts:
            for part in range(num_parts,data["num_of_parts"]+1):
                unit_columns = "order_id, item_name, brand, est_price"
                u = f"insert into order_part({unit_columns}) values('{id}','{data[f'item_name{part}']}','{data[f'item_brand{part}']}','{data[f'est_price{part}']}')"
                unit_add = conn.execute(text(u))
                conn.commit()  

    

