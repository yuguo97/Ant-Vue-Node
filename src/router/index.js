import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);



export default new Router({
  routes: [
    {
      path: "/",
      component: resolve => require(["@/page/Home.vue"], resolve),
      meta: ["首页"],
      redirect: "/HomeIndex",
      children: [
        {
          path: "/HomeIndex",
          component: resolve => require(["@/page/HomeIndex.vue"], resolve),
          meta: ["系统首页"]
        },
        {
          path: "/HistoricalData",
          component: resolve => require(["@/page/HistoricalData"], resolve),
          meta: ["数据管理", "历史数据"]
        },
        {
          path: "/TimeData",
          component: resolve => require(["@/page/TimeData"], resolve),
          meta: ["数据管理", "实时数据"]
        },
        {
          path: "/TimeData/:id",
          component: resolve => require(["@/page/TimeDataDetail"], resolve),
          hidden: false
        },
        {
          path: "/AlarmData",
          component: resolve => require(["@/page/AlarmData"], resolve),
          meta: ["数据管理", "数据详情", "报警数据"]
        },
        {
          path: "/ExcessData",
          component: resolve => require(["@/page/ExcessData"], resolve),
          meta: ["数据管理", "数据详情", "超标数据"]
        },
        {
          path: "/News",
          component: resolve => require(["@/page/News"], resolve),
          meta: ["数据管理", "数据详情", "新闻数据"]
        },
        {
          path: "/Store",
          component: resolve => require(["@/page/Store"], resolve),
          meta: ["系统设置", "Store页面"]
        },
        {
          path: "/Setting",
          component: resolve => require(["@/page/Setting"], resolve),
          meta: ["系统设置", "Setting页面"]
        },
        {
          path: "/Dialog",
          component: resolve => require(["@/page/Dialog"], resolve),
          meta: ["系统设置", "Dialog页面"]
        },
        {
          path: "/404",
          component: resolve => require(["@/page/Error"], resolve),
          meta: ["系统设置", "404页面"]
        }
      ]
    },
    {
      path: "/login",
      component: resolve => require(["@/page/Login.vue"], resolve)
    },
    {
      path: "*",
      redirect: "/404"
    }
  ]
});
