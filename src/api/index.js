/*
 * @Author: your name
 * @Date: 2020-09-02 22:07:22
 * @LastEditTime: 2020-09-13 22:34:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\element-ui-node\src\api\index.js
 */
import axios from "axios";

export const getJson = function (method) {
    return new Promise((resolve, reject) => {
        axios({
        method: 'get',
        url: method,
        dataType: "json",
        crossDomain: true,
        cache: false
      }).then(res => {
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  }