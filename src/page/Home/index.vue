<!--
 * @Author: your name
 * @Date: 2020-08-23 22:35:52
 * @LastEditTime: 2020-08-23 23:55:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\element-ui-node\src\page\Home\index.vue
-->
<template>
    <div class="hIndex">
        <div id="container" style="width: 100%;height: 100%"></div>
    </div>
</template>
<script>
    export default{
        name:"HomeIndex",
        data(){
            return{
                msg:'首页',
            }
        },
        mounted(){
            this.getMap();
        },
        methods:{
            getMap(){
                var map = new BMap.Map("container");
                var point = new BMap.Point(116.404, 39.915);
                map.centerAndZoom(point, 15);
            }
        }
    }
</script>
<style scoped>
    .hIndex{
        width: 100%;
        height: 100%;
        overflow:hidden;
    }
</style>