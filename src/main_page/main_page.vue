<template>
    <div >
        <div>
            <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
                <el-radio-button :label="false">expand</el-radio-button>
                <el-radio-button :label="true">collapse</el-radio-button>
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
            <el-radio-button label="search">捐赠</el-radio-button>
        </div>
    </div>
    <div class="zouma_show">
        <pageview>

        </pageview>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import pageview from '../components/page_views/zouma_show.vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const input = ref('')
const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const labelPosition = ref('right')
</script>

<style scoped>
.zouma_show{
    position: absolute;
    top: 100px;
    left: calc(20%);
    width: 800px;
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
</style>