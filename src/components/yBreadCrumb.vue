<template>
    <div class="yBreadCrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item
                    v-for='(item,index) of list'
                    v-if='item.name'
                    :key='index'
                    :to='item.path'>
                {{item.name}}
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
    export default {
        name: "yBreadCrumb",
        data() {
            return {
                list: null
            }
        },
        watch: {
            $route() {
                this.getBreadcrumb()
            }
        },
        created(){
            this.getBreadcrumb()
        },
        methods:{
            getBreadcrumb() {
                let matched = this.$route.matched.filter(item => item.name!==null);
                const first = matched[0];
                if (first && (first.name !== '首页' || first.path !== '')) {
                    matched = [{ name: '首页', path: '/' }].concat(matched)
                }
                console.log(matched);
                this.list = matched;
            }
        }
    }
</script>

<style scoped>
    .el-breadcrumb {
        line-height: 3;
    }
</style>