function save_member() {
    let m_name= "이름"
    let m_mbti="mbti"
    let m_role="역할"
    let m_address="주소"
    let m_comment="소개"

    let formData = new FormData();
    formData.append("m_name_give",m_name);
    formData.append("m_mbti_give",m_mbti);
    formData.append("m_role_give",m_role);
    formData.append("m_address_give",m_address);
    formData.append("m_comment_give",m_comment);
    alert('hi')
    fetch('/save_member', { method: "POST", body: formData }).then((res) => res.json()).then((data) => {
        alert(data['msg']);
    })
}
