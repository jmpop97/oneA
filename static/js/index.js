function save_member() {
    let a= "저장"

    let formData = new FormData();
    formData.append("a_give",a);
    alert('hi')
    fetch('/save_member', { method: "POST", body: formData }).then((res) => res.json()).then((data) => {
        alert(data['msg']);
    })
}
