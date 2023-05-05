<template>
    <div>
        <el-page-header :icon= "'ArrowLeft'">
            <template #content>
            <span class="text-large font-600 mr-3" style="margin-left: 100px;" @click="jump_main"> 首页</span>
            <span class="text-large font-600 mr-3" style="margin-left: 100px;" @click="jump_main_src"> 资源集</span>
            <span class="text-large font-600 mr-3" style="margin-left: 100px;" @click="jump_community"> 交流区</span>
            <span class="text-large font-600 mr-3" style="margin-left: 100px;"> 捐赠</span>
            </template>
        </el-page-header>
        <!-- <div class="table_layout">
            <el-table :data="tableData" @row-click="handleTableRowClick">
                <el-table-column prop="theme" label="主题"></el-table-column>
                <el-table-column prop="created_time" label="发帖时间"></el-table-column>
                <el-table-column prop="user" label="发帖人"></el-table-column>
            </el-table>,
        </div> -->
        <div style="margin-top: 50px;">
            <el-button @click="jump_comment">
                我要发帖
            </el-button>
        </div>
        <div v-for="data in tableData" :key ="data.id" @click="handleCommentClick(data)">
            <p>
                帖子ID:{{ data.comment_id }}
            </p>
            <p>
                帖子主题:{{ data.comment_theme }}
            </p>
            <p>
                发帖人:{{ data.user_name }}
            </p>
            <p>
                发帖时间:{{ data.created_time }}
            </p>
            <href>
                发帖文件:{{ data.pdf_url }}
            </href>
        </div>
        <div>
            <template>
                <el-pagination background layout="prev, pager, next" :total="1000" />
            </template>
        </div>
    </div>
</template>
<script lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import scrollview from '../page_views/srcroll_zouma.vue'
import headerview from '../page_views/header_view.vue'
import { ArrowLeft } from '@element-plus/icons-vue'
import {useRouter} from 'vue-router';
import Cookies from 'js-cookie'
export default {
    name : 'community_invitation',
    data() {

        return {
            tableData: [
            ],
        }
    },
    methods: {
        handleCommentClick(data) {
            // console.log(`data的id是${data.comment_id}`)
            Cookies.set('comment_id', data.comment_id)
            this.$router.push({
                path: '/community_comment',
            })
        },
        jump_main(){
            this.$router.push({
                path: '/main_page',
            })
        },
        jump_community(){
            this.$router.push({
                path:'/community_invitation'
            })
        },
        jump_main_src(){
            this.$router.push({
                path:'/main_src_page'
            })
        },
        jump_comment(){
            this.$router.push({
                path:'/community_new'
            })
        },
    },
    setup() {
        const tableData = ref([]);
        // const jsonData = {
        //     "data": [
        //         {
        //         "comment_text": "hello",
        //         "user_name": "luyahu",
        //         "created_time": "2023-04-09T06:46:49.939Z",
        //         "comment_theme": "hello"
        //         },
        //         {
        //         "comment_text": "helloworld",
        //         "user_name": "",
        //         "created_time": "2023-04-11T06:30:44.584Z",
        //         "comment_theme": null
        //         },
        //         {
        //         "comment_text": "helloworld",
        //         "user_name": "luyahu",
        //         "created_time": "2023-04-11T06:33:26.879Z",
        //         "comment_theme": "helloworld"
        //         }
        //     ]
        // };
        // const tableData = jsonData.data.map(item => ({
        // theme: item.comment_theme || '',
        // created_time: new Date(item.created_time).toLocaleDateString(),
        // user: item.user_name || ''
        // }));
        // return {
        //     tableData
        // }
        const tableData_pre = [];
        const getData = async () => {
            const response = await axios.get('http://10.50.32.42:4000/community/get_user_comment/');
            // 将响应数据合并到data中
            tableData.value = response.data.data 
        };
        onMounted(getData);
        console.log(tableData)
        return {
            tableData : tableData
        };
    }
}
</script>
<style scoped>
.table_layout{
    position: absolute;
    top: 100px;
    width: 1500px;
}
.header_layout{
    position: absolute;
    top: 0px;
    width: 1500px;
}
</style>