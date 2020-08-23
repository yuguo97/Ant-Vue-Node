<!--
 * @Author: your name
 * @Date: 2020-08-23 22:51:33
 * @LastEditTime: 2020-08-23 23:14:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\element-ui-node\src\layout\index.vue
-->


<template>
    <div class="home">
        <Header></Header>
        <SideBar></SideBar>
        <div class="container">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>
<script>
    import Header from "./components/yHeader"
    import SideBar from "./components/ySideBar"
    import HomeIndex from '@/page/Home/index.vue'
    export default {
        name:"Home",
        components:{
            Header,
            SideBar,
            HomeIndex
        },
        methods: {
        }
    }
</script>
<style scoped>
    .home{
        width: 100%;
        height: 100%;
        position: relative;
    }

    .container{
        position: absolute;
        right: 0;
        top: 70px;
        left: 250px;
        bottom: 0;
    }
</style>