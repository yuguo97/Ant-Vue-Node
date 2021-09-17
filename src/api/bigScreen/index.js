/*
 * @Author: your name
 * @Date: 2020-09-16 10:13:51
 * @LastEditTime: 2020-09-16 18:11:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\element-ui-node\src\api\bigScreen\index.js
 */
import request from "@/utils/request";

const bigScreenApi = {
    getJsonMap: data => {
        return request({
            url: `/JSON/getJson`,
            method: "get",
            data
        });
    }
};

export default bigScreenApi;
