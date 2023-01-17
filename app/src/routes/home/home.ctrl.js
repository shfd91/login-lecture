'use strict';
const User = require("../../models/User");

const output = {
  home: (req, res) => {
    res.render('home/index.html');
  },
  login: (req, res) => {
    res.render('home/login.html');
  }
}


const process = {
  login: (req, res) => {
    // User를 인스턴스화할 때 req.body를 값으로 가짐
    // console.log("req.body : ", req.body);
    const user = new User(req.body);
    const response = user.login();
    console.log(response);
    return res.json(response);


    // const id = req.body.id;
    // const psword = req.body.psword;

    // const users = UserStroage.getUsers("id", "psword");
    // const response = {};
    // if (users.id.includes(id)) {
    //   const idx = users.id.indexOf(id);
    //   if (users.psword[idx] === psword){
    //     response.success = true;
    //     return res.json(response);
    //   }
    // }
    // response.success = false;
    // response.msg = "로그인에 실패하셨습니다.";
    // return res.json(response);
  }
}



module.exports = {
  output,
  process
}