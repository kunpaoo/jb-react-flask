from flask import Flask,render_template,jsonify,request,redirect
from db import *
import numpy as np

app = Flask(__name__)

app.debug = True


@app.route('/job_order', methods = ["GET","POST"]) # job order
def custlist():
    return load_list("job_order")

@app.route('/customers/add', methods = ["GET","POST"])
def addlist():
    if(request.method == "POST"):
        add_list(request.form)
        return redirect('/customers')
    
@app.route('/customers/edit/<id>', methods=["GET","POST"])
def editcust():
    if(request.method == "POST"):
        edit_list(request.form)
        return redirect('/customers')
        
    

if __name__ == "__main__":
    app.run(debug=True)