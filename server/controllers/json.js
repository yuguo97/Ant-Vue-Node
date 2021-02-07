/*
 * @Author: your name
 * @Date: 2020-09-16 16:43:36
 * @LastEditTime: 2021-02-07 09:49:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\element-ui-node\server\controllers\json.js
 */
var path = require("path");
var fs = require("fs");
const getJson = function(req, res) {
    var file = path.join(__dirname, "../data/bigScreen.json"); //文件路径，__dirname为当前运行js文件的目录
    //读取json文件
    fs.readFile(file, "utf-8", function(err, data) {
        if (err) {
            res.send({ code: 500, message: "error" });
            res.send({
                code: 200,
                data: JSON.parse(data),
                message: "success"
            });
        }
        res.send({
            code: 200,
            data: JSON.parse(data),
            message: "success"
        });
    });
};
module.exports = {
    getJson
};
