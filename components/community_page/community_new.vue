<template>
    <div>
        <el-page-header :icon="'ArrowLeft'">
            <template #content>
            <span class="text-large font-600 mr-3" style="margin-left: 100px;"> 首页</span>
            <span class="text-large font-600 mr-3" style="margin-left: 100px;"> 资源集</span>
            <span class="text-large font-600 mr-3" style="margin-left: 100px;"> 交流区</span>
            <span class="text-large font-600 mr-3" style="margin-left: 100px;"> 捐赠</span>
            </template>
        </el-page-header>
    </div>
    <form ref="form" enctype="multipart/form-data">
        <div>
          <label for="user_id">用户id:</label>
          <input type="number" id="user_id" name="user_id">
        </div>
        <div>
          <label for="user_name">用户名:</label>
          <input type="text" id ="user_name" name="user_name">
        </div>
        <div>
            <label for="comment_theme">主题:</label>
            <input type="text" id="comment_theme" name="comment_theme">
        </div>
        <div>
            <label for="comment_text">帖子内容:</label> 
            <input type="text" id ="comment_text" name="comment_text" style="width:1000px;height:100px">
        </div>
        <div>
            <label for="pdf_file">文件:</label>
            <input type="file" id="pdf_file" name="pdf_file">
        </div>
        <button type="button" @click="submitForm">提交</button>
    </form>

</template>
<script lang="ts" >
import {ref} from 'vue'
import { ArrowLeft} from '@element-plus/icons-vue'
const input1 = ref('')
import axios from 'axios';
import { response } from 'express';

export default {
  methods: {
    async submitForm() {
      let formData = new FormData();
      formData.append('user_id',this.$refs.form.user_id.value);
      formData.append('user_name',this.$refs.form.user_name.value)
      formData.append('comment_text',this.$refs.form.comment_text.value);
      formData.append('comment_theme', this.$refs.form.comment_theme.value);
      formData.append('file', this.$refs.form.pdf_file.files[0]);
      console.log(formData.get('user_id'))
      console.log(formData.get('comment_text'))
      console.log(this.$refs.form.user_id.value)
      // const requestOptions = {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type' : 'multipart/form-data'
      //   },
      //   body: formData
      // };
      // fetch('http://10.50.32.42:4000/community/post_user_comment/', requestOptions)
      //   .then(response => response.json)
      //   .catch(error => console.log(error));
      let config = {
        headers: {'Content-Type': "multipart/form-data, charset=UTF-8"}
      }
      axios.post('http://10.50.32.42:4000/community/post_user_comment/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(response => {
        console.log(response.data);
      }).catch(error => {
        console.error(error);
      });
    }
  }
}

</script>