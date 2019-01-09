<template>
    <div class="hData">
        <div class="header">
          <div class="yBreadCrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>系统数据</el-breadcrumb-item>
              <el-breadcrumb-item>历史数据</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </div>
        <div class="content">
            <el-card class="box-card">
                <table-pagination
                        @handleSizeChange="handleSizeChange"
                        @handleCurrentChange="handleCurrentChange "
                        :data="tableData"
                        :columns="columns"
                        :pagination="pagination"
                ></table-pagination>
            </el-card>
        </div>
    </div>
</template>

<script>
    import TablePagination from "@/components/yTablePagination"

    export default {
        name:"HistoricalData",
        components:{
          TablePagination,

        },
        data() {
            return {
                columns:[
                    { prop : 'DATE' , label: '时间' },
                    { prop : 'EXCESS', label: '是否超标',
                        formatter: (row) => {
                            if (row.EXCESS === true) {
                                return "是";
                            } else if (row.EXCESS === false) {
                                return "否";
                            } else {
                                return "";
                            }
                        }
                    },
                    { prop : 'COD', label: 'COD'},
                    { prop : 'PH', label: 'PH'},
                    { prop : '',label: '操作',
                        operations: [
                            {
                                label: '详情',
                                type:"primary",
                                method: (index, row) => {
                                    this.handleEdit(index, row)
                                }
                            },{
                                label: '删除',
                                type:"danger",
                                method: (index, row) => {
                                    this.handleDelete(index, row)
                                }
                            }
                        ]},
                    ],
                tableData: [],
                pagination: {
                  total:0,
                  currentPage: 1,
                  pageSize: 2,
                  pageSizes:[2, 4, 6]
                },
            }
        },
        created(){
            this.getData()
        },
        methods:{
            getData(){
                this.$ajax .get('/api').then(res=>{
                    this.tableData=res.data.HISTORICAL;
                    this.pagination.total=res.data.HISTORICAL.length
                })
            },
            handleSizeChange (size) {
                this.pagination.pageSize=size;
                console.log(' this.limit:', size)
            },
            // 切换页码
            handleCurrentChange (index) {
                this.pagination.currentPage=index;
                console.log(' this.page:', index)
            },
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        }
    }
</script>

<style scoped>
    .hData{
        width: 100%;
        height: 100%;
        overflow:hidden;
    }


</style>
