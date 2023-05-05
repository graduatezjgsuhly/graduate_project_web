<template>
  <div>
    <div>
    <!-- 帖子详情 -->
      <h1>helloworld{{ comment_Theme }}</h1>
      <p>发帖人：luyahu</p>
      <p>帖子内容：helloworld</p>
      <hr>
    </div>
    <!-- 评论区 -->
    <h1>评论区</h1>
    <form @submit.prevent="submitComment">
      <label>
        评论人名称：
        <input type="text" v-model="newComment.author">
      </label>
      <br>
      <label>
        评论内容：
        <textarea v-model="newComment.content"></textarea>
      </label>
      <br>
      <button type="submit">发表评论</button>
    </form>
    <br>
    <div v-for="comment in comments" :key="comment.id">
      <p>评论人：{{ comment.user_post_name }}</p>
      <p>评论内容：{{ comment.comment_post_text }}</p>
      <p>评论时间：{{ comment.created_time }}</p>
      <hr>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, ref} from 'vue';
import axios from 'axios';
import Cookies from 'js-cookie';
import { getCurrentInstance } from 'vue';
import {createApp} from 'vue'
import App from '../../../src/App.vue'
const theme = createApp(App);
theme.config.globalProperties.$globalVariable = Cookies.get('comment_theme');
export default {
  name: 'PostDetail',
  // props: {
  //   post: {
  //     type: Object,
  //     required: true,
  //   },
  // },
  data() {
    return {
        // commentTheme : "",
        // commentText : "",
        // userName: "",
        newComment: {
            author: '',
            content: '',
            created_time:'',
        },
        post: {
            commentText: [],
            userName: [],
            comments: [],
        },
        commentTheme: "", 
    }
  },
  methods: {
    // 提交评论
    submitComment() {
      // 将新评论添加到评论列表
      this.post.comments.push(this.newComment);
      console.log(this.newComment.author)
      console.log(this.newComment.content)
      let formData = new FormData();
      formData.append('comment_post_text',this.newComment.content);
      formData.append('user_post_name',this.newComment.author);
      formData.append('comment_post_id',Cookies.get('comment_id'));
      // 通过 API 将评论数据提交到服务器
      // ...
      let config = {
        headers: {'Content-Type': "multipart/form-data, charset=UTF-8"}
      }
      axios.post('http://10.50.32.42:4000/community/post_comment_post/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(response => {
        console.log(response.data);
      }).catch(error => {
        console.error(error);
      });
      // 清空表单数据
      this.newComment.author = '';
      this.newComment.content = '';
    },
  },
  setup(){
    const comments = ref([]);
    const commentText = ref("");
    const userName = ref("");
    const commentTheme = ref("");
    const fetchComments = async () => {
      try {
        const response = await axios.post('http://10.50.32.42:4000/community/get_all_comment_post/', {
          data: {
            comment_id : Cookies.get('comment_id')
          }
        });
        comments.value = response.data.data;
        console.log(comments.value)
        const response_plus = await axios.post('http://10.50.32.42:4000/community/get_comment_post/',{
          id : Cookies.get('comment_id')
        }).then(response_plus => {
          Cookies.set('comment_theme',response_plus.data.data[0].comment_theme);
          Cookies.set('comment_text',response_plus.data.data[0].comment_text);
          Cookies.set('user_name',response_plus.data.data[0].user_name);
          console.log(Cookies.get('comment_theme'));
          commentTheme.value= Cookies.get('comment_theme');
          console.log(commentTheme)
          console.log(commentTheme.value);
          const comment_Theme = ref(Cookies.get('comment_theme'))
          console.log(comment_Theme.value)
          // console.log(response_plus.data.data[0].comment_theme);
          // console.log(response_plus.data.data[0].comment_text);
          // console.log(response_plus.data.data[0].user_name);
          
        }).catch(response_plus =>{
        });
      } catch (error) {
        console.log(error);
      }
    };
    onMounted(fetchComments);
    return {
      comments,
      commentTheme,
      // title,
      // author,
      // content,
    };
  }
  // setup() {
  //   const comments = ref([]);
  //   const fetchComments = async () => {
  //     try {
  //       const response = await axios.post('https://your-api-url.com/comments', {
  //         postId: post.id,
  //       });
  //       comments.value = response.data.data;
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   onMounted(fetchComments);

  //   return {
  //     comments,
  //   };
  // },
};
</script>
