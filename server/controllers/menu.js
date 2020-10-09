/*
 * @Author: your name
 * @Date: 2020-09-19 11:40:55
 * @LastEditTime: 2020-09-20 11:19:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /github/Ant-Vue-Node/server/controllers/routers.js
 */
const getMenu = function(req, res) {
    const data = [
    ]
    res.send({
        code: 200,
        data: data,
        message: "success"
    });
};

module.exports = {
    getMenu: getMenu
};