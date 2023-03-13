from flask import Flask, render_template, request, jsonify
app = Flask(__name__)



from pymongo import MongoClient
client = MongoClient('mongodb+srv://oneB:oneB@onea.ojn8ull.mongodb.net/?retryWrites=true&w=majority')
db = client.dbsparta
# 메인 페이지
@app.route('/')
def main():
    return render_template('index.html')

# member 저장하기
@app.route('/save_member', methods=["POST"])
def members():
    a_receive = request.form['a_give']
    doc ={'a': a_receive}
    db.member_info.insert_one(doc)
    return jsonify({'msg':'저장완료!'})



if __name__ == '__main__':
   app.run('0.0.0.0', port=5000, debug=True)