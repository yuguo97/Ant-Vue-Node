/*
 * @Author: your name
 * @Date: 2020-09-16 16:43:36
 * @LastEditTime: 2020-09-16 17:58:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\element-ui-node\server\controllers\json.js
 */
var path = require("path");
var fs = require("fs");
var Mock = require("mockjs");
const getJson = function(req, res) {
    var file = path.join(__dirname, "./../data/bigScreen.json"); //文件路径，__dirname为当前运行js文件的目录
    //读取json文件
    fs.readFile(file, "utf-8", function(err, data) {
        if (!err) {
            res.send({
                code: 200,
                data: JSON.parse(data),
                message: "success"
            });
        } else {
            res.send({ code: 500, message: "error" });
        }
    });
};
const getJsonNumber = function(req, res) {
    var data = Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        "list|1-10": [
            {
                // 属性 id 是一个自增数，起始值为 1，每次增 1
                "id|+1": 1,
                "date": "@datetime"
            }
        ]
    });
    res.send({
        code: 200,
        data: data,
        message: "success"
    });
};
module.exports = {
    getJson: getJson,
    getJsonNumber: getJsonNumber
};
