<!--
 * @Author: your name
 * @Date: 2020-08-25 13:57:11
 * @LastEditTime: 2020-09-13 18:28:28
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
    <!-- <a-menu mode="inline" :open-keys="openKeys" style="width: 256px" @openChange="onOpenChange">
      <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
        <a-menu-item key="1">
          Option 1
        </a-menu-item>
        <a-menu-item key="2">
          Option 2
        </a-menu-item>
        <a-menu-item key="3">
          Option 3
        </a-menu-item>
        <a-menu-item key="4">
          Option 4
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title"><a-icon type="appstore" /><span>Navigation Two</span></span>
        <a-menu-item key="5">
          Option 5
        </a-menu-item>
        <a-menu-item key="6">
          Option 6
        </a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="7">
            Option 7
          </a-menu-item>
          <a-menu-item key="8">
            Option 8
          </a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
      <a-sub-menu key="sub4">
        <span slot="title"><a-icon type="setting" /><span>Navigation Three</span></span>
        <a-menu-item key="9">
          Option 9
        </a-menu-item>
        <a-menu-item key="10">
          Option 10
        </a-menu-item>
        <a-menu-item key="11">
          Option 11
        </a-menu-item>
        <a-menu-item key="12">
          Option 12
        </a-menu-item>
      </a-sub-menu>
    </a-menu> -->
  </div>
</template>
<script>
import { initRouterMap } from "@/router/index";
export default {
  data() {
    return {
        default: [this.$route.path]
    };
  },
  created() {
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key);
    },
    handleClose(key, keyPath) {
      console.log(key);
    },
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
