<template>
  <div class="layout">
    <el-tabs type="border-card">
      <el-tab-pane label="登录">
        <el-form
          label-position="right"
          label-width="60px"
          style="max-width: 460px"
          class="loginForm"
        >
          <el-form-item label="邮箱：">
            <el-input v-model="Email" />
          </el-form-item>
          <el-form-item label="密码：">
            <el-input type="password" v-model="password" />
          </el-form-item>

          <el-row>
            <el-checkbox
              class="checkBox"
              v-model="isAgree"
              label="同意用户使用准则"
              name="type"
            />
          </el-row>
          <el-button @click="button_login">
            登录
          </el-button>
          <el-row>
            <el-button text>
              <a class="floatR" @click="isChangePassword = true">忘记密码</a>
            </el-button>
            
          </el-row>
        </el-form>
      </el-tab-pane>

      <el-tab-pane label="注册">
        <el-form
          label-position="right"
          label-width="100px"
          style="max-width: 460px"
          class="loginForm"
          v-model="rform"
        >
          <el-form-item label="昵称：">
            <el-input v-model="rnickname" />
          </el-form-item>
          <el-form-item label="邮箱：">
            <el-input v-model="rEmail" />
          </el-form-item>
          <el-form-item label="密码：">
            <el-input type="password" v-model="rPassword" />
          </el-form-item>
          <el-form-item label="确认密码：">
            <el-input
              type="password"
              v-model="confirmPassword"
              @blur="confirmFunc"
            />
          </el-form-item>
          <!-- <el-form-item label="验证码：">
            <el-row>
              <el-input
                type="password"
                v-model="identifyCode"
                class="inpWidth"
              />
              <el-button type="primary" @click="getIdentifyCode" plain>
                获取验证码
              </el-button>
            </el-row>
          </el-form-item> -->
          <el-button @click="button_sign_up" >
            注册
          </el-button>
          <el-row>
            <el-checkbox
              class="checkBox"
              v-model="rAgree"
              label="同意用户使用准则"
              name="type"
            />
          </el-row>
          <el-button
            v-if="rAgree"
            type="primary"
            class="loginBtn"
            @click="button_sign_up"
          >
            注册
          </el-button>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
  <!-- 忘记密码弹窗 -->
  <teleport to="body">
    <el-dialog v-model="isChangePassword" title="修改密码" width="40%">
      <el-form
        label-position="right"
        label-width="100px"
        style="max-width: 460px"
        class="loginForm"
      >
        <el-form-item label="邮箱：" >
          <el-input v-model="rEmail" />
        </el-form-item>
        <el-form-item label="密码：">
          <el-input type="password" v-model="rPassword" />
        </el-form-item>
        <el-form-item label="确认密码：">
          <el-input
            type="password"
            v-model="confirmPassword"
            @blur="confirmFunc"
          />
        </el-form-item>
        <el-form-item label="验证码：">
          <el-row>
            <el-input type="password" v-model="identifyCode" class="inpWidth" />
            <el-button type="primary" @click="getIdentifyCode" plain>
              获取验证码
            </el-button>
          </el-row>
        </el-form-item>

        <el-row>
          <el-checkbox
            class="checkBox"
            v-model="rAgree"
            label="同意用户使用准则"
            name="type"
          />
        </el-row>
        <el-button
          v-if="rAgree"
          type="primary"
          class="loginBtn"
          @click="changePassword"
        >
          修改密码
        </el-button>
        <el-button
          v-if="rAgree"
          type="primary"
          class="loginBtn"
          @click="isChangePassword = false"
        >
          关闭页面
        </el-button>
      </el-form>
    </el-dialog>
  </teleport>
</template>
<script>
import axios from 'axios';
import Cookies from 'js-cookie';
import { reactive, toRefs, ref } from "@vue/reactivity";
import { ElMessage } from "element-plus";
import {useRouter} from 'vue-router';
import {defineComponent} from 'vue';
export default {
    name: 'ButtonExample',
    data() {
      return {
        rform: "",
        rEmail: "",
        rnickname:"",
        rPassword: "",
        Email: "",
        password:"",
      }
    },
    methods: {
        button_login(){
          // console.log(parseInt(this.password))
          // console.log(typeof parseInt(this.password))
          // console.log(this.Email)
          // console.log(typeof this.Email)
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: parseInt(this.Email), passwd: this.password })
          };
          fetch('http://10.50.32.42:4000/users/login_in_users/', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));
          Cookies.set('id',this.Email,{expires : 1});
          console.log(Cookies.get('id'));
          this.$router.push({
            path: '/main_page',
            query: {
              data:this.Email
            }
          },() => {
            console.log("界面跳转成功")
          })
          
        },
        button_sign_up(){
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({data:{ phonenumber: parseInt(this.rEmail), name: this.rnickname, passwd: this.rPassword} })
          };
          fetch('http://10.50.32.42:4000/users/sign_up_users/', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));
          console.log('即将跳转界面')
          this.$router.push({
            path: '/main_page',
            query: {
              Email:this.Email
            },
            
          }, () => {
            console.log('路由跳转成功')
          })
        }
    },
    setup() {
      const form = reactive({
        isAgree: 0,
      });
      const registerForm = reactive({
        confirmPassword: "",
        identifyCode: "",
        rAgree: 0,
      });

      // 方法
      // 登录 将账号密码写入后台,获取用户数据,后登录
      // 需要修改共享数据
      function login() {
        console.log(form);
      }
      // 注册 -- 将账号密码写入后台, 自动登录
      // 需要修改共享数据
      function register() {
        console.log("注册", registerForm);
      }
      // 获取验证码
      function getIdentifyCode() {
        console.log("获取验证码");
      }
      // 确认密码
      const confirmFunc = () => {
        if (registerForm.confirmPassword !== registerForm.rPassword)
          ElMessage.error("密码与确认密码不一致.");
      };
      // 修改密码
      let isChangePassword = ref(false);
      // 用的是注册参数
      function changePassword() {}

      return {
        isChangePassword,
        ...toRefs(form),
        ...toRefs(registerForm),
        login,
        register,
        getIdentifyCode,
        confirmFunc,
        changePassword,
      };
    },
};
</script>

<style scoped>
.layout {
  position: absolute;
  left: calc(50% - 200px);
  top: 100px;
  width: 400px;
}
.loginBtn {
  width: 100px;
}
.loginForm {
  text-align: center;
}
.checkBox {
  margin-left: 7px;
}
.inpWidth {
  width: 165px;
}
.floatR {
  font-size: 10px;
  margin-left: 9px;
  color: blue;
}
</style>
