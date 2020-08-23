/*
 * @Author: your name
 * @Date: 2020-07-28 16:27:41
 * @LastEditTime: 2020-08-23 23:04:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\element-ui-node\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);



export default new Router({
  routes: [
    {
        path: "/",
        component: resolve => require(["@/layout/index.vue"], resolve),
        meta: ["首页"],
        redirect: "/HomeIndex",
        children: [
        {
            path: "/HomeIndex",
            component: resolve => require(["@/page/Home/index.vue"], resolve),
            meta: ["系统首页"]
        },
        // {
        //     path: "/Historical",
        //     component: resolve => require(["@/page/Historical"], resolve),
        //     meta: ["数据管理", "历史数据"]
        // },
        // {
        //     path: "/RealTime",
        //     component: resolve => require(["@/page/RealTime"], resolve),
        //     meta: ["数据管理", "实时数据"]
        // },
        // {
        //     path: "/RealTime/:id",
        //     component: resolve => require(["@/page/RealTimeDetail"], resolve),
        //     hidden: false
        // },
        // {
        //     path: "/Alarm",
        //     component: resolve => require(["@/page/Alarm"], resolve),
        //     meta: ["数据管理", "数据详情", "报警数据"]
        // },
        // {
        //     path: "/Excess",
        //     component: resolve => require(["@/page/Excess"], resolve),
        //     meta: ["数据管理", "数据详情", "超标数据"]
        // },
        // {
        //     path: "/News",
        //     component: resolve => require(["@/page/News"], resolve),
        //     meta: ["数据管理", "数据详情", "新闻数据"]
        // },
        // {
        //     path: "/Menu",
        //     component: resolve => require(["@/page/Menu"], resolve),
        //     meta: ["系统管理", "菜单管理"]
        // },
        // {
        //     path: "/Setting",
        //     component: resolve => require(["@/page/Setting"], resolve),
        //     meta: ["系统管理", "系统设置"]
        // },
        // {
        //     path: "/Permission",
        //     component: resolve => require(["@/page/Permission"], resolve),
        //     meta: ["系统管理", "权限管理"]
        // },
        // {
        //     path: "/User",
        //     component: resolve => require(["@/page/User"], resolve),
        //      meta: ["系统管理", "用户管理"]
        // },{
        //     path: "/Calendar",
        //     component: resolve => require(["@/page/Calendar"], resolve),
        //     meta: ["系统管理", "日历设置"]
        // }
      ]
    },
    {
        path: "/login",
        component: resolve => require(["@/page/Login/index.vue"], resolve)
    },
    {
        path: "*",
        redirect: "/login"
    }
  ]
});
