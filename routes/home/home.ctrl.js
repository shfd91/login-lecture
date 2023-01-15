'use strict';

const home = (req, res) => {
  res.render('home/index.html');
}

const login = (req, res) => {
  res.render('home/login.html');
}

module.exports = {
  home,
  login
}