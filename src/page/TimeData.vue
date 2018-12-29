<template>
    <div class="tData">
        <div class="header">
            <BreadCrumb></BreadCrumb>
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
    import BreadCrumb from "@/components/yBreadCrumb"
    export default {
        name:"TimeData",
        components:{
            TablePagination,
            BreadCrumb
        },
        data() {
            return {
                columns:[
                    { prop : 'name' , label: '姓名',width:'100px'},
                    { prop : 'age', label: '年龄',width:'100px'},
                    { prop : 'sex', label: '性别',width:'100px',
                        formatter: (row) => {
                            if (row.sex === "man") {
                                return "男";
                            } else if (row.sex === "woman") {
                                return "女";
                            } else {
                                return "";
                            }
                        }
                    },
                    { prop : 'address', label: '籍贯',width:'100px'},
                    { prop : 'dowhat', label: '位置',width:'100px'},
                    { prop : 'favourite', label: '台词',width:'150px',
                        formatter: (row) => {
                            return `<span style="white-space: nowrap;color: #1e90ff;">${row.favourite}</span>`
                        }
                    },
                    { prop : '', label: '操作',
                        operations:[{
                                label: '详情',
                                type: "primary",
                                method: (row) => {
                                    this.handleDetails(row['_id'])
                                }
                            },
                            {
                                label: '修改',
                                type: "success",
                                method: (index, row) => {
                                    this.handleEdit(index,row)}
                            },{
                                label: '删除',
                                type: "danger",
                                method: (index, row) => {
                                    this.handleEdit(index,row)}
                            },{
                                label: '添加图片',
                                type: "warning",
                                method: (index, row) => {
                                    this.handleEdit(index,row)}
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
                this.$ajax.get('/api/Hero/').then(res=>{
                    this.tableData=res.data;
                    this.pagination.total=res.data.length;
                })
            },
            //详情
            handleDetails(id) {
                this.$router.push(`/TimeData/${id}`);
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
    .tData{
        width: 100%;
        height: 100%;
        overflow:hidden;
    }


</style>
