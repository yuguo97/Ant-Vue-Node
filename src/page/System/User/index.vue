<!--
 * @Author: your name
 * @Date: 2020-08-28 11:39:25
 * @LastEditTime: 2021-02-07 15:51:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\element-ui-node\src\page\System\User\index.vue
-->


<template>
  <div class="hIndex">
    <a-card title="用户管理" style="">
    <a-button slot="extra" type="primary" size="small">新增</a-button>
    <div>
        <a-table :columns="columns" :data-source="data" rowKey="user_id">
            <a slot="name" slot-scope="text">{{ text }}</a>
            <template slot="operation" slot-scope="text, record">
                <a-button type="primary" size="small">
                    编辑
                </a-button>
                <a-button type="danger" size="small" @click="() => onDelete(record.user_id)">
                    删除
                </a-button>
            </template>
        </a-table>
    </div>
    </a-card>
  </div>
</template>
<script>
import userApi from "@/api/user";
const columns = [
  {
    title: '用户名',
    dataIndex: 'username',
    key: 'username',
    scopedSlots: { customRender: 'username' },
  },
  {
    title: '密码',
    dataIndex: 'password',
    key: 'password',
    width: 120,
  },
  {
    title: '头像',
    dataIndex: 'avatar',
    key: 'avatar',
  },
  {
    title: '创建时间',
    dataIndex: 'create_time',
    key: 'create_time',
  },
  {
    title: '登录状态',
    dataIndex: 'login_status',
    key: 'login_status',
  },
  {
    title: '用户角色',
    dataIndex: 'user_rule',
    key: 'user_rule',
  },
    {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    scopedSlots: { customRender: 'operation' },
    },
];

export default {
  name: "HomeIndex",
  data() {
    return {
        data:[],
        columns
    };
  },
  mounted() {
      this.initData()
  },
  methods: {
    initData() {
        userApi.initUser().then(res=>{
            if(res.success){
                this.data = res.data
            }
        })
    },
    onDelete(userId){
        userApi.deleteUser({
            user_id:userId
        }).then(res =>{
            this.$message.success('删除成功')
            this.initData()
        })
    }
  },
};
</script>
<style scoped>
.hIndex {
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 10px;
}
</style>