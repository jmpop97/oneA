function save_member() {
    let m_name = "이름"
    let m_mbti = "mbti"
    let m_role = "역할"
    let m_address = "주소"
    let m_comment = "소개"

    let formData = new FormData();
    formData.append("m_name_give", m_name);
    formData.append("m_mbti_give", m_mbti);
    formData.append("m_role_give", m_role);
    formData.append("m_address_give", m_address);
    formData.append("m_comment_give", m_comment);
    alert('hi')

    fetch('/member', { method: "POST", body: formData, })
    .then((res) => res.json())
    .then((data) => {
        alert(data['msg']);
    });
}

function update_member() {
    let m_id = "640fbe71b2928d8e1218f8f2"
    let m_name = "이름수정됨"
    let m_mbti = "mbti수정됨"
    let m_role = "역할수정됨"
    let m_address = "주소수정됨"
    let m_comment = "소개수정됨"

    let formData = new FormData();
    formData.append("m_id_give", m_id);
    formData.append("m_name_give", m_name);
    formData.append("m_mbti_give", m_mbti);
    formData.append("m_role_give", m_role);
    formData.append("m_address_give", m_address);
    formData.append("m_comment_give", m_comment);
    alert('fix')
    fetch('/member', { method: "PUT", body: formData }).then((res) => res.json()).then((data) => {
        alert(data['msg']);
    })
}
function delete_member() {
    let m_id = "640fbdcbae352a14a1ee125a"

    let formData = new FormData();
    formData.append("m_id_give", m_id);
    alert('삭제')
    fetch('/member', { method: "DELETE", body: formData }).then((res) => res.json()).then((data) => {
        alert(data['msg']);
    })
}
function read_member() {
    console.log("read_member work")


}

