<!--
 * @Author: your name
 * @Date: 2020-08-25 13:57:11
 * @LastEditTime: 2020-11-12 17:41:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\element-ui-node\src\page\Login\index.vue
-->



<template>
  <div class="login">
    <div class="login_content">
      <h3 class="title">系统登录</h3>
      <a-form :form="form">
        <a-form-item
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
          label="账号"
        >
          <a-input
            v-decorator="[
                'USERNAME',
                { rules: [{ required: true, message: '请输入账号' }] },
                ]"
            placeholder="请输入账号"
          />
        </a-form-item>
        <a-form-item
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
          label="密码"
        >
          <a-input
            v-decorator="[
                'PASSWORD',
                { rules: [{ required: true, message: '请输入密码' }] },
                ]"
            type="password"
            placeholder="请输入密码"
          />
        </a-form-item>
        <a-form-item></a-form-item>
        <a-form-item :label-col="formTailLayout.labelCol" :wrapper-col="formTailLayout.wrapperCol">
          <a-button type="primary" @click.enter="handleSubmit" style="width:100%">登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script>
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const formTailLayout = {
  labelCol: { span: 16 },
  wrapperCol: { span: 16, offset: 4 },
};
export default {
  name: "Login",
  data() {
    return {
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this, { name: "dynamic_rule" }),
    };
  },
  created() {
      var _this = this;
      document.addEventListener('keydown', _this.watchEnter)
  },
  methods: {
    handleSubmit() {
      this.form.validateFields((err, loginParams) => {
        if (!err) {
          if (
            loginParams.USERNAME === "admin" &&
            loginParams.PASSWORD === "123456"
          ) {
            sessionStorage.setItem("user", JSON.stringify(loginParams));
            this.$router.push({ path: "/" });
          } else {
            this.$message.error("账号或密码错误");
          }
        }
      });
    },

    watchEnter(e) {
      var keyNum = window.event ? e.keyCode : e.which; //获取被按下的键值
      //判断如果用户按下了回车键（keycody=13）
      if (keyNum == 13) {
        this.handleSubmit()
      }
    }
  },

  destroyed() {
    var _this = this;
    document.removeEventListener("keydown", _this.watchEnter);
  },
};
</script>
<style scoped>
.login {
  width: 100%;
  height: 100%;
  position: relative;
  /* background-color: #5075b5; */
}
.login_content {
  position: absolute;
  left: 50%;
  width: 450px;
  height: 300px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin-left: -225px;
  margin-top: 150px;
  padding: 35px 25px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.title {
  text-align: center;
  margin-bottom: 10px;
}
</style>