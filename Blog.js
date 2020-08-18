function login_check(){ // 아이디,비밀번호 검사 함수
    let pwd1,pwd2,id;

    id = document.getElementById("signup-id").value;
    pwd1 = document.getElementById("signup-password1").value;
    pwd2 = document.getElementById("signup-password2").value;

    if(id === pwd1 && id == pwd2)
    {
        alert("아이디와 비밀번호가 똑같습니다."); //아이디와 비밀번호가 똑같을 경우.
        document.getElementById("signup-id").value = null;
        document.getElementById("signup-password1").value = null;
        document.getElementById("signup-password2").value = null;
    }
    else if(pwd1 != pwd2)
    {
        alert("비밀번호를 다시 확인해 주세요."); // 비밀번호가 서로 다를경우.
        document.getElementById("signup-password1").value = null;
        document.getElementById("signup-password2").value = null;
    }
    else if(id == "" || pwd1 == "" || pwd2 == ""){ //빈칸이 있는 경우.
        alert("빈칸을 채워주세요")
    }
    else{
        alert("회원가입 성공."); // 회원가입 승인. 
        $.ajax({
            method: "POST",
            url: "http://localhost:5000/sign-up",
            data: JSON.stringify({
                "id"       : id,
                "password" : pwd1
            }),
            contentType: 'application/json'
        })
        .done(function(msg) {
            console.log(msg)
            if (msg.id === id) {
                window.location.href = "./Login-Page.html";
            }
        });
    }
}
function Enter_Check(){ //엔터사용시 회원가입 버튼 작동
    // 엔터키의 코드는 13입니다.
    if(event.keyCode == 13){
        login_check();  // 실행할 이벤트
    }
}