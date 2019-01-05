<template>
    <div class="ySideBar">
        <el-menu 
        router 
        :default-active="$route.path" 
        class="el-menu-vertical-demo" 
        unique-opened   
        style="height: 100%;"       
        @open="handleOpen"
        @close="handleClose">
            <template v-for="item in $router.options.routes">
                <el-submenu 
                v-if="!item.hidden" 
                :index="item.name" 
                :key="item.name">
                    <template slot="title">
                        <i :class="item.iconCls"></i>
                        <span>{{item.name}}</span>
                    </template>
                    <template v-for="child in item.children">
                        <el-menu-item  v-if="!child.hidden"  :index="child.path" :key="child.path">
                            <span>
                                {{child.name}}
                            </span>                
                        </el-menu-item>
                    </template>
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>
<script>

    export default {
        data() {
            return {

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