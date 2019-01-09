<template>
    <div>
        <div class="header">
            <BreadCrumb />
        </div>
        <div class="content">
            <h1>{{$store.state.count}}</h1>
            <el-button type="primary" @click="$store.commit('add')">+</el-button>
            <el-button type="success" @click="$store.commit('reduce')">-</el-button>
            <font-awesome-icon :icon="['fas', 'square']" />
            <font-awesome-icon :icon="['far', 'square']" />
            <font-awesome-icon :icon="['fab', 'accessible-icon']" />
            <font-awesome-icon icon="search" />
        </div>
    </div>
</template>
<script>
    import BreadCrumb from "@/components/yBreadCrumb"
    export default{
        name:"Store",
        components:{
          BreadCrumb
        },
        data(){
            return{
                msg:'Hello Vuex',
            }
        },
    }
</script>
