from flask import Flask,render_template,jsonify
from db import load_list
import numpy as np

app = Flask(__name__)

app.debug = True

@app.route('/api', methods = ["GET"])
def home():
    
    return load_list()
    

if __name__ == "__main__":
    app.run(debug=True)