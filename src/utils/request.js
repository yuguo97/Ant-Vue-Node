/*
 * @Author: your name
 * @Date: 2020-09-16 09:39:58
 * @LastEditTime: 2020-09-16 18:20:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\element-ui-node\src\utils\request.js
 */

import axios from "axios";

const server = axios.create({
    baseURL: process.env.API,
    timeout: 1000
});

// 添加请求拦截器
server.interceptors.request.use(
    function(config) {
        // 在发送请求之前做些什么
        return config;
    },
    function(error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加响应拦截器
server.interceptors.response.use(
    function(response) {
        // 对响应数据做点什么
        return response.data;
    },
    function(error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);

export default server;
