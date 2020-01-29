<template>
  <div class="site-wrapper site-page--login">
    <div class="site-content__wrapper">
      <div class="site-content">
        <div class="brand-info">
          <h4 class="brand-info__text" style="font-size: 40px;">人力资源管理系统</h4>
          <p class="brand-info__intro">与众不同的管理系统</p>
        </div>
        <div class="login-main">
          <h3 class="login-title">登录</h3>
          <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" status-icon>
            <el-form-item prop="userName">
              <el-input size="medium" v-model="dataForm.userName" placeholder="帐号"></el-input>
            </el-form-item>
            <el-form-item prop="passWord">
              <el-input size="medium" v-model="dataForm.passWord" type="password" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button size="medium" class="login-btn-submit" type="primary" @click="dataFormSubmit()">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import API from '@/api'
  export default {
    data () {
      return {
        dataForm: {
          userName: '',
          passWord: '',
          uuid: ''
        },
        dataRule: {
          userName: [
            { required: true, message: '帐号不能为空', trigger: 'blur' }
          ],
          passWord: [
            { required: true, message: '密码不能为空', trigger: 'blur' }
          ]
        },
        captchaPath: ''
      }
    },
    methods: {
      // 提交表单
      dataFormSubmit () {
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            var params = {
              'userName': this.$base64.encode(this.dataForm.userName), // 对用户进行加密操作，如果需要添加秘钥后面直接追加秘钥
              'passWord': this.$md5(this.dataForm.passWord) // md5 加密密码
            }
            API.common.login(params).then(({data}) => {
              if (data && data.code === 0) {
                this.$cookie.set('token', data.token, { expires: `${data.expire || 0}s` })
                this.$router.replace({ name: 'home' })
              } else {
                this.$message.error(data.msg)
              }
            })
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  .site-wrapper.site-page--login {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(38, 50, 56, .5);
    overflow: hidden;
    &:before {
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
      width: 60%;
      height: 100%;
      content: "";
      background-image: url(~@/assets/img/login_bg.jpg);
      background-size: cover;
    }
    .site-content__wrapper {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      padding: 0;
      margin: 0;
      overflow-x: hidden;
      overflow-y: auto;
      background-color: transparent;
    }
    .site-content {
      min-height: 100%;
      padding: 30px 500px 30px 30px;
    }
    .brand-info {
      margin: 220px 100px 0 90px;
      color: #fff;
    }
    .brand-info__text {
      margin:  0 0 22px 0;
      font-size: 48px;
      font-weight: 400;
      text-transform : uppercase;
    }
    .brand-info__intro {
      margin: 10px 0;
      font-size: 16px;
      line-height: 1.58;
      opacity: .6;
    }
    .login-main {
      position: absolute;
      top: 0;
      right: 0;
      padding: 150px 60px 180px;
      width: 470px;
      min-height: 100%;
      background-color: #fff;
    }
    .login-title {
      font-size: 16px;
    }
    .login-btn-submit {
      width: 100%;
      margin-top: 38px;
    }
  }
</style>
