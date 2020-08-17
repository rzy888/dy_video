<template>
  <div class="login">
    <!-- 手机号登录 -->
    <div v-if="ispwd == 1">
      <!-- 头部 -->
      <div class="top">
        <span @click="goBack">返回</span>
      </div>
      <div class="content">
        <!-- 标题 -->
        <div>
          <h3>登录后即可查看信息</h3>
          <p>
            请阅读 抖音
            <span>用户协议</span> 和
            <span>隐私政策</span>
          </p>
        </div>
        <!-- form表单 -->
        <div class="form">
          <div>
            <div>
              <select v-model="region">
                <option value="86">+86</option>
                <option value="87">+87</option>
                <option value="88">+88</option>
                <option value="89">+89</option>
              </select>
            </div>
            <input
              type="text"
              v-model="phone"
              oninput="if(value.length > 11)value = value.slice(0, 11)"
              onkeypress="return(/[\d\.]/.test(String.fromCharCode(event.keyCode)))"
              placeholder="请输入手机号"
            />
            <i
              v-if="isClose"
              @click="closePhone"
              class="iconfont"
              style="fontSize:50%;line-height: 40px;margin-right:10px"
            >&#xe64f;</i>
          </div>
          <div>{{ msg }}</div>
          <div>未注册的手机号验证通过后将自动注册</div>
          <button :class="isCode ? 'iscode' : ''" :disabled="isDisable" @click="getCode">获取短信验证码</button>
          <div>
            <span @click="ispwd = 2">密码登录</span>
            <span @click="qita = true">其他方式登录</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 账号密码登录 -->
    <div v-else-if="ispwd == 2">
      <!-- 头部 -->
      <div class="top">
        <i @click="ispwd = 1" class="iconfont">&#xe604;</i>
        <span @click="help">帮助</span>
      </div>
      <div class="content">
        <!-- 标题 -->
        <div>
          <h3>手机号密码登录</h3>
        </div>
        <!-- form表单 -->
        <div class="form">
          <div>
            <div>
              <select>
                <option value="86">+86</option>
                <option value="87">+87</option>
                <option value="88">+88</option>
                <option value="89">+89</option>
              </select>
            </div>
            <input
              type="text"
              v-model="phone"
              oninput="if(value.length > 11)value = value.slice(0, 11)"
              onkeypress="return(/[\d\.]/.test(String.fromCharCode(event.keyCode)))"
              placeholder="请输入手机号"
            />
            <i
              v-if="isClose"
              @click="closePhone"
              class="iconfont"
              style="fontSize:50%;line-height: 40px;margin-right:10px"
            >&#xe64f;</i>
          </div>
          <div>{{ msg }}</div>
          <div class="pwd">
            <input type="password" class="input-pwd" v-model="password" placeholder="请输入密码" />
            <i
              v-if="isPwdClose"
              @click="password = ''"
              class="iconfont"
              style="fontSize:50%;line-height: 40px;margin-right:10px"
            >&#xe64f;</i>
          </div>
          <div>{{ pwdMsg }}</div>
          <p style="margin-bottom:10px">
            <span class="radio">
              <i class="iconfont">&#xe603;</i>
            </span>
            我已阅读并同意 抖音
            <span>用户协议</span> 和
            <span>隐私政策</span>
          </p>
          <button :class="isCode ? 'iscode' : ''" :disabled="isDisable" @click="login">登录</button>
          <div>
            <span @click="ispwd = 3">找回密码</span>
            <span @click="ispwd = 3">立即注册</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 立即注册并登录 -->
    <div v-else-if="ispwd == 3">
      <!-- 头部 -->
      <div class="top">
        <span @click="ispwd = 1">
          <i class="iconfont">&#xe604;</i>
        </span>
      </div>
      <div class="content">
        <!-- 标题 -->
        <div>
          <h3>手机号注册并自动登录</h3>
        </div>
        <!-- form表单 -->
        <div class="form">
          <div>
            <div>
              <select>
                <option value="86">+86</option>
                <option value="87">+87</option>
                <option value="88">+88</option>
                <option value="89">+89</option>
              </select>
            </div>
            <input
              type="text"
              v-model="phone"
              oninput="if(value.length > 11)value = value.slice(0, 11)"
              onkeypress="return(/[\d\.]/.test(String.fromCharCode(event.keyCode)))"
              placeholder="请输入手机号"
            />
            <i
              v-if="isClose"
              @click="closePhone"
              class="iconfont"
              style="fontSize:50%;line-height: 40px;margin-right:10px"
            >&#xe64f;</i>
          </div>
          <div>{{ msg }}</div>
          <div class="pwd">
            <input type="password" class="input-pwd" v-model="password" placeholder="请输入密码" />
            <i
              v-if="isPwdClose"
              @click="password = ''"
              class="iconfont"
              style="fontSize:50%;line-height: 40px;margin-right:10px"
            >&#xe64f;</i>
          </div>
          <div>{{ pwdMsg }}</div>
          <div class="pwd">
            <input type="password" class="input-pwd" v-model="againPassword" placeholder="确认密码" />
            <i
              v-if="isPwdClose"
              @click="againPassword = ''"
              class="iconfont"
              style="fontSize:50%;line-height: 40px;margin-right:10px"
            >&#xe64f;</i>
          </div>
          <div>{{ pwdMsg2 }}</div>
          <p style="margin-bottom:10px">
            <span class="radio">
              <i class="iconfont">&#xe603;</i>
            </span>
            我已阅读并同意 抖音
            <span>用户协议</span> 和
            <span>隐私政策</span>
          </p>
          <button :class="isCode ? 'iscode' : ''" :disabled="isDisable" @click="regAndLogin">注册并登录</button>
        </div>
      </div>
    </div>
    <!-- 输入验证码 -->
    <div v-else>
      <!-- 头部 -->
      <div class="top">
        <span @click="ispwd = 1">返回</span>
      </div>
      <div class="content">
        <!-- 标题 -->
        <div>
          <h3>请输入验证码</h3>
          <p>验证码已通过短信发送至 +{{ region }} {{ phone }}</p>
        </div>
        <!-- form表单 -->
        <div class="form">
          <div>
            <input
              type="text"
              v-model="code"
              oninput="if(value.length > 4)value = value.slice(0, 4)"
              onkeypress="return(/[\d\.]/.test(String.fromCharCode(event.keyCode)))"
              placeholder="请输入验证码"
            />
            <span v-show="isTime" class="time">{{ time }}</span>
          </div>
          <div>{{ codeMsg }}</div>
          <button
            style="margin-top:10px"
            :class="isCodeLogin ? 'iscode' : ''"
            :disabled="isDisableLogin"
            @click="codeLogin"
          >登录</button>
        </div>
      </div>
    </div>
    <!-- 第三方登录 -->
    <transition name="up">
      <div class="qita" v-if="qita">
        <ul>
          <li @click="help">
            <img src="../assets/img/tout.png" alt />今日头条登录
          </li>
          <li @click="help">
            <img src="../assets/img/wx.png" alt />
            <span>微信登录</span>
          </li>
          <li @click="help">
            <img src="../assets/img/qq.png" alt />
            <span>QQ登录</span>
          </li>
          <li @click="help">
            <img src="../assets/img/wb.png" alt />
            <span>微博登录</span>
          </li>
          <li @click="qita = false">
            <span>取消</span>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import { MessageBox, Toast } from "mint-ui";
export default {
  data() {
    return {
      // 手机号
      phone: null,
      // 密码
      password: "",
      // 再次输入密码
      againPassword: "",
      // 提交按钮颜色
      isCode: false,
      // 是否禁用提交按钮
      isDisable: true,
      // 输入手机号提示消息
      msg: "",
      // 输入密码提示消息
      pwdMsg: "",
      // 再次输入密码提示
      pwdMsg2: "",
      // 控制手机号和验证码或者密码登录显示与否
      ispwd: 1,
      // 是否显示其他登录方式
      qita: false,
      // 是否清空手机号
      isClose: false,
      // 是否清空密码
      isPwdClose: false,
      // 下拉选择手机号地区
      region: "86",
      // 输入的验证码
      code: null,
      // 验证码提示消息
      codeMsg: "",
      // 控制输入验证码后登录按钮变化
      isCodeLogin: false,
      // 登录按钮
      isDisableLogin: true,
      // 倒计时
      time: 60,
      // 显示倒计时
      isTime: true,
    };
  },
  watch: {
    // 监听手机号的长度
    phone: function () {
      if (this.phone.length <= 0) {
        this.isClose = false;
        this.msg = "";
        this.isCode = false;
        this.isDisable = true;
      } else if (this.phone.length == 11) {
        this.isClose = true;
        this.isCode = true;
        this.isDisable = false;
      } else {
        this.isClose = true;
        this.isCode = false;
        this.isDisable = true;
        this.msg = "";
      }
    },
    // 监听密码的长度是否显示清空按钮
    password: function () {
      if (this.password.length <= 0) {
        this.isPwdClose = false;
      } else {
        this.pwdMsg = "";
        this.isPwdClose = true;
      }
    },
    // 监听输入验证码
    code: function () {
      if (this.code.length == 4) {
        this.isCodeLogin = true;
        this.isDisableLogin = false;
      } else {
        this.codeMsg = "";
        this.isCodeLogin = false;
        this.isDisableLogin = true;
      }
    },
  },
  computed: {
    // 判断手机号是否正确
    isPhone() {
      var re = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
      if (re.test(this.phone)) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    // 点击获取验证码
    getCode() {
      if (!this.isPhone) {
        this.msg = "手机号错误，请重新填写";
      } else {
        // 显示输入验证码
        this.ispwd = 4;
        // 开始倒计时
        var timer = setInterval(() => {
          this.time--;
          if (this.time == 58) {
            MessageBox("验证码提示", "1234");
          }
          if (this.time <= 0) {
            this.time = 60;
            this.isTime = false;
            clearInterval(timer);
          }
        }, 1000);
      }
    },
    // 清除手机号
    closePhone() {
      this.phone = "";
      this.isCode = false;
    },
    // 注册登录
    regAndLogin() {
      if (!this.isPhone) {
        this.msg = "手机号错误，请重新填写";
      } else if (!this.password) {
        this.pwdMsg = "请输入密码";
      } else if (this.password != this.againPassword) {
        this.pwdMsg2 = "两次密码不一致";
      } else {
        this.pwdMsg2 = "";
        // 跳转首页
        this.$router.push("/index");
        // 存储uname
        window.localStorage.setItem("uname", this.phone);
        window.localStorage.setItem("upwd", this.password);
        // 获取用户信息
        this.$store.dispatch("getMyInfo");
      }
    },
    // 点击登录
    login() {
      if (!this.isPhone || this.phone != window.localStorage.getItem("uname")) {
        this.msg = "手机号错误，请重新填写";
      } else if (this.password != window.localStorage.getItem("upwd")) {
        this.pwdMsg = "密码错误";
      } else {
        // 跳转首页
        this.$router.push("/index");
        // 存储uname
        window.localStorage.setItem("uname", this.phone);
        // 获取用户信息
        this.$store.dispatch("getMyInfo");
      }
    },
    // 验证码登录
    codeLogin() {
      if (this.code == 1234) {
        // 跳转首页
        this.$router.push("/index");
        // 存储uname
        window.localStorage.setItem("uname", this.phone);
        // 获取用户信息
        this.$store.dispatch("getMyInfo");
      } else {
        this.codeMsg = "验证码错误";
      }
    },
    //返回
    goBack() {
      history.go(-1);
    },
    help() {
      Toast("请注册或者验证码登录");
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  color: #000;

  .top {
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }

  .content {
    padding: 40px;

    > div {
      margin-bottom: 20px;
      > p {
        font-size: 80%;
        color: #0505059c;
        margin-top: 10px;
        display: flex;
        align-items: center;
        .radio {
          display: block;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 1px solid #2c1b1b6b;
          margin-right: 10px;
          line-height: 10px;
          text-align: center;
          i {
            display: block;
            font-size: 90%;
            transform: translate(-1px, -1px);
          }
        }

        span {
          color: #4343a5;
        }
      }
    }

    .form {
      div:nth-child(1) {
        display: flex;
        width: 100%;
        height: 40px;
        background-color: #eee;
        input {
          width: 100%;
          background: #eee;
          border-radius: 3px;
          padding: 0 10px;
          caret-color: #ff0d21;
          &::-webkit-input-placeholder {
            color: #2c1b1b6b;
          }
        }
        .time {
          line-height: 40px;
          color: #2c1b1b6b;
          margin-right: 10px;
        }
        div {
          width: 50px;
          padding: 0 10px;
          select {
            -moz-appearance: none;
            background-color: #eee;
            &::-ms-expand {
              display: none;
            }
          }
        }
      }
      div:nth-child(2) {
        font-size: 80%;
        color: #fd0808f6;
        margin: 5px 0;
      }
      div:nth-child(3) {
        font-size: 80%;
        color: #4241419c;
        margin: 10px 0;
      }
      div:nth-child(4) {
        font-size: 80%;
        color: #fd0808f6;
        margin: 5px 0;
      }
      div:nth-child(6) {
        font-size: 80%;
        color: #fd0808f6;
        margin: 5px 0;
      }
      .pwd {
        width: 100%;
        display: flex;
        background: #eee;
        .input-pwd {
          width: 100%;
          height: 40px;
          box-sizing: border-box;
          -moz-box-sizing: border-box;
          -webkit-box-sizing: border-box;
          background: #eee;
          border-radius: 3px;
          caret-color: #ff0d21;
          padding: 0 10px;
          &::-webkit-input-placeholder {
            color: #2c1b1b6b;
          }
        }
      }

      button {
        width: 100%;
        height: 40px;
        background-color: #70636357;
        text-align: center;
        line-height: 40px;
        color: #fff;
        border-radius: 3px;
        margin-bottom: 20px;
      }
      .iscode {
        background-color: red !important;
      }
      div:nth-child(5) {
        display: flex;
        justify-content: space-between;
        font-size: 80%;
        color: #4343a5;
      }
      div:nth-child(7) {
        display: flex;
        justify-content: space-between;
        font-size: 80%;
        span {
          color: #4343a5;
        }
      }
    }
  }
  .qita {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    ul {
      position: absolute;
      bottom: 0;
      width: 100%;
      background-color: #ffffff;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      text-align: center;
      li {
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #eee;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 90%;
        img {
          width: 25px;
          height: 25px;
          margin-right: 10px;
        }
      }
      :nth-child(5) {
        border-top: 5px solid #eee;
      }
    }
  }
  .up-enter-active,
  .up-leave-active {
    transition: all 0.3s;
  }
  .up-enter,
  .up-leave-to {
    transform: translateY(100%);
    opacity: 1;
  }
}
</style
>>
