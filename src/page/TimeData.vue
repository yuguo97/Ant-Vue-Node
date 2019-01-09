<template>
    <div class="tData">
        <div class="header">
            <BreadCrumb />
        </div>
        <div class="content">
            <el-card class="box-card">
                <div style="width:100%;height:50px;margin:10px 0">
                    <el-button type="primary" @click="handleAdd()">添加数据</el-button>
                    <!-- <el-button type="warning" @click="handlePrint()">打印数据</el-button> -->
                    <el-button type="danger" @click="handleExport()">导出数据</el-button>
                </div>
                <table-pagination
                        id="TimeDataTable"
                        @handleSizeChange="handleSizeChange"
                        @handleCurrentChange="handleCurrentChange "
                        :data="tableData"
                        :columns="columns"
                        :pagination="pagination"
                ></table-pagination>
            </el-card>


            <el-dialog title="修改数据" :visible.sync="dialogModifyFormVisible" @close="closeModify('modifyForm')">
              <el-form :model="modifyForm" class="addArea" :rules="rules" ref="modifyForm">
                <el-form-item label="英雄:" :label-width="formLabelWidth" prop="name" style="width:50%;float:left">
                  <el-input v-model="modifyForm.name" autocomplete="off" placeholder="请输入英雄名称"></el-input>
                </el-form-item>

                <el-form-item label="年龄:" :label-width="formLabelWidth"  prop="age" style="width:50%;float:left">
                    <el-input v-model.number="modifyForm.age" auto-complete="off" placeholder="请输入英雄年龄"></el-input>
                </el-form-item>

                <el-form-item label="性别:" :label-width="formLabelWidth" prop="sex" style="width:50%;float:left">
                  <el-select v-model="modifyForm.sex" placeholder="请选择英雄性别" class="sexArea">
                    <el-option label="汉子" value="man"></el-option>
                    <el-option label="妹子" value="woman"></el-option>
                  </el-select>
                </el-form-item>

                <el-form-item label="籍贯:" :label-width="formLabelWidth" prop="address" style="width:50%;float:left">
                  <el-input v-model="modifyForm.address" auto-complete="off" placeholder="请输入英雄籍贯"></el-input>
                </el-form-item>

                <el-form-item label="职业:" :label-width="formLabelWidth" prop="dowhat" style="width:50%;float:left">
                  <el-input v-model="modifyForm.dowhat" auto-complete="off" placeholder="请输入英雄职业"></el-input>
                </el-form-item>


                <el-form-item label="台词:" :label-width="formLabelWidth" prop="favourite" style="width:50%;float:left">
                    <el-input v-model="modifyForm.favourite" auto-complete="off" placeholder="请输入英雄台词"></el-input>
                </el-form-item>

                <el-form-item label="背景:" :label-width="formLabelWidth" prop="explain" style="width:100%;float:left">
                  <el-input v-model="modifyForm.explain" auto-complete="off" type="textarea" :rows="6" resize="none" placeholder="请输入英雄背景"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="modifySure()">确 定</el-button>
              </div>
            </el-dialog>

            <el-dialog title="添加数据" :visible.sync="dialogAddFormVisible" @close="closeModify('addForm')">
              <el-form :model="addForm" class="addArea" :rules="rules" ref="addForm">
                <el-form-item label="英雄:" :label-width="formLabelWidth" prop="name" style="width:50%;float:left">
                  <el-input v-model="addForm.name" autocomplete="off" placeholder="请输入英雄名称"></el-input>
                </el-form-item>

                <el-form-item label="年龄:" :label-width="formLabelWidth"  prop="age" style="width:50%;float:left">
                    <el-input v-model.number="addForm.age" auto-complete="off" placeholder="请输入英雄年龄"></el-input>
                </el-form-item>

                <el-form-item label="性别:" :label-width="formLabelWidth" prop="sex" style="width:50%;float:left">
                  <el-select v-model="addForm.sex" placeholder="请选择英雄性别" class="sexArea">
                    <el-option label="汉子" value="man"></el-option>
                    <el-option label="妹子" value="woman"></el-option>
                  </el-select>
                </el-form-item>

                <el-form-item label="籍贯:" :label-width="formLabelWidth" prop="address" style="width:50%;float:left">
                  <el-input v-model="addForm.address" auto-complete="off" placeholder="请输入英雄籍贯"></el-input>
                </el-form-item>

                <el-form-item label="职业:" :label-width="formLabelWidth" prop="dowhat" style="width:50%;float:left">
                  <el-input v-model="addForm.dowhat" auto-complete="off" placeholder="请输入英雄职业"></el-input>
                </el-form-item>


                <el-form-item label="台词:" :label-width="formLabelWidth" prop="favourite" style="width:50%;float:left">
                    <el-input v-model="addForm.favourite" auto-complete="off" placeholder="请输入英雄台词"></el-input>
                </el-form-item>

                <el-form-item label="背景:" :label-width="formLabelWidth" prop="explain" style="width:100%;float:left">
                  <el-input v-model="addForm.explain" auto-complete="off" type="textarea" :rows="6" resize="none" placeholder="请输入英雄背景"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogAddFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="addSure()">确 定</el-button>
              </div>
            </el-dialog>


          <!-- 添加图片 -->
          <el-dialog title="添加图片" :visible.sync="addpicVisible" class="addPicArea" @close="closePicAdd()">
            <el-form :model="addpicform">
              <el-form-item label="图片地址" :label-width="formLabelWidth">
                <el-input v-model="addpicform.url" auto-complete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="addpicVisible = false">取 消</el-button>
              <el-button type="primary" @click="addpicSure()">确 定</el-button>
            </div>
          </el-dialog>
        </div>
    </div>
</template>

<script>
    import TablePagination from "@/components/yTablePagination"
    import BreadCrumb from "@/components/yBreadCrumb"
    import FileSaver from 'file-saver'
    import XLSX from 'xlsx'
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
                    { prop : 'dowhat', label: '职业',width:'100px'},
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
                                    this.handleDetails(row)
                                }
                            },
                            {
                                label: '修改',
                                type: "success",
                                method: (row) => {
                                    this.handleModify(row)
                                    }
                            },{
                                label: '删除',
                                type: "danger",
                                method: (row) => {
                                    this.handleDelete(row)}
                            },{
                                label: '添加图片',
                                type: "warning",
                                method: (row) => {
                                    this.handleAddPic(row)
                                    }
                            }
                    ]},
                ],
                      // 校验规则
                rules: {
                  name: [
                    { required: true, message: "请输入英雄名称", trigger: "blur" }
                  ],
                  age: [
                    { required: true, message: "请输入英雄年龄", trigger: "blur" },
                  ],
                  sex: [
                    { required: true, message: "请选择英雄性别", trigger: "change" },
                    { required: true, message: "请选择英雄性别", trigger: "blur" }
                  ],
                  address: [
                    { required: true, message: "请输入英雄籍贯", trigger: "blur" }
                  ],
                  dowhat: [
                    { required: true, message: "请输入英雄职业", trigger: "blur" }
                  ],
                  favourite: [
                    { required: true, message: "请输入英雄台词", trigger: "blur" }
                  ],
                  explain: [
                    { required: true, message: "请输入英雄背景", trigger: "blur" }
                  ]
                },
                tableData: [],
                pagination: {
                    total:0,
                    currentPage: 1,
                    pageSize: 2,
                    pageSizes:[2, 4, 6]
                },
                dialogModifyFormVisible: false,
                dialogAddFormVisible:false,
                addpicVisible:false,
                modifyForm: {
                    name: '',
                    age: '',
                    sex: '',
                    address: '',
                    dowhat: '',
                    favourite: '',
                    explain: ''
                },
                addForm: {
                    name: '',
                    age: '',
                    sex: '',
                    address: '',
                    dowhat: '',
                    favourite: '',
                    explain: ''
                },
                formLabelWidth: '80px',
                modifyId:'',
                addpicId: "",
                addpicform: {
                  url: ""
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
            handleDetails(row) {
                var id = row['_id'];
                this.$router.push(`/TimeData/${id}`);
            },
            handleSizeChange (size) {
                this.pagination.pageSize=size;
                // console.log(' this.limit:', size)
            },
            // 切换页码
            handleCurrentChange (index) {
                this.pagination.currentPage=index;
                // console.log(' this.page:', index)
            },
                // 关闭dialog的函数
            closeModify: function(formName) {
              this.$refs[formName].resetFields();
            },

            handleModify(row) {
                this.dialogModifyFormVisible=true;
                this.modifyForm = Object.assign({}, row);
                this.modifyId = row['_id'];
            },
            handleAdd(){
                this.dialogAddFormVisible=true;
            },
            // handlePrint(){
            //     // this.dialogAddFormVisible=true;
            // },
            handleExport(){
                // this.dialogAddFormVisible=true;
                var wb = XLSX.utils.table_to_book(document.querySelector('#TimeDataTable'))
                /* get binary string as output */
                var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' })
                try {
                    FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'TimeDataTable.xlsx')
                } catch (e) { if (typeof console !== 'undefined') console.log(e, wbout) }
                return wbout
            },
            addSure(){
                const _this=this;
                this.$confirm('确认添加吗?', '提示', {
                    type: 'warning'
                }).then(() => {
                    this.$ajax.post(`/api/Hero/addHero`,this.addForm).
                    then(res=>{
                        if(res.status==200){
                          this.dialogAddFormVisible=false;
                          this.$message({
                              message: "添加成功",
                              type: "success",
                              onClose: function() {
                                _this.getData();
                              }
                          });
                        }else{
                          this.$message({
                              message: "添加失败",
                              type: "error",
                              onClose: function() {
                                _this.getData()
                              }
                          });
                        }
                    })
                }).catch((err) => {
                    console.log(err)
                });
            },


            modifySure() {
               const _this=this;
                this.$confirm('确认修改吗?', '提示', {
                    type: 'warning'
                }).then(() => {
                    this.$ajax.post(`/api/Hero/putHero/${this.modifyId}`,this.modifyForm).
                    then(res=>{
                        if(res.status==200){
                          this.dialogModifyFormVisible=false;
                          this.$message({
                              message: "修改成功",
                              type: "success",
                              onClose: function() {
                                _this.getData();
                              }
                          });
                        }else{
                          this.$message({
                              message: "修改失败",
                              type: "error",
                              onClose: function() {
                                _this.getData()
                              }
                          });
                        }
                    })
                }).catch((err) => {
                    console.log(err)
                });
              },
            //删除
            handleDelete(row) {
                // console.log(id);
                var id = row['_id'];
               const _this=this;
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    type: 'warning'
                }).then(() => {
                    this.$ajax.delete(`/api/Hero/delHero/${id}`).
                    then(res=>{
                        // console.log(res)
                    if (res.data.status == "success") {
                        this.$message({
                            message: "删除成功",
                            type: "success",
                            onClose: function() {
                               _this.getData()
                            }
                        });
                        } else {
                        this.$message({
                            message: "删除失败",
                            type: "error",
                            onClose: function() {
                               _this.getData()
                            }
                        });
                        }
                    })
                }).catch((err) => {
                    console.log(err)
                });

            },
                // 关闭图片新增
            closePicAdd: function() {
              this.addpicform.url = "";
            },
            handleAddPic(row){
                this.addpicVisible=true;
                this.addpicId = row['_id'];
            },
            addpicSure() {
                const _this=this;
                if (!this.addpicform.url.trim()) {
                  this.$notify.error({
                    title: "错误",
                    message: "请输入正确的图片地址"
                  });
                  return;
                }

                var addObj = {
                  url: this.addpicform.url
                };
                this.$confirm('确认添加吗?', '提示', {
                    type: 'warning'
                }).then(() => {
                    this.$ajax.put(`/api/Hero/addpic/${this.addpicId}`,addObj).
                    then(res=>{
                        if(res.status==200){
                          this.addpicVisible=false;
                          this.$notify({
                            title: "成功",
                            message: "添加图片成功",
                            type: "success",
                            onClose: function() {
                              _this.getData()
                            }
                          });
                        }else{
                            this.$notify({
                              title: "失败",
                              message: "添加图片失败",
                              type: "error",
                              onClose: function() {
                                _this.getData()
                              }
                            });
                        }
                    })
                }).catch((err) => {
                    console.log(err)
                });





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
