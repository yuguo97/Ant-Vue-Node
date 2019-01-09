<template>
    <div>
        <div class="header">
          <div class="yBreadCrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>系统设置</el-breadcrumb-item>
              <el-breadcrumb-item>Store页面</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
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

    export default{
        name:"Store",

        data(){
            return{
                msg:'Hello Vuex',
            }
        },
    }
</script>
