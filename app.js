'use strict';

// module
const express = require('express');
const app = express();
const port = 3000;

// routing
const home = require('./routes/home');


// app setting
app.set('views', './views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use('/', home); // use -> 미들웨어 등록해주는 메서드

module.exports = {
  app,
  port
}