import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home.vue'
import Login from '@/page/Login.vue'
import HomeIndex from '@/page/HomeIndex.vue'
import No from '@/page/404.vue'
import TimeData from '@/page/TimeData'
import HistoricalData from '@/page/HistoricalData'
import ExcessData from '@/page/ExcessData'
import AlarmData from '@/page/AlarmData'
import Store from '@/page/Store'
import Setting from '@/page/Setting'
import TimeDataDetail from '@/page/TimeDataDetail'
import Dialog from '@/page/Dialog'
import News from '@/page/News'
Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        component: Home,
        name: '监测数据',
        redirect: '/HomeIndex',
        iconCls: 'el-icon-message',
        children: [{
            path: '/HomeIndex',
            component:HomeIndex,
            name: '首页',
            hidden: true
        },{
            path: '/HistoricalData',
            component: HistoricalData,
            name: '历史数据'
        },{
            path: '/TimeData',
            component: TimeData,
            name: '实时数据',
        },{
            path: '/TimeData/:id',
            component:TimeDataDetail,
            name: '详情页面',
            hidden: true
        },{
            path: '/News',
            component: News,
            name: '新闻数据'
        }]
      },
      {
        path: '/',
        component: Home,
        name: '超标报警',
        iconCls: 'el-icon-menu',
        children: [{
            path: '/ExcessData',
            component:ExcessData,
            name: '超标数据'
        },{
            path: '/AlarmData',
            component:AlarmData,
            name: '报警数据'
        }]
      },
      {
        path: '/',
        component: Home,
        name: '地理信息',
        iconCls: 'el-icon-document',
        children: [{
            path: '/Store',
            component:Store,
            name: '状态数据'
        },{
            path: '/Dialog',
            component:Dialog,
            name: '提示数据'
        },{
            path: '/Setting',
            component:Setting,
            name: '个人中心',
            hidden: true
        }]
      },
      {
        path: '/Login',
        name: '登录',
        component: Login,
        hidden: true
      },
      {
        path: '/404',
        name: '404',
        component: No,
        hidden: true
      }
  ]
})
