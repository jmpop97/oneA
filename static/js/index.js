read_cards();

function save_member() {

  let m_img = document.getElementById("s_img").value
  let m_name = document.getElementById("s_name").value
  let m_mbti = document.getElementById("s_mbti").value
  let m_role = document.getElementById("s_role").value
  let m_address = document.getElementById("s_address").value
  let m_comment = document.getElementById("s_comment").value
  /*
  let m_img = document.getElementById("s_img").innerText
  let m_name = document.getElementById("s_name").innerText
  let m_mbti = document.getElementById("s_mbti").innerText
  let m_role = document.getElementById("s_role").innerText
  let m_address = document.getElementById("s_adress").innerText
  let m_comment = document.getElementById("s_comment").innerText
  */
  let formData = new FormData();
  formData.append("m_img_give", m_img);
  formData.append("m_name_give", m_name);
  formData.append("m_mbti_give", m_mbti);
  formData.append("m_role_give", m_role);
  formData.append("m_address_give", m_address);
  formData.append("m_comment_give", m_comment);


  fetch('/member', { method: "POST", body: formData, })
    .then((res) => res.json())
    .then((data) => {
      // alert(data['저장 완료']);
      window.location.reload();
    });
};

function update_member(id) {

  let m_id = id
  let m_img = document.getElementById("u_img").value
  let m_name = document.getElementById("u_name").value
  let m_mbti = document.getElementById("u_mbti").value
  let m_role = document.getElementById("u_role").value
  let m_address = document.getElementById("u_address").value
  let m_comment = document.getElementById("u_comment").value
  /*
  let m_id = document.getElementById("u_id").value
  let m_img = document.getElementById("u_img").value
  let m_name = document.getElementById("u_name").value
  let m_mbti = document.getElementById("u_mbti").value
  let m_role = document.getElementById("u_role").value
  let m_address = document.getElementById("u_address").value
  let m_comment = document.getElementById("u_comment").value
  */
  let formData = new FormData();
  formData.append("m_id_give", m_id);
  formData.append("m_img_give", m_img);
  formData.append("m_name_give", m_name);
  formData.append("m_mbti_give", m_mbti);
  formData.append("m_role_give", m_role);
  formData.append("m_address_give", m_address);
  formData.append("m_comment_give", m_comment);

  fetch('/member', { method: "PUT", body: formData }).then((res) => res.json()).then((data) => {
    // alert(data['수정 완료']);
  })
};

function delete_member(id) {

  let m_id = id

  let formData = new FormData();
  formData.append("m_id_give", m_id);
  fetch('/member', { method: "DELETE", body: formData }).then((res) => res.json()).then((data) => {
    alert(data['msg']);
  })
};

function read_members() {

  fetch('/members').then((res) => res.json()).then((data) => {
    let rows = data['result']
    var test = rows
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
};

function read_member(id) {

  let m_id = id
  fetch_id = '/member/' + m_id;
  document.getElementById("exampleModal1").innerHTML = "";
  fetch(fetch_id).then((res) => res.json()).then((data) => {
    let a = data['result']['0']
    let image = a['m_img']
    let name = a['m_name']
    let mbti = a['m_mbti']
    let role = a['m_role']
    let address = a['m_address']
    let comment = a['m_comment']
    let temp_html = `
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
            
            <!-- 정보입력 -->
            <form action="/">
              <div>

              </div>
              <ul class="check_box">
                <li>
                <label for="u_img">프로필사진url</label>
                <input type="text" id="u_img" name="m_img" value="${image}">
                </li>
                <li>
                  <label for="u_name">이름</label>
                  <input type="text" id="u_name" name="m_name" value="${name}">
                </li>
                <li>
                  <label for="u_mbti">MBTI</label>
                  <input type="text" id="u_mbti" name="m_mbti" value="${mbti}">
                </li>
                <li>
                  <label for="u_role">역할</label>
                  <input type="text" id="u_role" name="m_role" value="${role}" />
                </li>
                <li>
                  <label for="u_address">주소</label>
                    <input type="text" id="u_address" name="m_address" onclick="addressAPI2()" value="${address}" readonly />
                </li>
                <li>
                  <label for="u_comment">자기소개</label><br>
                  <textarea id="u_comment" >${comment}</textarea>
                </li>

                <div id="ud-btn">
                <button id="u_btn" onclick="update_member('${m_id}')">수정하기</button>
                <button id="d_btn" onclick="delete_member('${m_id}')">삭제하기</button>
              </div>
              </ul>

            </form>
          </div>
        </div>
      </div>
    `
    document.getElementById('exampleModal1').insertAdjacentHTML("beforeend", temp_html)
  })
};

function read_name_member() {

  fetch('/members').then((res) => res.json()).then((data) => {
    let rows = data['result']


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
};

function read_cards() {

  fetch('/members2').then((res) => res.json()).then((data) => {
    let rows = data['result']

    // document.getElementById('cards-box').empty()
    document.getElementById("card-list").innerHTML = "";

    rows.forEach((a) => {
      let m_id = a['_id']['$oid']

      let image = a['m_img']
      let name = a['m_name']
      let comment = a['m_comment']
      // console.log(image, name, comment)
      let temp_html = `<button class="col" type="button" onclick = "read_member('${m_id}')" data-bs-toggle="modal" data-bs-target="#exampleModal1">
            <div class="card">
              <img
                src="${image}"
                class="card-img-top" alt="..." />
              <div class="card-body">
                <div class="card-title-box">
                  <div class="card-title">${name}
                  </div>
                </div>
                <div class="card-text-box">
                  <div class="card-text">${comment}
                  </div>
                </div>
              </div>
            </div>
          </button>
          <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1"
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
                <form action="/">
                  <div>
                    <div class="img_box1">
                      <img id="u_url"
                        src="img수정등록" />
                    </div>
                    <div class="img_url1">
                      <input type="text" id="u_img" placeholder="url을 넣어주세요" style="width: 300px" value="img수정등록"/>
                      <button id="u_img_btn" style="width: 90px">
                        등록하기
                      </button>
                    </div>
                  </div>
                  <ul class="check_box">
                    <li>
                      <label for="u_name">이름</label>
                      <input type="text" id="u_name" name="m_name" value="이름수정넣기"/>
                    </li>
                    <li>
                      <label for="u_mbti">MBTI</label>
                      <input type="text" id="u_mbti" name="m_mbti" value="mbti수정넣기"/>
                    </li>
                    <li>
                      <label for="u_role">역할</label>
                      <input type="text" id="u_role" name="m_role"value="열할수정넣기" />
                    </li>
                    <li>
                      <label for="u_address">주소</label>
                        <input type="text" id="u_address" name="m_address" onclick="addressAPI2()" readonly />
                    </li>
                    <li>
                      <label for="u_comment">자기소개</label>
                      <textarea id="u_comment" >코멘드수정넣기</textarea>
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
        </div>`

      //             $('#cards-box').append(temp_html)
      document.getElementById('card-list').insertAdjacentHTML("beforeend", temp_html)
    })
    let temp_html = `<div class="col">
    <div class="card">
      <!-- 모달 트리거 생성하기 시작 -->
      <div class="card-body2">
        <button type="button" class="btn btn-outline-danger" data-bs-toggle="modal"
          data-bs-target="#exampleModal" style="width: 300px; height: 450px; font-size: 150px">
          +
        </button>
​
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
​              <!-- 이미지 등록 -->
              <div class="modal-body">
                <div class="user_wrap">

​
                  <!-- 정보입력 -->
                  <form action="/" >

​
                    </div>
                    <div class="check_box">
                      <ul>
                        <label for="s_img">프로필사진url</label>
                        <input type="text" id="s_img" name="m_img" />
                        </li>
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
                          <label for="s_address">주소</label>
                            <input type="text" id="s_address" name="m_address" onclick="addressAPI1()" readonly />
​
                        </li>
                        <li>
                          <label for="s_comment">자기소개</label><br>
                          <textarea id="s_comment"></textarea>
                        </li>
                        <button id="s_btn" onclick="save_member()">등록하기</button>
                      </ul>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
​
      <!-- 수정, 삭제하기 -->
    </div>
  </div>`
    document.getElementById('card-list').insertAdjacentHTML("beforeend", temp_html)

    // console.log("+card")
  })
};

function moveToTop() {
  console.log("moveToTop()");
  document.body.scrollIntoView({ behavior: "smooth" });
};