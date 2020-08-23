<!--
 * @Author: your name
 * @Date: 2020-08-23 23:14:42
 * @LastEditTime: 2020-08-23 23:20:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\element-ui-node\src\layout\components\ySideBar.vue
-->

<template>
    <div class="ySideBar">
        <el-menu class="el-menu-vertical-demo" :default-active="this.$route.path"  unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <font-awesome-icon :icon="item.icon" /><span slot="title" class="iconItem">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <font-awesome-icon :icon="item.icon"/><span slot="title" class="iconItem">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>
<script>

    export default {
        data() {
            return {
                items: [
                    {
                        icon: ['fab', 'd-and-d'],
                        index: '/HomeIndex',
                        title: '系统首页'
                    }
                ]
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key);
            },
            handleClose(key, keyPath) {
                console.log(key);
            }
        }


    }
</script>
<style scoped>
    .ySideBar{
        position: absolute;
        top: 70px;
        left: 0;
        bottom: 0;
        width: 250px;
    }
    .iconItem{
        padding-left: 10px;
    }
</style>
