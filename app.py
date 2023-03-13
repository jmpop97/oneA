from flask import Flask, render_template, request, jsonify
app = Flask(__name__)



from pymongo import MongoClient
client = MongoClient('mongodb+srv://sparta:test@cluster0.nlfpdbt.mongodb.net/?retryWrites=true&w=majority')
db = client.dbsparta



if __name__ == '__main__':
   app.run('0.0.0.0', port=5000, debug=True)