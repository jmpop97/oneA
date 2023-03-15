read_cards()
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
    fetch('/members').then((res) => res.json()).then((data) => {
        let rows = data['result']

        console.log(rows)
        console.log(rows[0])
        //a.(순서로 정할 값)
        rows.sort(function (a, b) {
            if (a.m_name > b.m_name) {
                return 1;
            }
            if (a.m_name < b.m_name) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
        console.log(rows)
        rows.forEach((a) => {            
            let name = a['m_name']
            let mbti = a['m_mbti']
            let role = a['m_role']
            let address = a['m_address']
            let comment = a['m_comment']

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



function read_cards() {

    fetch('/members2').then((res) => res.json()).then((data) => {
        let rows = data['result']
        console.log(rows)
        // document.getElementById('cards-box').empty()
        document.getElementById("card-list").innerHTML = "";

        rows.forEach((a) => {

            let image = a['m_img']
            let name = a['m_name']
            let comment = a['m_comment']
            // console.log(image, name, comment)
            let temp_html = `<button class="col" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal1">
            <div class="card">
              <img
                src="${image}"
                class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-title">${name}</p>
                <p class="card-text">${comment}</p>
              </div>
            </div>
          </button>`

//             $('#cards-box').append(temp_html)
              document.getElementById('card-list').insertAdjacentHTML("beforeend",temp_html)
        })

        // console.log("+card")
        let temp_html = `<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1"
        aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel1">
                자기소개
              </h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <!-- 이미지등록 -->
            <div class="modal-body">
              <h3 style="margin-left: 8%">이미지 등록</h3>
              <!-- 정보입력 -->
              <form action="/" method="GET">
                <div>
                  <div class="img_box1">
                    <img id="u_url"
                      src="https://www.sciencetimes.co.kr/wp-content/uploads/2018/10/fc08a3_ecc89ba4706a4199a9a51be9500037d0mv2_d_1754_2480_s_2.jpg" />
                  </div>
                  <div class="img_url1">
                    <input type="text" id="u_img" placeholder="url을 넣어주세요" style="width: 300px" />
                    <button id="u_img_btn" style="width: 90px">
                      등록하기
                    </button>
                  </div>
                </div>
                <ul class="check_box">
                  <li>
                    <label for="u_name">이름</label>
                    <input type="text" id="u_name" name="m_name" />
                  </li>
                  <li>
                    <label for="u_mbti">MBTI</label>
                    <input type="text" id="u_mbti" name="m_mbti" />
                  </li>
                  <li>
                    <label for="u_role">역할</label>
                    <input type="text" id="u_role" name="m_role" />
                  </li>
                  <li>
                    <label for="u_address">사는 지역</label>
                    <input type="text" id="u_address" name="m_address" />
                  </li>
                  <li>
                    <label for="u_comment">자기소개</label>
                    <textarea id="u_comment"></textarea>
                  </li>
                </ul>
                <div id="ud-btn">
                  <button id="u_btn">수정하기</button>
                  <button id="d_btn">삭제하기</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <!-- 모달 트리거 생성하기 시작 -->
          <div class="card-body2">
            <button type="button" class="btn btn-outline-danger" data-bs-toggle="modal"
              data-bs-target="#exampleModal" style="width: 300px; height: 450px; font-size: 150px">
              +
            </button>

            <!-- 헤드부분 -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h2 class="modal-title fs-5" id="exampleModalLabel">
                      자기 소개
                    </h2>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>


                  <!-- 이미지 등록 -->
                  <div class="modal-body">
                    <div class="user_wrap">
                      <h2 style="margin-left: 8%">이미지 등록</h2>

                      <!-- 정보입력 -->
                      <form action="/" method="POST">
                        <div>
                          <div class="img_box">
                            <img id="s_url"
                              src="https://www.sciencetimes.co.kr/wp-content/uploads/2018/10/fc08a3_ecc89ba4706a4199a9a51be9500037d0mv2_d_1754_2480_s_2.jpg" />
                          </div>
                          <div class="img_url">
                            <input type="text" id="s_img" placeholder="url을 넣어주세요" style="width: 300px" />
                            <button id="s_img_btn">등록하기</button>
                          </div>
                        </div>
                        <div class="check_box">
                          <ul>
                            <li>
                              <label for="s_name">이름</label>
                              <input type="text" id="s_name" name="m_name" />
                            </li>
                            <li>
                              <label for="s_mbti">MBTI</label>
                              <input type="text" id="s_mbti" name="m_mbti" />
                            </li>
                            <li>
                              <label for="s_role">역할</label>
                              <input type="text" id="s_role" name="m_role" />
                            </li>
                            <li>
                              <label for="s_address">사는 지역</label>
                              <input type="text" id="s_address" name="m_address" />
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
