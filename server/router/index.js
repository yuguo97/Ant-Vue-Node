/*
 * @Author: your name
 * @Date: 2020-08-25 13:57:11
 * @LastEditTime: 2020-09-16 17:47:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\element-ui-node\server\router\index.js
 */

//引入express模块
const express = require("express");
//定义路由级中间件
const router = express.Router();
//引入数据模型模块

const Json = require("./../controllers/json");
router.get("/getJson", Json.getJson);
router.get("/getJsonNumber", Json.getJsonNumber);
// const hero = require("./../controllers/hreo")
// // 查询所有英雄信息路由
// router.get("/Heros", hero.Heros)

// // 通过ObjectId查询单个英雄信息路由
// router.get("/getHero/:id", hero.getHero)

// // 添加一个英雄信息路由
// router.post("/addHero", hero.addHero)

// //更新一条英雄信息数据路由
// router.put("/putHero/:id",hero.putHero)

// // 添加图片路由
// router.post("/addpic/:id", hero.addPic)

// //删除一条英雄信息路由
// router.delete("/delHero/:id", hero.delHero)

module.exports = router;
