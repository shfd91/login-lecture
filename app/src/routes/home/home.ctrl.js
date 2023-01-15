'use strict';


const output = {
  home: (req, res) => {
    res.render('home/index.html');
  },
  login: (req, res) => {
    res.render('home/login.html');
  }
}

const users = {
  id: ["woorimIT", "나개발", "김팀장", "abc"],
  psword: ["1234", "1234", "123456", "abc"],
};

const process = {
  login: (req, res) => {
    console.log(req.body);
    const id = req.body.id;
    const psword = req.body.psword;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.psword[idx] === psword){
        return res.json({
          success: true,
        })
      }
    }
    return res.json({
      success: false,
      msg: "로그인에 실패했습니다.",
    });
  }
}



module.exports = {
  output,
  process
}