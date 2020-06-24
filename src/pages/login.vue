<template>
  <div class="login">
    <h3>登录</h3>
    <div>
      <input type="text" placeholder="请输入手机号" v-model="tel" />
    </div>
    <div>
      <input type="password" placeholder="请输入密码" v-model="pass" />
    </div>
    <div>
      <button @click="send">发送验证码</button>
    </div>
    <div>
      <input type="text" placeholder="请输入验证码" v-model="checkCode" />
    </div>
    <div>
      <button @click="login">登录</button>
    </div>
  </div>
</template>
<script>
import { requestLogin, sentCode,verify } from "../util/request";
export default {
  components: {},
  data() {
    return {
      tel: "15737929356", //手机号
      pass: "123456", //密码
      checkCode: "" //验证码
    };
  },
  methods: {
    // 当点击发送验证码的时候，先验证账号密码对不对，如果不对，提醒用户账号密码错误；如果正确，发送验证码。
    send() {
      //发送验证码
      //登录验证
      requestLogin({
        phone: this.tel,
        password: this.pass
      })
        .then(res => {
          
          //发送验证码
          sentCode({
            phone: this.tel
          }).then(res => {
            alert("验证码发送成功")
            console.log(res);
          });
        })
        .catch(err => {
          //失败
          alert("账号或者密码错误");
        });
    },
    // 如果点击了登录，那么就验证验证码对不对，如果验证码正确，就跳转到index,如果不正确，就提醒用户验证码错误
    //登录
    login() {
      //验证验证码
      verify({
        phone:this.tel,
        captcha:this.checkCode
      }).then(res=>{//验证成功
        this.$router.push("/index")
      }).catch(err=>{//验证失败
        alert("验证码错误")
      })
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../stylus/index.styl';

.login {
  h3 {
    color: $success;
    font-size: $h1;
  }

  button {
    width: 85%;
  }
}
</style>