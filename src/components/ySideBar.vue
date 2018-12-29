<template>
    <div class="ySideBar">
        <el-menu router :default-active="$route.path" class="el-menu-vertical-demo" unique-opened   style="height: 100%;" >
            <template v-for="item in $router.options.routes" v-if="!item.hidden">
                <el-submenu :index="item.name"  v-if="!item.leaf"  :key="item.name">
                    <template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
                    <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
                </el-submenu>
                <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path" :key="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
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
        // mounted(){
        //
        //     Bus.$on('activeIndex',function(defaultActive) {
        //         this.defaultActive = defaultActive
        //     })
        // },
        methods: {

        },
        watch: {

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