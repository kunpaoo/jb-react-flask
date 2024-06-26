from datetime import datetime
from bills import *

from db import *

date_today = datetime.today().strftime('%Y-%m-%d')



def statcheckAll(tech_id):
    with engine.connect() as conn:
        q=f"select order_id from job_order where tech_id = {tech_id} and released = 0"
        res = conn.execute(text(q)).all()
        # id_list = []
        for row in res:
            id=row._asdict()
            statcheck(id['order_id'])
        
    return f"STATUS CHECKED for orders for {tech_id}" 

def statcheck(id):
    
    order = load_row(id)

    def checkRepairCompletion():
        if order['order']['completed']:
            return checkBalance()
        return "Repair Ongoing"

    def checkReleased():
        if order['order']['released']:
            return "Released"
        return "For Releasing"

    def checkDownpayment():
        cost = int(order['order']['cost'])
        bal = int(order['order']['balance'])
        if bal == cost-200:
            if order['warranty']:
                return checkDelivery()
            return checkParts()
        return "Awaiting Downpayment"

    def checkBalance():
        bal = int(order['order']['balance'])
        if bal == 0:
            return "For Releasing"
        return "Awaiting Payment"

    def checkDelivery(): # WARRANTIED ORDERS ONLY
        deliveries = order['delivery']

        if len(deliveries) == 0:
            return "Scheduling Delivery"
        
        for delivery in deliveries:
            if not delivery['deli_delivered']:
                return "Delivery Ongoing"
            if not delivery['deli_received']:
                return "Awaiting Delivery"
        return checkBalance()
    
    def checkParts():
        parts = order['parts']
        for part in parts:
            if part['availability'] == False:
                return "Awaiting Parts"
        return "Repair Ongoing"    

    with engine.connect() as conn:
        status = order['history'][0]['status_name']
        new_status = status
        match status:
            case "Awaiting Downpayment":
                new_status = checkDownpayment()
            case "Awaiting Parts":
                new_status = checkParts()
            case "Repair Ongoing":
                new_status = checkRepairCompletion()
            case "Awaiting Payment":
                new_status = checkBalance()
            case "Scheduling Delivery":
                new_status = checkDelivery()
            case "Delivery Ongoing":
                new_status = checkDelivery()
            case "Awaiting Delivery":
                new_status = checkDelivery()
            case "For Releasing":
                new_status = checkReleased()
            

                
        if status != new_status:
            q=f"insert into order_status(status_name, status_date, order_id) values ('{new_status}','{date_today}',{id})"
            conn.execute(text(q))
            conn.commit()
        
        



