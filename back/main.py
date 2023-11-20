from flask import Flask,render_template,jsonify,request
from db import *
from parts import *
import numpy as np
import json

app = Flask(__name__)

app.debug = True

@app.route('/api', methods = ["GET"])
def home():
    return load_list()


@app.route('/api/job/<id>', methods = ["GET","POST"])
def viewrow(id):
    return load_row(id)
    

@app.route('/update/<id>', methods=["POST","GET"])
def updatejob(id):
    data = request.json
    if(request.method == "POST"):
        return update_list(data,id)
    
@app.route('/delete/<id>', methods=["POST","GET"])
def deletejob(id):
    if(request.method == "POST"):
        return delete(id)

@app.route('/add', methods=["POST","GET"])
def addjob():
    data = request.json
    return add_list(data)


@app.route('/deli/<order>', methods=["POST","GET"])
def setdeli(order):
    data = request.json
    return set_deli(data,order)
    
@app.route('/api/deli', methods=["GET","POST"])
def getdelis():
    
    return load_delis()

@app.route('/api/po',methods=["GET","POST"])
def getpos():
    return loadPOs()


@app.route('/api/po/<id>', methods = ["GET","POST"])
def getpo(id):
    return getPO(id)

@app.route('/add/po', methods=["POST","GET"])
def addpo():
    data = request.json
    return addPO(data)

@app.route('/update/po/<id>', methods = ["POST","GET"])
def editpo(id):
    data = request.json
    updatePO()
    return "UPDATED PO"

@app.route('/api/parts', methods=["GET","POST"])
def getparts():
    return loadParts()

@app.route('/update/parts', methods=["GET","POST"])
def stockOut():
    data = request.json
    return updateQuantity(data)







if __name__ == "__main__":
    app.run(debug=True)