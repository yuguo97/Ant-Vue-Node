/*
 * @Author: your name
 * @Date: 2020-09-19 11:40:55
 * @LastEditTime: 2020-11-12 17:14:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /github/Ant-Vue-Node/server/controllers/routers.js
 */
const getMenu = function(req, res) {
    const data = [];
    res.send({
        code: 200,
        data: data,
        message: "success",
        time: new Date().toLocaleString()
    });
};

module.exports = {
    getMenu: getMenu
};
