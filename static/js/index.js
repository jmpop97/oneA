function save_member() {
    let a= "저장"

    let formData = new FormData();
    formData.append("a_give",a);
    alert('hi')
    fetch('/save_member', { method: "POST", body: formData }).then((res) => res.json()).then((data) => {
        alert(data['msg']);
    })
}

function update_member() {
    let m_id="640fbdcbae352a14a1ee125a"
    let m_name= "이름수정됨"
    let m_mbti="mbti수정됨"
    let m_role="역할수정됨"
    let m_address="주소수정됨"
    let m_comment="소개수정됨"

    let formData = new FormData();
    formData.append("m_id_give",m_id);
    formData.append("m_name_give",m_name);
    formData.append("m_mbti_give",m_mbti);
    formData.append("m_role_give",m_role);
    formData.append("m_address_give",m_address);
    formData.append("m_comment_give",m_comment);
    alert('fix')
    fetch('/update_member', { method: "POST", body: formData }).then((res) => res.json()).then((data) => {
        alert(data['msg']);
    })
}
function delete_member() {
    let m_id="640fbdcbae352a14a1ee125a"
    
    let formData = new FormData();
    formData.append("m_id_give",m_id);
    alert('삭제')
    fetch('/delete_member', { method: "DELETE", body: formData }).then((res) => res.json()).then((data) => {
        alert(data['msg']);
    })
}
function read_member() {
    
}

