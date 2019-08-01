<template>
    <div class="Permission">
        <div class="header">
            <BreadCrumb />
        </div>
        <div class="content">
            <el-tree
                :data="data"
                show-checkbox
                node-key="id"
                :default-expanded-keys="[2, 3]"
                :default-checked-keys="[5]"
                :props="defaultProps">
            </el-tree>
        </div>
    </div>
</template>

<script>
    import BreadCrumb from "@/components/yBreadCrumb"
    export default {
        name: "Permission",
        components:{
          BreadCrumb
        },
        data() {
            return {
                data: [{
                        id: 1,
                        label: '系统首页',
                        }, {
                        id: 2,
                        label: '数据管理',
                        children: [{
                            id: 21,
                            label: '实时数据'
                        }, {
                            id: 22,
                            label: '历史数据'
                        },{
                            id: 23,
                            label: '数据详情',
                            children:[{
                                id:231,
                                label: '报警数据'
                            },{
                                id:232,
                                label: '超标数据'
                            },{
                                id:233,
                                label: '新闻数据'
                            }]
                        }]
                        }, {
                        id: 3,
                        label: '系统管理',
                        children: [{
                            id: 31,
                            label: '系统设置'
                        }, {
                            id: 32,
                            label: '权限管理'
                        },{
                            id: 33,
                            label: '菜单管理'
                        },{
                            id: 34,
                            label: '用户管理'
                        }]
                 }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            };
        }
    }
</script>

<style scoped>

</style>
