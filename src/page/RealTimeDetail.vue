<template>
    <div class="RealTimeDetail">
        <el-button type="success" icon="el-icon-arrow-left" @click="goBack" style="margin-bottom: 30px;">返回上一页</el-button>
        <el-carousel :interval="2000" type="card" height="300px">
            <el-carousel-item v-for="(item, key) in imgArr" :key="key">
                <img :src="item" alt="" style="width: 100%;">
            </el-carousel-item>
        </el-carousel>
        <h3 style="text-align: center">{{ name }} ● {{ favourite }}</h3>
        <div>{{explain}}</div>
    </div>
</template>
<script>
    export default {
        name:"RealTimeDetail",
        data(){
            return{
                imgArr:[],
                explain:'',
                name:'',
                favourite:''
            }
        },
        created(){
            this.getMessage(this.$route.params.id)
        },
        methods:{
            getMessage(id){
                this.$ajax.get(`/api/getHero/${id}`).then(res=>{
                    // console.log(res.data);
                    this.imgArr=res.data.imgArr;
                    this.explain=res.data.explain;
                    this.name=res.data.name;
                    this.favourite=res.data.favourite;
                })
            },
            goBack(){
                window.history.length > 1
                    ? this.$router.go(-1)
                    : this.$router.push('/')
            }
        }
    }
</script>
<style scoped>
    .RealTimeDetail{
        width: 80%;
        margin: 50px auto;
    }
</style>
