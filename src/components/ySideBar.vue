<template>
    <div class="ySideBar">
        <el-menu class="el-menu-vertical-demo" :default-active="this.$route.path"  unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <font-awesome-icon :icon="item.icon" /><span slot="title">{{ item.title }}</span>
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
                        <font-awesome-icon :icon="item.icon" /><span slot="title">{{ item.title }}</span>
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
                    },
                    {
                        icon: ['fab', 'amazon'],
                        index: '/HomeData',
                        title: '数据管理',
                        subs: [
                            {
                                index: '/TimeData',
                                title: '实时数据'
                            },
                            {
                                index: '/HistoricalData',
                                title: '历史数据'
                            },
                            {
                                index: '/DataDetails',
                                title: '数据详情',
                                subs: [
                                    {
                                        index: '/AlarmData',
                                        title: '报警数据'
                                    },
                                    {
                                        index: '/ExcessData',
                                        title: '超标数据'
                                    },
                                    {
                                        index: '/News',
                                        title: '新闻数据'
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        icon: ['fab', 'alipay'],
                        index: 'SystemSettings',
                        title: '系统设置',
                        subs: [
                            {
                                index: '/Setting',
                                title: 'Setting页面',
                            },
                            {
                                index: '/Dialog',
                                title: 'Dialog页面',
                            },
                            {
                                index: '/Store',
                                title: 'Store页面',
                            },
                            {
                                index: '/404',
                                title: '404页面'
                            }
                        ]
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
</style>
