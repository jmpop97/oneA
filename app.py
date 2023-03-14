from flask import Flask, render_template, request, jsonify
from bson import ObjectId
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


# member update 
@app.route('/update_member', methods=["POST"])
def update_member():
    id_receive = request.form['m_id_give']
    m_name_receive = request.form['m_name_give']
    m_mbti_receive = request.form['m_mbti_give']
    m_role_receive = request.form['m_role_give']
    m_address_receive = request.form['m_address_give']
    m_comment_receive = request.form['m_comment_give']
    doc ={'m_name': m_name_receive,
          'm_mbti' : m_mbti_receive,
          'm_role' : m_role_receive,
          'm_address' : m_address_receive,
          'm_comment' : m_comment_receive,
          }
    print(id_receive)
    db.member_info.update_one({'_id':ObjectId(id_receive)},{'$set': doc})
    return jsonify({'msg':'수정완료!'})

# member delet
@app.route('/delete_member', methods=["DELETE"])
def delete_member():
    id_receive = request.form['m_id_give']
    db.member_info.delete_one({'_id':ObjectId(id_receive)})
    return jsonify({'msg':'삭제완료!'})



if __name__ == '__main__':
   app.run('0.0.0.0', port=5000, debug=True)