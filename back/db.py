from sqlalchemy import create_engine,text
from datetime import date
from parts import *

today = date.today()

engine = create_engine("mysql+pymysql://online:Incorrect0-@localhost/jbm")

def load_list():
    with engine.connect() as conn:
        stat = "(select max(status_id) from order_status where order_status.order_id = job_order.order_id)"
        warranty = "unit_item on unit_item.unit_id = (IF((select unit_id from unit_item where unit_item.order_id = job_order.order_id and warranty = 1 limit 1) is null,(select unit_id from unit_item where unit_item.order_id = job_order.order_id and warranty = 0 limit 1),(select unit_id from unit_item where unit_item.order_id = job_order.order_id and warranty = 1 limit 1)))"
        columns = "job_order.order_id, job_order.job_name, date_format(job_order.order_date,'%Y-%m-%d') as order_date, date_format(job_order.est_completion,'%Y-%m-%d') as est_completion, technician.tech_name, technician.tech_number, technician.tech_email, customer.cust_name, customer.cust_phone, unit_item.warranty, order_status.status_id,order_status.status_name"
        q = f"select {columns} from job_order join technician on technician.tech_id = job_order.tech_id join customer on job_order.cust_id = customer.cust_id join order_status on order_status.status_id = {stat} join {warranty} order by job_order.order_id desc;"
        result = conn.execute(text(q))
        order_list = []
        all_res = result.all()

        
        for row in all_res:
            rowdict = row._asdict()
            order_list.append(rowdict)



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


        warr = False # general warranty tag
        
        for row in ures:
            x = row._asdict()
            if x['warranty'] is True: warr = True
            unit_list.append(row._asdict())

        part_columns = "op_id,order_id, item_id,item_name, brand, est_price, withdrawn"
        q = f"select {part_columns} from order_part where order_id = {id}"
        result = conn.execute(text(q))
        pres = result.all()
        part_list = []

        for row in pres:
            rowdict = row._asdict()
            rowdict['availability'] = isPartAvailable(rowdict['item_name'],rowdict['brand'])  # returns quantity if available
            part_list.append(rowdict)


        d_columns = "order_id, date_format(deli_date,'%Y-%m-%d') as deli_date,origin,destination,notes,deli_status"
        q=f"select {d_columns} from delivery where order_id = {id}"
        result = conn.execute(text(q))
        delivery =  result.all()
        deli_list = []
        for row in delivery:
            deli_list.append(row._asdict())


        q = f"select date_format(status_date, '%Y-%m-%d') as status_date,status_name,ref from order_status where order_id = {id}"
        
        result = conn.execute(text(q)).all()
        history = []

        for row in result:
            history.append(row._asdict())

        q=f"select * from charges where order_id ={id}"
        res_c = conn.execute(text(q)).all()
        charges = []
        
        for row in res_c:
            charges.append(row._asdict())

        out = {
            "order": order,
            "warranty":warr,
            "units": unit_list,
            "parts": part_list,
            "delivery": deli_list,
            "history":history,
            "charges":charges
        }

        return out

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
        

        # charges
        charges = {
            'labor':200,
            'diagnostic':300
        }
        q1=f"insert into charges(fee_name,amount,order_id) values ('diagnostic',200,{order_id});"
        q2=f"insert into charges(fee_name,amount,order_id) "

        # unit itemize
        for unit in range(1,data['numunits']+1):
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
                part_columns = "order_id, item_name, brand, est_price"
                u = f"insert into order_part({part_columns}) values('{order_id}','{data[f'item_name{part}']}','{data[f'item_brand{part}']}','{data[f'est_price{part}']}')"
                part_add = conn.execute(text(u))
                conn.commit()  

                op_id = conn.execute(text(f'select max(op_id) from order_part')).all()[0][0]
                charges[op_id] = data[f'est_price{part}']
        
        
        # insert charges

        inserted_charge =[]
        for c in charges:

            q = f"insert into charges(fee_name,amount,order_id) values ('{c}',{charges[c]},{order_id})"
            conn.execute(text(q))
            conn.commit()
            inserted_charge.append(c)


        return f"DATA INSERTED WITH UNIT AND PARTS AND INSERTED CHARGES ({inserted_charge})" 



def update_list(data,id):
    with engine.connect() as conn:

        old_data = load_row(id)

        tech_id = 3
        cust = f"select cust_id from customer where cust_name = '{old_data['order']['cust_name']}' limit 1"
        cust_id = conn.execute(text(cust)).all()[0][0]
        fee_id = 1
        
        q=f"update job_order set job_name = '{data['job_name']}', est_completion = '{data['est_completion']}', cust_id = {cust_id}, tech_id = {tech_id} where order_id = {id};"
        result = conn.execute(text(q))
        conn.commit()
         

        # unit itemize

        # missing delete unit
        # update existing items, not add 
        # select count() as num_of_x



        # nunitsq = conn.execute(text(f"select count(unit_id) as num_unit from unit_item where order_id={id};"))
        num_units = len(old_data["units"])
        num_parts = len(old_data["parts"])

        
       

        # # excess units to delete
        # elif(data["numunits"]<num_units):
        #     excess = num_units - data["numunits"]
        #     dropq = f"delete from unit_item where order_id = {id} limit {excess}"
        #     udelu=excess
        #     conn.execute(text(dropq))
        #     conn.commit()
        #     num_units-=excess

        delted = ""
        updated=""
        ids = []
        # def updateUnit(id,unit):
        #     a = id
        #     ids.append(id)
        #     if data[f'unit_name{unit}'] is None:
        #         delted = "DELETED"
        #         dropq = f"delete from unit_item where u_id = {a}"
        #         conn.execute(text(dropq))
        #         conn.commit()
        #         return None

        #     if (data[f"warranty{unit}"] == "yes") : warranty = True
        #     else : warranty = False

        #     if (data[f"returning{unit}"] == "yes") : returning = True
        #     else: returning = False
        #     updated = "UPDATED"
        #     u = f"update unit_item set unit_name = '{data[f'unit_name{unit}']}', brand = '{data[f'brand{unit}']}', warranty = {warranty}, warranty = {returning}, defect_description = '{data[f'desc{unit}']}' where unit_id = {a};"
        #     unit_update = conn.execute(text(u))
        #     conn.commit()


        # get all old units from order
        unitq = f"select unit_id from unit_item where order_id = {id};"
        u = conn.execute(text(unitq))
        u_id = u.all()

        # update existing rows
        # for unit in range(1,num_units):
            
        # map(updateUnit,u_id,range(1,len(u_id)+1))
        unit = 0
        for entry in u_id:
            a = entry[0]
            unit+=1
            if data[f'unit_name{unit}'] is None:
                delted = "DELETED"
                dropq = f"delete from unit_item where unit_id = {a}"
                conn.execute(text(dropq))
                conn.commit()
                break


            if (data[f"warranty{unit}"] == "yes") : warranty = True
            else : warranty = False

            if (data[f"returning{unit}"] == "yes") : returning = True
            else: returning = False
            updated = "UPDATED"
            u = f"update unit_item set unit_name = '{data[f'unit_name{unit}']}', brand = '{data[f'brand{unit}']}', warranty = {warranty}, warranty = {returning}, defect_description = '{data[f'desc{unit}']}' where unit_id = {a};"
            unit_update = conn.execute(text(u))
            conn.commit()

        unit_adds = "not added"
        # excess units to add
        if(data['numunits']>num_units):
            unit_adds="UNIT ADDED"
            for unit in range(num_units+1,data["numunits"]+1):
                unit_columns = "order_id, unit_name, brand, warranty, returning, defect_description"
                u = f"insert into unit_item({unit_columns}) values({id},'{data[f'unit_name{unit}']}','{data[f'brand{unit}']}',{warranty},{returning},'{data[f'desc{unit}']}');"
                unit_add = conn.execute(text(u))
                conn.commit()


        partq = f"select op_id from order_part where order_id = {id};"
        p = conn.execute(text(partq))
        p_id = p.all()

        # update existing rows
        # for unit in range(1,num_units):
            
        # map(updateUnit,u_id,range(1,len(u_id)+1))
        part = 0
        for entry in p_id:
            a = entry[0]
            part+=1
            if data[f'item_name{part}'] is None:
                delted = "DELETED"
                dropq = f"delete from order_part where op_id = {a}"
                conn.execute(text(dropq))
                conn.commit()
                break

            updated = "UPDATED"
            p = f"update order_part set item_name = '{data[f'item_name{part}']}', brand = '{data[f'item_brand{part}']}', est_price = {data[f'est_price{part}']} where op_id = {a};"
            part_update = conn.execute(text(u))
            conn.commit()


        part_adds = "parts not added"
        # excess parts to add
        if(data['num_of_parts']>num_parts):
            parts_adds="PART ADDED"
            for part in range(num_parts+1,data["num_of_parts"]+1):
                unit_columns = "order_id,item_name,brand,est_price"
                u = f"insert into order_part({unit_columns}) values({id},'{data[f'item_name{part}']}','{data[f'item_brand{part}']}','{data[f'est_price{part}']}');"
                unit_add = conn.execute(text(u))
                conn.commit()



        # # num_parts = conn.execute(text(f"select count(op_id) as num_parts from order_part where order_id={id};")).first().num_parts
        # num_parts = len(old_data["parts"])
        # # part itemize``


      

        # unames = []
        
        # uadd = []
        # udelu=0
        # udelp=0

        # if (data["num_of_parts"] > num_parts):
        #     for part in range(num_parts+1,data["num_of_parts"]+1):
        #         uadd.append({data[f'item_name{part}']})
        #         unit_columns = "order_id, item_name, brand, est_price"
        #         u = f"insert into order_part({unit_columns}) values({id},'{data[f'item_name{part}']}','{data[f'item_brand{part}']}','{data[f'est_price{part}']}')"
        #         unit_add = conn.execute(text(u))
        #         conn.commit()  
        # elif(data["num_of_parts"]<num_parts):
        #     excess = num_parts - data["num_of_parts"]
        #     udelp = excess
        #     dropq = f"delete from order_parts where order_id = {id} limit {excess}"
        #     conn.execute(text(dropq))
        #     conn.commit()
        #     num_parts-=excess

        # for part in range(1,num_parts):

        #     # delete part => search for part name in system, if doesn't exist delete
        #     # what if part name ang i-edit

        #     unames.append(data[f"item_name{part}"])
        #     partq = f"select op_id from order_part where order_id = {id} and item_name = '{old_data['parts'][part]['item_name']}'"
        #     p_id = conn.execute(text(partq)).all()[0][0]
        #     unit_columns = "order_id, item_name, brand, est_price"
        #     u = f"update order_part set item_name = '{data[f'item_name{part}']}', brand = '{data[f'item_brand{part}']}', est_price = '{data[f'est_price{part}']}' where op_id = {p_id};"
        #     unit_add = conn.execute(text(u))
        #     conn.commit()  
        

        return f"UNIT IDS = {u_id} LIST UPDATED {unit_adds} and {delted} {len(u_id)}, parts {parts_adds}"
    

def delete(id):
    with engine.connect() as conn:
        q = f'delete from job_order where order_id = {id}'
        conn.execute(text(q))
        conn.commit()

    return f"DELETED {id}"
    

def set_deli(data,order):
    with engine.connect() as conn:
        if order == "po":
            col_id = "po_id"
        else:
            col_id = "order_id"
        q = f"insert into delivery({col_id},deli_date,destination,origin,notes) values ({data['id']},'{data['deli_date']}','{data['destination']}','{data['origin']}','{data['notes']}');"
        conn.execute(text(q))
        conn.commit()

        return "DELIVERY INSERTED"
    
def load_delis():
    with engine.connect() as conn:
        q = f"select * from delivery;"
        res = conn.execute(text(q)).all()
        res_list = []

        for row in res:
            res_list.append(row._asdict)

        return res_list
