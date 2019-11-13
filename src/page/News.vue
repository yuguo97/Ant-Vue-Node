<template>
    <div class="News">
        <div class="header">
            <BreadCrumb />
        </div>
        <div class="content">
        <!-- <el-row>
            <el-col :span="6" v-for="(item,index) in data" :key="index" style="padding:10px">
                <el-card :body-style="{ padding: '0px' }">
                    <el-image
                    class="image"
                    :src="item.picInfo[0].url"></el-image>
                    <div style="padding: 14px;height:100px">
                        <a :href="item.link" class="link"><span>{{item.title}}</span></a>
                        <div class="bottom clearfix">
                            <time class="time">{{ item.ptime }}</time>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row> -->
        </div>
    </div>
</template>
<script>
    import BreadCrumb from "@/components/yBreadCrumb"
    export default {
        name:"News",
        components:{
          BreadCrumb
        },
        data() {
            return {
                currentDate: new Date(),
                data:[],
            };
        },
        created(){
            this.getData();
        },
        methods:{
            getData(){
                // this.$ajax.get('https://api.apiopen.top/videoCategory').then(res=>{
                //         console.log(res.data.result.itemList)
                //         this.data=res.data.result.itemList;
                // })
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
