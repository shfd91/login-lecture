'use strict';

// module
const express = require('express');
const app = express();
// 환경변수 관리 모듈
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config();

// routing
const home = require('./src/routes/home');

// app setting
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({extended:true}));
app.use(morgan("dev"));
app.use('/', home); // use -> 미들웨어 등록해주는 메서드

module.exports = {
  app
}