<template>
    <div class="news">
        <div class="header">
          <div class="yBreadCrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>系统数据</el-breadcrumb-item>
              <el-breadcrumb-item>数据详情</el-breadcrumb-item>
              <el-breadcrumb-item>新闻数据</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </div>
        <div class="content">
        <el-row>
            <el-col :span="6" v-for="(item,index) in data" :key="index" style="padding:10px">
                <el-card :body-style="{ padding: '0px' }">
                    <img :src="item.picInfo[0].url" class="image">
                    <div style="padding: 14px;height:100px">
                        <a :href="item.link" class="link"><span>{{item.title}}</span></a>
                        <div class="bottom clearfix">
                            <time class="time">{{ item.ptime }}</time>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        </div>
    </div>
</template>
<script>

    export default {
        name:"NEWS",

        data() {
            return {
                currentDate: new Date(),
                data:[]
            };
        },
        created(){
            this.getData();
        },
        methods:{
            getData(){
                this.$ajax.get('https://www.apiopen.top/journalismApi').then(res=>{
                        this.data=res.data.data.war
                })
            },
        }
    }
</script>
<style scoped>
    .link{
        font-size: 14px;
        color: #000;
        text-decoration: none;
    }
    .time {
        font-size: 14px;
        color: #999;
    }

    .image {
        width: 100%;
        height: 250px;
        display: block;
    }
    .bottom{
        margin-top: 10px
    }
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
</style>
