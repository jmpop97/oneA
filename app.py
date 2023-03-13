from flask import Flask, render_template, request, jsonify
app = Flask(__name__)



from pymongo import MongoClient
client = MongoClient('mongodb+srv://oneA:<password>@onea.ojn8ull.mongodb.net/?retryWrites=true&w=majority')
db = client.dbsparta

# 메인 페이지
@app.route('/')
def main():
    return render_template('index.html')


if __name__ == '__main__':
   app.run('0.0.0.0', port=5000, debug=True)