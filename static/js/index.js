
function save_member() {
    let m_name = "ㄷ"
    let m_mbti = "ㄷ"
    let m_role = "ㄷ"
    let m_address = "ㄷ"
    let m_comment = "ㄷ"

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
function read_members() {

    fetch('/members').then((res) => res.json()).then((data) => {
        let rows = data['result']
        var test = rows
        rows.forEach((a) => {
            console.log(a)
            let name = a['m_name']
            let mbti = a['m_mbti']
            let role = a['m_role']
            let address = a['m_address']
            let comment = a['m_comment']

            let temp_html=`<div class="footer-container">${name}</div>`
            document.getElementById('page-logo').append(temp_html)

            // let temp_html = `<tr>
            //                     <td>${name}</td>
            //                     <td>${mbti}</td>
            //                     <td>${role}</td>
            //                     <td>${address}</td>
            //                     <td>${comment}</td>
            //                 </tr>`       
            // $('#order-box').append(temp_html)
        })

    })
}

function read_member() {
    let m_id = "640fbe71b2928d8e1218f8f2"
    console.log(m_id)
    fetch_id='/member/'+m_id;
    fetch(fetch_id).then((res) => res.json()).then((data) => {
        let rows = data
        console.log(rows)

        

    })
}

function read_name_member() {
    fetch('/membersname').then((res) => res.json()).then((data) => {
        let rows = data['result']

        console.log(rows)

        rows.forEach((a) => {            
            let name = a['m_name']
            let mbti = a['m_mbti']
            let role = a['m_role']
            let address = a['m_address']
            let comment = a['m_comment']

        })
    })
}

