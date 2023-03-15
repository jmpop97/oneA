function addressAPI1() {
    //카카오 주소 발생
    new daum.Postcode({
        oncomplete: function (data) { //선택시 입력값 세팅
            document.getElementById("s_address1").value = data.address; //주소 넣기
            document.querySelector("textarea[id=s_comment]").focus(); //자기소개 포커싱
        }
    }).open();
};


function addressAPI2() {
    //카카오 주소 발생
    new daum.Postcode({
        oncomplete: function (data) { //선택시 입력값 세팅
            document.getElementById("s_address2").value = data.address; //주소 넣기
            document.querySelector("textarea[id=s_comment]").focus(); //자기소개 포커싱
        }
    }).open();
};