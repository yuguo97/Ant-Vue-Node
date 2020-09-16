/*
 * @Author: your name
 * @Date: 2020-09-10 21:30:41
 * @LastEditTime: 2020-09-15 14:50:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /github/element-ui-node/config/dev.env.js
 */
"use strict";
const merge = require("webpack-merge");
const prodEnv = require("./prod.env");

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    API: '"./api"'
});
