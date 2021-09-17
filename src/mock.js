/*
 * @Author: your name
 * @Date: 2020-08-25 13:57:11
 * @LastEditTime: 2020-09-16 18:30:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\element-ui-node\src\mock.js
 */

//引入mockjs
var Mock = require("mockjs");
//使用mockjs模拟数据
export default Mock.mock("/api", {
    "HISTORICAL|5-15": [
        {
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            DATE: "@datetime",
            EXCESS: "@boolean",
            "COD|1-100": 20,
            "PH|+1": 30
        }
    ],
    "ALARM|5-20": [
        {
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            title: "@title(2)",
            create_name: "@cname",
            "item_name|1-100": 20,
            create_time: "@datetime",
            "weight|+1": 20
        }
    ],
    "ChartsBar|5-10": [
        {
            CITY: "@city",
            "NUMBER|1-100": 20
        }
    ],
    "ChartsPie|3-5": [
        {
            CITY: "@city",
            "NUMBER|1-100": 20
        }
    ]
});
