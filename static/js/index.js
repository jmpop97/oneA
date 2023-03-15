
function save_member() {
    let m_img = "https://play-lh.googleusercontent.com/38AGKCqmbjZ9OuWx4YjssAz3Y0DTWbiM5HB0ove1pNBq_o9mtWfGszjZNxZdwt_vgHo=w240-h480-rw"
    let m_name = "ㄷ"
    let m_mbti = "ㄷ"
    let m_role = "ㄷ"
    let m_address = "ㄷ"
    let m_comment = "ㄷ"

    let formData = new FormData();
    formData.append("m_img_give", m_img);
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
    let m_img = "https://play-lh.googleusercontent.com/38AGKCqmbjZ9OuWx4YjssAz3Y0DTWbiM5HB0ove1pNBq_o9mtWfGszjZNxZdwt_vgHo=w240-h480-rw"
    let m_name = "이름수정됨"
    let m_mbti = "mbti수정됨"
    let m_role = "역할수정됨"
    let m_address = "주소수정됨"
    let m_comment = "소개수정됨"

    let formData = new FormData();
    formData.append("m_id_give", m_id);
    formData.append("m_img_give", m_img);
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


function read_cards() {

    fetch('/members').then((res) => res.json()).then((data) => {
        let rows = data['result']
        console.log(rows)
        // document.getElementById('cards-box').empty()
        document.getElementById("card-list").innerHTML = "";

        rows.forEach((a) => {

            let image = a['m_img']
            let name = a['m_name']
            let comment = a['m_comment']
            // console.log(image, name, comment)
            let temp_html = `<div class="col">
                                <div class="card">
                                    <img
                                    src="${image}"
                                    class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <p class="card-title">${name}</p>
                                    <p class="card-text">${comment}</p>
                                </div>
                                </div>
                            </div>`

//             $('#cards-box').append(temp_html)
              document.getElementById('card-list').insertAdjacentHTML("beforeend",temp_html)
        })

        // console.log("+card")
        let temp_html = `<div class="col">
                            <div class="card">
                            <!-- 모달 트리거 생성하기 시작 -->
                            <div class="card-body2">
                                <button
                                type="button"
                                class="btn btn-outline-danger"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                style="width: 300px; height: 450px; font-size: 150px"
                                >
                                +
                                </button>

                                <!-- 헤드부분 -->
                                <div
                                class="modal fade"
                                id="exampleModal"
                                tabindex="-1"
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                                >
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h2
                                        class="modal-title fs-5"
                                        id="exampleModalLabel"
                                        >
                                        자기 소개
                                        </h2>
                                        <button
                                        type="button"
                                        class="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                        ></button>
                                    </div>

                                    <!-- 이미지 등록 -->
                                    <div class="modal-body">
                                        <div class="user_wrap">
                                        <h2 style="margin-left: 8%">이미지 등록</h2>
                                        <div>
                                            <div class="img_box">
                                            <img
                                                id="s_url"
                                                src="https://www.sciencetimes.co.kr/wp-content/uploads/2018/10/fc08a3_ecc89ba4706a4199a9a51be9500037d0mv2_d_1754_2480_s_2.jpg"
                                                width="100%"
                                                ,
                                                height="auto"
                                            />
                                            </div>
                                            <div class="img_url">
                                            <input
                                                type="text"
                                                id="s_img"
                                                placeholder="url을 넣어주세요"
                                                style="width: 300px"
                                            />
                                            <button id="s_img_btn">등록하기</button>
                                            </div>
                                        </div>

                                        <!-- 정보입력 -->
                                        <form action="/" method="POST">
                                            <div class="check_box">
                                            <ul>
                                                <li>
                                                <label for="s_name">이름</label>
                                                <input
                                                    type="text"
                                                    id="s_name"
                                                    name="m_name"
                                                />
                                                </li>
                                                <li>
                                                <label for="s_mbti">MBTI</label>
                                                <input
                                                    type="text"
                                                    id="s_mbti"
                                                    name="m_mbti"
                                                />
                                                </li>
                                                <li>
                                                <label for="s_role">역할</label>
                                                <input
                                                    type="text"
                                                    id="s_role"
                                                    name="m_role"
                                                />
                                                </li>
                                                <li>
                                                <label for="s_address">사는 지역</label>
                                                <input
                                                    type="text"
                                                    id="s_address"
                                                    name="m_address"
                                                />
                                                </li>
                                                <li>
                                                <label for="s_comment">자기소개</label>
                                                <textarea id="s_comment"></textarea>
                                                </li>
                                                <button id="s_btn">등록하기</button>
                                            </ul>
                                            </div>
                                        </form>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <!-- 수정, 삭제하기 -->

                            






                            </div>
                        </div>`
        document.getElementById('card-list').insertAdjacentHTML("beforeend",temp_html)
    })
}

function moveToTop() {
    document.body.scrollIntoView({ behavior: "smooth" });
  };
