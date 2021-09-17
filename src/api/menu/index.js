/*
 * @Author: your name
 * @Date: 2020-09-20 11:16:26
 * @LastEditTime: 2020-09-20 11:19:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\element-ui-node\src\api\menu\index.js
 */
import request from "@/utils/request";

const menuApi = {
    getMenu: data => {
        return request({
            url: `/MENU/getMenu`,
            method: "get",
            data
        });
    }
};

export default menuApi;