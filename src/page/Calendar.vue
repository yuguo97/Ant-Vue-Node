<template>
    <div class="News">
        <div class="header">
            <BreadCrumb />
        </div>
        <div class="content">
            <el-calendar v-model="value">
            </el-calendar>
        </div>
    </div>
</template>


<script>
    import BreadCrumb from "@/components/yBreadCrumb"
    export default {
        components:{
          BreadCrumb
        },
        data() {
            return {
            value: new Date()
            }
        }
    }
</script>