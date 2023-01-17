'use strict';

const id = document.querySelector('#id');
const psword = document.querySelector('#psword');
const loginBtn = document.querySelector('button');

function handleLogin(e) {
  e.preventDefault();
  const req = {
    id: id.value,
    psword: psword.value,
  };
  fetch('/login', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req)
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        const p = document.createElement('p');
        p.innerText = res.msg;
        document.body.appendChild(p);
      }
    })
    .catch((err) => {
      console.error(new Error("로그인 중 에러 발생"));
    });
}

loginBtn.addEventListener('click', handleLogin);
