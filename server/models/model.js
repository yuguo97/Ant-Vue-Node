/*
 * @Author: your name
 * @Date: 2020-08-25 13:57:11
 * @LastEditTime: 2021-02-05 15:28:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\element-ui-node\server\models\hero.js
 */
//引入mongoose模块
const mongoose = require("mongoose");

//定义数据模型，可以看到，我们下面创建了一个表，表中的数据有name、age、sex等字段，并且这些字段的数据类型也定义了，最后将model导出即可
const userSchema = mongoose.Schema(
    {
        name: { type: String, default: "匿名用户" },
        age: { type: Number, default: 18 },
        sex: { type: String, default: "0" },
        address: { type: String, default: "湖北" },
        imgArr: { type: [String], default: ["湖北", "武汉", "襄阳"] }
    },
    { collection: "yg_user", versionKey: false }
);

const model = {
    User: mongoose.model("user", userSchema)
};

//这里mongoose.Schema最好要写上第二个参数，明确指定到数据库中的哪个表取数据，我这里写了myHreo，目的就是为了以后操作数据要去myHreo表中。

//导出model模块
module.exports = model;
