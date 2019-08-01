<template>
    <div class="Alarm">
        <div class="header">
            <BreadCrumb />
        </div>
        <div class="content">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <el-form :inline="true" :model="formInline" class="demo-form-inline" :rules="rules" ref="formInline">
                        <el-form-item label="开始时间" prop="startDate" >
                            <el-date-picker
                                    style="width: 160px;"
                                    v-model="formInline.startDate"
                                    type="date"
                                    placeholder="开始时间">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="结束时间" prop="endDate">
                            <el-date-picker
                                    style="width: 160px;"
                                    v-model="formInline.endDate"
                                    type="date"
                                    placeholder="结束时间">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="监测类型" prop="region">
                            <el-select v-model="formInline.region" placeholder="数据类型" style="width: 120px;">
                                <el-option
                                        v-for="item in items"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                >
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit('formInline')" ><font-awesome-icon icon="search" pull="left"/>查询</el-button>
                            <!-- <el-button type="warning" @click="onSubmit('formInline')" ><font-awesome-icon icon="print" pull="left"/>打印</el-button> -->
                            <el-button type="danger" @click="onExport()"><font-awesome-icon icon="file-export" pull="left"/>导出</el-button>
                        </el-form-item>
                    </el-form>
                </div>
                <table-pagination
                        id="AlarmDataTable"
                        @handleSizeChange="handleSizeChange"
                        @handleCurrentChange="handleCurrentChange "
                        :data="data"
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
    import FileSaver from 'file-saver'
    import XLSX from 'xlsx'

    export default {
        name:"Alarm",
        components:{
            TablePagination,
            BreadCrumb
        },
        data(){
            return{
                formInline: {
                    startDate: '',
                    endDate: '',
                    region: ''
                },
                items:[
                    {
                        value: '分钟数据',
                        label: '分钟数据'
                    },
                    {
                        value: '小时数据',
                        label: '小时数据'
                    },
                    {
                        value: '整日数据',
                        label: '整日数据'
                    }
                ],
                rules:{
                    region: [
                        { required: true, message: '请选择数据类型', trigger: 'change' }
                    ],
                    startDate: [
                        { type: 'date', required: true, message: '请选择开始时间', trigger: 'change' }
                    ],
                    endDate: [
                        { type: 'date', required: true, message: '请选择结束时间', trigger: 'change' }
                    ]
                },
                columns:[
                    { prop : 'title' , label: '标题' },
                    { prop : 'create_name', label: '发布人'},
                    { prop : 'item_name', label: '栏目'},
                    { prop : 'create_time', label: '创建时间'},
                    { prop : 'weight', label: '权重'},
                ],
                data:[],
                pagination: {
                    total:0,
                    currentPage: 1,
                    pageSize: 5,
                    pageSizes:[5, 10, 15, 20]
                },
            }
        },
        created(){
            this.getData();
        },
        methods: {
            onSubmit(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            onExport(){
                var wb = XLSX.utils.table_to_book(document.querySelector('#AlarmDataTable'))
                /* get binary string as output */
                var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' })
                try {
                    FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'AlarmDataTable.xlsx')
                } catch (e) { if (typeof console !== 'undefined') console.log(e, wbout) }
                return wbout
            },
            getData(){
                this.$ajax .get('/api').then(res=>{
                    this.data=res.data.ALARM;
                    this.pagination.total=res.data.ALARM.length
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
        },
    }
</script>

<style scoped>
    .Alarm{
        width: 100%;
        height: 100%;
        overflow:hidden;
    }

    .el-form-item{
        margin-bottom: 0;
    }
</style>
