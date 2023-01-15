'use strict';

// use: 미들웨어를 등록해주는 메서드

// module
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({extended:true}));

// routing
const home = require('./src/routes/home');

// app setting
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(`${__dirname}/src/public`));
app.use('/', home); // use -> 미들웨어 등록해주는 메서드

module.exports = {
  app,
  port
}