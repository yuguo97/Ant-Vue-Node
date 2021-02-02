/*
 * @Author: your name
 * @Date: 2020-09-19 11:40:55
 * @LastEditTime: 2020-11-12 17:50:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /github/Ant-Vue-Node/server/controllers/routers.js
 */
const getMenu = function(req, res) {
    const data = [
        {
            id: 1,
            name: "系统管理",
            pid: 0,
            component: "#",
            hidden: false,
            meta: {
                icon: "fafa-adjust",
                status: true,
                title: "系统管理"
            },
            path: "#",
            url: "#",
            children: [
                {
                    children: [
                        {
                            alwaysShow: true,
                            component: "/system/user/create/index",
                            hidden: false,
                            id: 27,
                            meta: {
                                icon: "#",
                                status: true,
                                title: "添加用户"
                            },
                            name: "添加用户",
                            path: "/system/user/create",
                            pid: 2,
                            url: "/user/create"
                        },
                        {
                            component: "/system/user/list/index",
                            hidden: false,
                            id: 28,
                            meta: {
                                icon: "#",
                                status: true,
                                title: "用户列表"
                            },
                            name: "用户列表",
                            path: "/system/user/list",
                            pid: 2,
                            url: "/user/index"
                        },
                        {
                            alwaysShow: true,
                            component: "/system/user/edit/index",
                            hidden: true,
                            id: 29,
                            meta: {
                                icon: "#",
                                status: true,
                                title: "用户编辑"
                            },
                            name: "用户编辑",
                            path: "/system/user/edit/:id(\\d+)",
                            pid: 2,
                            url: "/user/edit"
                        }
                    ],
                    component: "/system/user/index",
                    hidden: false,
                    id: 2,
                    meta: {
                        icon: "#",
                        status: true,
                        title: "用户管理"
                    },
                    name: "用户管理",
                    path: "/system/user",
                    pid: 1,
                    url: "/user"
                },
                {
                    component: "/system/menu/index",
                    hidden: false,
                    id: 3,
                    meta: {
                        icon: "#",
                        status: true,
                        title: "菜单管理"
                    },
                    name: "菜单管理",
                    path: "/system/menu",
                    pid: 1,
                    url: "/menu"
                },
                {
                    alwaysShow: true,
                    component: "/system/role/index",
                    hidden: false,
                    id: 26,
                    meta: {
                        icon: "#",
                        status: true,
                        title: "角色管理"
                    },
                    name: "角色管理",
                    path: "/system/role",
                    pid: 1,
                    url: "/roles"
                }
            ]
        },
        {
            alwaysShow: true,
            component: "#",
            hidden: false,
            id: 30,
            meta: {
                icon: "#",
                status: true,
                title: "内容管理"
            },
            name: "内容管理",
            path: "#",
            pid: 0,
            url: "/article",
            children: [
                {
                    alwaysShow: true,
                    component: "/article/create/index",
                    hidden: false,
                    id: 31,
                    meta: {
                        icon: "#",
                        status: true,
                        title: "创建文章"
                    },
                    name: "创建文章",
                    path: "/article/create",
                    pid: 30,
                    url: "/article/create"
                },
                {
                    alwaysShow: true,
                    component: "/article/edit/index",
                    hidden: true,
                    id: 32,
                    meta: {
                        icon: "#",
                        status: true,
                        title: "文章编辑"
                    },
                    name: "文章编辑",
                    path: "/article/edit/:id(\\d+)",
                    pid: 30,
                    url: "/article/edit"
                },
                {
                    alwaysShow: true,
                    component: "/article/list/index",
                    hidden: false,
                    id: 33,
                    meta: {
                        icon: "#",
                        status: true,
                        title: "文章列表"
                    },
                    name: "文章列表",
                    path: "/article/list",
                    pid: 30,
                    url: "/article/list"
                }
            ],
        }
    ];
    res.send({
        code: 200,
        data: data,
        message: "success",
        time: new Date().toLocaleString()
    });
};

module.exports = {
    getMenu: getMenu
};
