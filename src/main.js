/*
 * @Author: your name
 * @Date: 2020-08-25 13:57:11
 * @LastEditTime: 2020-09-13 18:15:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\element-ui-node\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
Vue.config.productionTip = false;

//引入ant-design-vue框架
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);

//axios
import axios from "axios";
import store from "./store/store";
Vue.prototype.$ajax = axios;
require("./mock");

// normalize.css
import "normalize.css/normalize.css";
// 引入echarts
import echarts from "echarts";
Vue.prototype.$echarts = echarts;

//引入图库
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
    FontAwesomeIcon,
    FontAwesomeLayers,
    FontAwesomeLayersText
} from "@fortawesome/vue-fontawesome";

library.add(fas, far, fab);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.component("font-awesome-layers-text", FontAwesomeLayersText);

//引入公共样式
import "./assets/css/common.css";

router.beforeEach((to, from, next) => {
    if (to.path === "/Login") {
        sessionStorage.removeItem("user");
    }
    let user = JSON.parse(sessionStorage.getItem("user"));
    if (!user && to.path !== "/Login") {
        next({
            path: "/Login"
        });
    } else {
        next();
    }
});
/* eslint-disable no-new */
new Vue({
    el: "#app",
    store,
    router,
    components: { App },
    template: "<App/>"
});
