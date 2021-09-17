/*
 * @Author: your name
 * @Date: 2020-08-25 13:57:11
 * @LastEditTime: 2021-02-18 10:18:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\element-ui-node\server\app.js
 */
//定义简单路由
const express = require("express");
const app = express();
const index = require("./router/index");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
//这一句是连接上数据库
mongoose.connect("mongodb://localhost:27017/yuguo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//这里的myDbs是数据库的名字，不是表的名字

app.all("*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Content-Type, Content-Length, Authorization, Accept, X-Requested-With"
    );
    res.header(
        "Access-Control-Allow-Methods",
        "PUT, POST, GET, DELETE, OPTIONS"
    );

    if (req.method == "OPTIONS") {
        res.sendStatus(200);
        /让options请求快速返回/;
    } else {
        next();
    }
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", index);
const server = app.listen(8085, "localhost", () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});
