<template>
    <div class="yHeader">
        <div class="h_logo">{{homeName}}</div>
        <div class="h_admin">
            <el-dropdown placement="bottom" @command="handleCommand">
                <span class="el-dropdown-link">{{userName}}</span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="我的消息" >我的消息</el-dropdown-item>
                    <el-dropdown-item command="设置">设置</el-dropdown-item>
                    <el-dropdown-item command="退出登陆" divided >退出登陆</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
    // import Bus from '../assets/js/bus'
    export default {
        data() {
            return {
                userName:"admin",
                homeName:"后台管理系统"
            }
        },
        methods: {
            handleCommand(command) {
                if(command==="我的消息"){
                    this.myFun();
                }else if(command==="设置"){
                    this.settingFun();
                }else if(command==="退出登陆"){
                    this.logoutFun()
                }else{
                    console.log("未知错误！")
                }
            },
            //我的消息
            myFun(){
                this.$router.push('/HomeIndex');
                // Bus.$emit('activeIndex','/HomeIndex')
            },
            //设置
            settingFun(){
                this.$router.push('/Setting');
                // Bus.$emit('activeIndex','/Setting')
            },
            //退出登录
            logoutFun() {
                var _this = this;
                this.$confirm('确认退出吗?', '提示', {
                    //type: 'warning'
                }).then(() => {
                    sessionStorage.removeItem('user');
                    _this.$router.push('/Login');
                }).catch(() => {
                    console.log("错误！")
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
