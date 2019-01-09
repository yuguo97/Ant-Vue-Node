<template>
    <div class="eData">
        <div class="header">
          <div class="yBreadCrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>系统数据</el-breadcrumb-item>
              <el-breadcrumb-item>数据详情</el-breadcrumb-item>
              <el-breadcrumb-item>超标数据</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </div>
        <div class="content">
            <el-card class="box-card">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="用户管理" name="first">
                        <yBar></yBar>
                    </el-tab-pane>
                    <el-tab-pane label="配置管理" name="second">
                        <yPie></yPie>
                    </el-tab-pane>
                    <el-tab-pane label="角色管理" name="third">
                        <yLine></yLine>
                    </el-tab-pane>
                    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
                </el-tabs>
            </el-card>
        </div>
    </div>
</template>
<script>
    import yBar from "@/components/charts/yChartsBar"
    import yPie from "@/components/charts/yChartsPie"
    import yLine from "@/components/charts/yChartsLine"

    export default {
        name:"ExcessData",
        components:{
            yBar,
            yPie,
            yLine
        },
        data() {
            return {
                activeName: 'first'
            };
        },
        mounted(){
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    };
</script>
<style scoped>
    .eData{
        width: 100%;
        height: 100%;
        overflow:hidden;
    }


</style>
