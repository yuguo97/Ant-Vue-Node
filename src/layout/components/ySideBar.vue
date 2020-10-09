<!--
 * @Author: your name
 * @Date: 2020-08-25 13:57:11
 * @LastEditTime: 2020-09-24 23:54:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\element-ui-node\src\layout\components\ySideBar.vue
-->


<template>
  <div class="ySideBar">
    <a-menu mode="inline"
        :default-selected-keys="this.default"  style="width: 250px;height: 100%;" router>
        <template v-for="item in routes">
           <template v-if="!item.hidden">
                <template v-if="!item.redirect">
                    <a-sub-menu :index="item.path" :key="item.path">
                        <template slot="title">
                            <a-icon :type="item.meta.icon" />
                            <span>{{item.meta.title}}</span>
                        </template>
                        <a-menu-item
                            v-for="subItem in item.children"
                            :key="subItem.path"
                            :index="subItem.path"
                        >
                            <router-link :to="subItem.path">
                                <a-icon :type="subItem.meta.icon" />
                                <span>{{ subItem.meta.title }}</span>
                            </router-link>

                        </a-menu-item>
                    </a-sub-menu>
                </template>
                <template v-else>
                    <a-menu-item :index="item.children[0].path" :key="item.children[0].path">
                        <router-link :to="item.children[0].path">
                            <a-icon :type="item.children[0].meta.icon" />
                            <span>{{ item.children[0].meta.title }}</span>
                        </router-link>
                    </a-menu-item>
                </template>
           </template>
        </template>
    </a-menu>
  </div>
</template>
<script>
import { initRouterMap } from "@/router/index";
import menuApi from "@/api/menu";
export default {
  data() {
    return {
        default: [this.$route.path]
    };
  },
  created() {
     this.getMenu()
  },
  methods: {
    getMenu(){
        menuApi.getMenu().then(res => {
           console.log(res)
        })
    }
  },
  computed: {
    routes() {
      return initRouterMap;
    },
  },
};
</script>
<style scoped>
.ySideBar {
  position: absolute;
  top: 70px;
  left: 0;
  bottom: 0;
  width: 250px;
}
.iconItem {
  padding-left: 10px;
}
</style>
