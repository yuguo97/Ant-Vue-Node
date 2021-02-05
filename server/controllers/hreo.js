/*
 * @Author: your name
 * @Date: 2020-08-25 13:57:11
 * @LastEditTime: 2021-02-05 15:27:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\element-ui-node\server\controllers\hreo.js
 */
//引入数据模型模块
const model = require("../models/model");

// 查询所有英雄信息路由
const Heros = function(req, res) {
    model.User.find({})
        .sort({ update_at: -1 })
        .then(result => {
            res.json({
                code: 200,
                status: "success",
                message: "获取成功",
                data: result
            });
        })
        .catch(err => {
            res.json({ code: 500, status: "error", message: "获取失败" });
        });
};

// 通过ObjectId查询单个英雄信息路由
const getHero = function(req, res) {
    model.User.findById(req.params.id)
        .then(result => {
            res.json({
                code: 200,
                status: "success",
                message: "获取成功",
                data: result
            });
        })
        .catch(err => {
            res.json({ code: 500, status: "error", message: "获取失败" });
        });
};

// 添加一个英雄信息路由
const addHero = function(req, res) {
    model.User.create(req.body)
        .then(result => {
            res.json({ code: 200, status: "success", message: "添加成功" });
        })
        .catch(err => {
            res.json({ code: 500, status: "error", message: "添加失败" });
        });
};

//更新一条英雄信息数据路由

const putHero = function(req, res) {
    model.User.findOneAndUpdate(
        {
            _id: req.params.id
        },
        {
            $set: {
                name: req.body.name,
                age: req.body.age
            }
        },
        {
            new: true
        }
    )
        .then(result =>
            res.json({ code: 200, status: "success", message: "更新成功" })
        )
        .catch(err =>
            res.json({ code: 500, status: "error", message: "更新失败" })
        );
};

// 添加图片路由
const addPic = function(req, res) {
    model.User.findOneAndUpdate(
        { _id: req.params.id },
        {
            $push: {
                imgArr: req.body.url
            }
        },
        {
            new: true
        }
    )
        .then(hero =>
            res.json({ code: 200, status: "success", message: "添加成功" })
        )
        .catch(err =>
            res.json({ code: 500, status: "error", message: "添加失败" })
        );
};

//删除一条英雄信息路由

const delHero = function(req, res) {
    model.User.findOneAndDelete({
        _id: req.params.id
    })
        .then(hero =>
            res.json({ code: 200, status: "success", message: "删除成功" })
        )
        .catch(err =>
            res.json({ code: 500, status: "error", message: "删除失败" })
        );
};
module.exports = {
    Heros,
    getHero,
    addHero,
    putHero,
    delHero,
    addPic
};
