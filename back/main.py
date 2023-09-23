from flask import Flask,render_template,jsonify,request
from db import *
import numpy as np
import json

app = Flask(__name__)

app.debug = True

@app.route('/api', methods = ["GET"])
def home():
    return load_list()
    

@app.route('/add', methods=["POST","GET"])
def addjob():
    data = request.json
    
    return data["cust_name"]
    


if __name__ == "__main__":
    app.run(debug=True)