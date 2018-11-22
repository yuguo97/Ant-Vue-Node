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
    import Header from "@/components/yHeader"
    import SideBar from "@/components/ySideBar"
    import HomeIndex from '@/page/HomeIndex.vue'
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