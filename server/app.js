//定义简单路由
const express = require('express');
const hero = require('./api/api');
const mongoose = require("mongoose");

const bodyParser = require("body-parser");




//这一句是连接上数据库
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true });

//这里的myDbs是数据库的名字，不是表的名字



const app = express();
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

  if (req.method == 'OPTIONS') {
    res.send(200); /让options请求快速返回/
  }
  else {
    next();
  }
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api',hero);
app.listen(3000,() => {
    console.log('http://localhost:3000/api/hero')
});
