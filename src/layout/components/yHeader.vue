<!--
 * @Author: your name
 * @Date: 2020-08-23 23:14:42
 * @LastEditTime: 2020-09-13 11:03:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\element-ui-node\src\layout\components\yHeader.vue
-->

<template>
    <div class="yHeader">
        <div class="h_logo">{{homeName}}</div>
        <div class="h_admin">
              <a-dropdown>
                <a class="ant-dropdown-link" @click="e => e.preventDefault()" style="color:#fff">
                    {{userName}}<a-icon type="down" />
                </a>
                <a-menu slot="overlay">
                    <a-menu-item>
                        <a target="_blank" href="http://kuiguo.top">关于作者</a>
                    </a-menu-item>
                    <a-menu-item>
                        <a target="_blank" href="https://github.com/kuiguo1991/element-ui-node">项目仓库</a>
                    </a-menu-item>
                    <a-menu-divider />
                    <a-menu-item>
                        <a href="javascript:;" @click="logoutFun">退出登陆</a>
                    </a-menu-item>
                </a-menu>
            </a-dropdown>

        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                userName:"admin",
                homeName:"后台管理系统"
            }
        },
        methods: {
            //退出登录
            logoutFun() {
                const _this = this
                this.$confirm({
                title: '是否确定退出登录?',
                okText: '确定',
                okType: 'danger',
                cancelText: '取消',
                onOk() {
                    sessionStorage.removeItem('user');
                     _this.$router.push('/Login');
                },
                onCancel() {
                    console.log('Cancel');
                },
                });
        }}
    }
</script>
<style scoped>
    .yHeader{
        position: absolute;
        width: 100%;
        top: 0;
        height: 70px;
        background-color: #242f42;
    }
    .h_logo{
        width: 30%;
        height: 70px;
        color: #ffffff;
        padding:0 50px;
        line-height: 70px;
        float: left;
    }
    .h_admin{
        width: 70%;
        height: 70px;
        float: left;
        text-align: right;
        padding-top: 20px;
        padding-right: 20px;
    }
    .el-dropdown{
        height: 30px;
        margin: 20px 30px;
    }
    .el-dropdown span{
        height: 30px;
        line-height: 30px;
    }
    .el-dropdown-link{
        color: #fff;
        cursor: pointer;
    }
</style>
