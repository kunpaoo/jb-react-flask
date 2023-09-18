from flask import Flask,render_template,jsonify,request
from db import *
import numpy as np


app = Flask(__name__)

app.debug = True

@app.route('/api', methods = ["GET"])
def home():
    return load_list()
    

@app.route('/add', methods=["GET","POST"])
def addjob():
    if(request.method == "POST"):
        add_list(request.form)
    return load_list()
    


if __name__ == "__main__":
    app.run(debug=True)