import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);



export default new Router({
  routes: [
    {
      path: "/",
      component: resolve => require(["@/page/Home.vue"], resolve),
      meta: { title: "首页" },
      redirect: "/HomeIndex",
      children: [
        {
          path: "/HomeIndex",
          component: resolve => require(["@/page/HomeIndex.vue"], resolve),
          meta: { title: "系统首页" }
        },
        {
          path: "/HistoricalData",
          component: resolve => require(["@/page/HistoricalData"], resolve),
          meta: { title: "历史数据" }
        },
        {
          path: "/TimeData",
          component: resolve => require(["@/page/TimeData"], resolve),
          meta: { title: "实时数据" }
        },
        {
          path: "/TimeData/:id",
          component: resolve => require(["@/page/TimeDataDetail"], resolve),
          meta: { title: "实时数据详情" }
        },
        {
          path: "/AlarmData",
          component: resolve => require(["@/page/AlarmData"], resolve),
          meta: { title: "报警数据" }
        },
        {
          path: "/ExcessData",
          component: resolve => require(["@/page/ExcessData"], resolve),
          meta: { title: "超标数据" }
        },
        {
          path: "/News",
          component: resolve => require(["@/page/News"], resolve),
          meta: { title: "新闻数据" }
        },
        {
          path: "/Store",
          component: resolve => require(["@/page/Store"], resolve),
          meta: { title: "Store" }
        },
        {
          path: "/Setting",
          component: resolve => require(["@/page/Setting"], resolve),
          meta: { title: "Setting" }
        },
        {
          path: "/Dialog",
          component: resolve => require(["@/page/Dialog"], resolve),
          meta: { title: "Dialog" }
        },
        {
          path: "/404",
          component: resolve => require(["@/page/Error"], resolve),
          meta: { title: "404" }
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
