/*
 * @Author: your name
 * @Date: 2020-07-28 16:27:41
 * @LastEditTime: 2020-08-24 01:07:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\element-ui-node\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'


import Layout from '@/layout'

/* Layout */
Vue.use(Router);

export const initRouterMap = [
    {
        path: "/",
        component: Layout,
        redirect: '/Home',
        hidden: true,
        children: [
            {
              path: 'Home',
              component: () => import('@/page/Home/index'),
              name: 'Home',
              meta: { title: '系统首页', icon: 'home', affix: true }
            }
          ]
    },
    {
        path: "/login",
        hidden: false,
        component: resolve => require(["@/page/Login/index.vue"], resolve)
    },
    {
        path: "*",
        hidden: false,
        redirect: "/login"
    }
]




export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes:initRouterMap
})





