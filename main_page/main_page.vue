<template>
    <div >
        <div>
            <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
                <el-radio-button :label="false">扩展</el-radio-button>
                <el-radio-button :label="true">收缩</el-radio-button>
            </el-radio-group>
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            @open="handleOpen"
            @close="handleClose"
        >
        <el-sub-menu index="1">
            <template #title>
                <el-icon><location /></el-icon>
                <span>Navigator One</span>
            </template>
            <el-menu-item-group>
                <template #title><span>Group One</span></template>
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
                <template #title><span>item four</span></template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
                <el-icon><icon-menu /></el-icon>
                <template #title>Navigator Two</template>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <el-icon><document /></el-icon>
                <template #title>Navigator Three</template>
            </el-menu-item>
            <el-menu-item index="4">
                <el-icon><setting /></el-icon>
                <template #title>Navigator Four</template>
            </el-menu-item>
        </el-menu>
        </div>
        <div style="display: flex;" class="layout">
            <el-input v-model="input" placeholder="请输入你想搜索的作品" clearable />
            <el-button class="kongge" type="primary">
                <el-icon style="vertical-align: middle">
                    <Search/>
                </el-icon>
            </el-button>
            <el-radio-button label="main_page">主页</el-radio-button>
            <el-radio-button label="login">登录</el-radio-button>
            <el-radio-button label="search">交流区</el-radio-button>
        </div>
    </div>
    <div class="zouma_show">
        <pageview>
        </pageview>
    </div>
    <div style="display: flex;" class="svg_style">
            <svg_wifi_view>
            </svg_wifi_view>
            <svg_wifi_view>
            </svg_wifi_view>
            <svg_wifi_view>
            </svg_wifi_view>
    </div>
    <div class="text_layout" style="display: flex;">
        <div>
            <el-space direction="vertical">
                <el-card v-for="i in 1" :key="i" class="box-card" style="width: 250px">
                <template #header>
                    <div class="card-header">
                    <span>完全开放</span>
                    </div>
                </template>
                <div>
                    书格是一个自由开放的在线古籍图书馆。致力于开放式分享、介绍、推荐有价值的古籍善本，并鼓励将文化艺术作品数字化归档。ojbk
                </div>
                </el-card>
            </el-space>
        </div>
        <div class="card_style">
            <el-space direction="vertical">
                <el-card v-for="i in 1" :key="i" class="box-card" style="width: 250px">
                <template #header>
                    <div class="card-header">
                    <span>精心挑选</span>
                    </div>
                </template>
                <div>
                    我们尽量挑选欣赏和在阅读价值较高的善本，所以我们更倾向于：艺术类、影像类、珍稀类以及部分刊印水平较高的书籍。
                </div>
                </el-card>
            </el-space>
        </div>
        <div class="card_style">
            <el-space direction="vertical">
                <el-card v-for="i in 1" :key="i" class="box-card" style="width: 250px ">
                <template #header>
                    <div class="card-header">
                    <span>全力呈现</span>
                    </div>
                </template>
                <div>
                    我们尽可能呈现书籍品貌、内容。借此计划让大家自由、免费地欣赏到那些难以现世的书籍。希望大家能从中感受到人类文明进程。
                </div>
                </el-card>
            </el-space>
        </div>
    </div>
    <div>
        <div class="show_style" style="display: flex;">
            <el-space direction="horizontal">
                <el-card class ="box-card" style="width: 250px ; height: 400px;">
                    <el-button style="background-color: aqua;">
                        所有资源
                    </el-button>
                    <el-button style="background-color: violet;" @click="hot_sourceClick" >
                        热门资源
                    </el-button>
                    <el-button style="background-color: aqua;" @click="ming_sourceClick">
                        清代资源
                    </el-button>
                    <el-button style="background-color: aqua;" @click="qing_sourceClick">
                        明代资源
                    </el-button>
                    <div class="text-card">
                        热门新资源
                    </div>
                </el-card>
            </el-space>
            <el-space direction="horizontal">
                <el-card class ="bg-img" style="width: 400px; height: 400px;" @click.native="yongle_Click">
                    <div class="image-container">
                        <img src="../assets/yongle.png" alt="your-alt-text" @click="yongle_Click">
                        <div class="text-overlay"> 永乐大典</div>
                    </div>
                </el-card>
            </el-space>
            <el-space direction="horizontal">
                <el-card class ="bg-img" style="width: 400px; height: 400px;">
                    <div class="image-container">
                        <img src="../assets/yongle.png" alt="your-alt-text">
                        <div class="text-overlay"> 四库全书</div>
                    </div>
                </el-card>
            </el-space>
            <el-space direction="horizontal">
                <el-card class ="bg-img" style="width: 400px; height: 400px;">
                    <div class="image-container">
                        <img src="../assets/yongle.png" alt="your-alt-text">
                        <div class="text-overlay"> 清代宝谱</div>
                    </div>
                </el-card>
            </el-space>
        </div>
    </div>       
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import Cookies from 'js-cookie'
import pageview from '../components/page_views/zouma_show.vue'
import svg_wifi_view from '../components/icons/wifi.vue'
import { useRouter } from 'vue-router'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import { computed } from '@vue/reactivity';
import { dataType } from 'element-plus/es/components/table-v2/src/common';
const route = useRouter()
const input = ref('')
const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const labelPosition = ref('right')
function yongle_Click(){
    console.log("1111")
}
function hot_sourceClick(){
    route.push({
        path: '/main_src_page'
    })
};
function ming_sourceClick(){
    route.push({
        path: '/mingdai'
    })
};
function qing_sourceClick(){
    route.push({
        path: '/qingdai'
    })
};
</script>

<style scoped>
.image-container {
  display: grid;
  grid-template-columns: 1fr 1fr; /* 将容器分成两列 */
  grid-gap: 10px; /* 设置图片之间的间距 */
}
.text-overlay {
  position: absolute;
  font-size: 24px;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* 其他样式 */
}

/* 可以给每个图片添加一些样式，例如统一大小等 */
.image-container img {
  width: 200px;
  height: 400px;
}
.bg-img{
    background-image: url('../assets/yongle.png');
    background-size: cover;
    z-index: -1;
}

.zouma_show{
    position: absolute;
    top: 100px;
    left: calc(25%);
    width: 900px;
}
.layout{
    position:absolute;
    left: calc(30% );
    top: 20px;
    width: 800px;
}
.kongge{
    margin-right: 10px;
}
.svg_style{
    position: absolute;
    width:900px;
    top:10px;
    left: calc(20%);
}
.svg_layout{
    width: 300px;
    height: 300px;
}
.text_layout{
    position: relative;
    left: calc(20% );
    top: 400px;
}
.card_style{
    position: relative;
    margin-left: calc(5%);
}
.show_style{
    position: relative;
    top: 400px;
}
.text-card{
    font-size: 24px;
    text-align: center;
    color: tomato;
}
</style>