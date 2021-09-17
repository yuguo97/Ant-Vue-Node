/*
 * @Author: your name
 * @Date: 2021-02-07 14:54:17
 * @LastEditTime: 2021-02-07 15:46:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \element-ui-node\src\api\user\index.js
 */
import request from "@/utils/request";
const userApi = {
    initUser: data => {
        return request({
            url: `/system/user`,
            method: "get",
            data
        });
    },
    deleteUser: data => {
        return request({
            url: `/system/delUser`,
            method: "post",
            data
        });
    }
};

export default userApi;
