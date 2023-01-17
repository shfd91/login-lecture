'use strict';

const id = document.querySelector('#id');
const name = document.querySelector('#name');
const psword = document.querySelector('#psword');
const confirmPsword = document.querySelector('#confirm-psword');
const registerBtn = document.querySelector('button');

function handleRegister(e) {
  e.preventDefault();
  if (!id.value){
    return alert("아이디를 입력해주십시오.");
  }
  if (psword.value !== confirmPsword.value){
    console.log("pw: ", psword.value, "confirim:", confirmPsword.value);
    return alert("비밀번호가 일치하지 않습니다.");
  }
  const req = {
    id: id.value,
    name: name.value,
    psword: psword.value,
  };

  fetch('/register', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    // home.ctrl.js로 리퀘스트로 담아 보낸다?
    body: JSON.stringify(req)
  })
    // 리스폰스 처리
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(res.msg);
        const p = document.createElement('p');
        p.innerText = res.msg;
        document.body.appendChild(p);
      }
    })
    .catch((err) => {
      console.error(new Error("회원가입 중 에러 발생"));
    });
}

registerBtn.addEventListener('click', handleRegister);
