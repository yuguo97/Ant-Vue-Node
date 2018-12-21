<template>
    <div class="yChartsLine">
        <h1>asdas</h1>
        <div id="myChartLine" style="width: 100%;height: 300px;">as</div>
    </div>
</template>
<script>
    export default {
        mounted(){
            this.getData();
        },
        methods:{
            getData(){
                this.$ajax.get('/v2/api').then(res=>{
                      console.log(res)
                })
            },
        }

    }
</script>


