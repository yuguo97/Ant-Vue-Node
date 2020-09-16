/*
 * @Author: your name
 * @Date: 2020-08-25 13:57:11
 * @LastEditTime: 2020-09-16 16:28:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\element-ui-node\src\utils\auth.js
 */

const TokenKey = "YuGuo-Token";

export function getToken() {
    return sessionStorage.getItem(TokenKey);
}

export function setToken(token) {
    return sessionStorage.setItem(TokenKey, token);
}

export function removeToken() {
    return sessionStorage.removeItem(TokenKey);
}
