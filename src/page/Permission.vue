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
                @node-click="handleNodeClick"
                :props="defaultProps">
            </el-tree>
            <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    v-if="list[0].isTrue"
                    prop="date"
                    label="日期"
                    width="180">
                </el-table-column>
                <el-table-column
                    v-if="list[1].isTrue"
                    prop="name"
                    label="姓名"
                    width="180">
                </el-table-column>
                <el-table-column
                    v-if="list[2].isTrue"
                    prop="address"
                    label="地址">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
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
                    list:[{
                        title:"日期",
                        index:0,
                        isTrue:true
                    },{
                        title:"姓名",
                        index:2,
                        isTrue:true
                    },{
                        title:"地址",
                        index:3,
                        isTrue:true
                    }],
                    tableData: [{
                            date: '2016-05-02',
                            name: '王小虎',
                            address: '上海市普陀区金沙江路 1518 弄'
                        }, {
                            date: '2016-05-04',
                            name: '王小虎',
                            address: '上海市普陀区金沙江路 1517 弄'
                        }, {
                            date: '2016-05-01',
                            name: '王小虎',
                            address: '上海市普陀区金沙江路 1519 弄'
                        }, {
                            date: '2016-05-03',
                            name: '王小虎',
                            address: '上海市普陀区金沙江路 1516 弄'
                        }],
                data: [{
                        id: 1,
                        label: '系统首页',
                        index:1
                        }, {
                        id: 2,
                        label: '数据管理',
                        index:1,
                        children: [{
                            id: 21,
                            label: '实时数据',
                            index:2
                        }, {
                            id: 22,
                            label: '历史数据',
                            index:2
                        },{
                            id: 23,
                            label: '数据详情',
                            index:2,
                            children:[{
                                id:231,
                                label: '报警数据',
                                index:3
                            },{
                                id:232,
                                label: '超标数据',
                                index:3
                            },{
                                id:233,
                                label: '新闻数据',
                                index:3
                            }]
                        }]
                        }, {
                        id: 3,
                        label: '系统管理',
                        index:1,
                        children: [{
                            id: 31,
                            label: '系统设置',
                            index:2
                        }, {
                            id: 32,
                            label: '权限管理',
                            index:2
                        },{
                            id: 33,
                            label: '菜单管理',
                            index:2
                        },{
                            id: 34,
                            label: '用户管理',
                            index:2
                        }]
                 }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            };
        },
        methods: {
            handleNodeClick(data) {
                for(var i =0;i<this.list.length;i++){
                    if(this.list[i].index==data.index){
                        this.list[i].isTrue=false
                    }else{
                        this.list[i].isTrue=true
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>
