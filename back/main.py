from flask import Flask,render_template,jsonify,request
from db import *
import numpy as np
import json

app = Flask(__name__)

app.debug = True

@app.route('/api', methods = ["GET"])
def home():
    return load_list()

@app.route('/api/<id>', methods = ["GET","POST"])
def viewrow(id):

    return load_row(id)
    

@app.route('/update/<id>', methods=["POST","GET"])
def updatejob(id):
    data = request.json
    if(request.method == "POST"):
        return update_list(data,id)
    

@app.route('/add', methods=["POST","GET"])
def addjob():
    data = request.json
    
    return add_list(data)


@app.route('/deli', methods=["POST","GET"])
def setdeli():
    data = request.json
    return set_deli(data)
    


if __name__ == "__main__":
    app.run(debug=True)