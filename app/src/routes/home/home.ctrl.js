'use strict';
const User = require("../../models/User");
const logger = require("../../config/logger");

// get으로 요청하면 여기로
const output = {
  home: (req, res) => {
    res.render('home/index.html');
    logger.info(`GET / 200 "홈 화면으로 이동"`);
  },
  login: (req, res) => {
    res.render('home/login.html');
    logger.info(`GET /login 200 "로그인 화면으로 이동"`);
  },
  register: (req, res) => {
    res.render('home/register.html');
    logger.info(`GET /register 200 "회원가입 화면으로 이동"`);
  }
}

// post로 요청하면 여기로
const process = {
    login: async (req, res) => {
    // User를 인스턴스화할 때 req.body를 값으로 가짐
    // console.log("req.body:", req.body);
    const user = new User(req.body);
    const response = await user.login();
    if (response.err)
      logger.error(`POST /login 200 Response: "success: ${response.success}", ${response.err}`);
    else
      logger.info(`POST /login 200 Response: "success: ${response.success}", msg: ${response.msg}`);
    // console.log(response);
    return res.json(response);
  },


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
    register: async (req, res) => {
      const user = new User(req.body);
      const response = await user.register();
      if (response.err)
        logger.error(`POST /register 200 Response: "success: ${response.success}", ${response.err}`);
      else
        logger.info(`POST /register 200 Response: "success: ${response.success}", msg: ${response.msg}`);
      // console.log(response);
      // 클라이언트에 응답
      return res.json(response);

  }
}



module.exports = {
  output,
  process
}