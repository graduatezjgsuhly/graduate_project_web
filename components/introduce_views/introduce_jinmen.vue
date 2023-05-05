<template>
    <div>
        <headerview>
        </headerview>
        <!-- <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 3" :key="item">
        </el-carousel-item>
  </el-carousel> -->
        <img src="../../assets/jinmen.jpg" style="height: 200px; width: 1200px;"/>
    </div>
    <div style="display: flex;">
        <div>
            津门杂记
            此《津门杂记》由清代张焘撰。全书共分上中下三卷，其内容以天津城为背景，记述了当地的历史文化、名胜古迹、风土人情等各个方面的内容，展现了天津城从商埠向政治经济、文化贸易城市的种种变迁。此为清光绪十年游艺山庄刊本。

作者张焘寓居天津三十年间，他记录了自己所见所闻和亲身经历的一些事件。并在稗官野史中精心搜集了许多有关天津古迹、奇事的记载和诗篇，最终编成了此《津门杂记》。除了上卷中记载的传统习俗，如 “岁时风俗”、“婚娶”、“丧礼” 等，中卷中的 “灯节”、“烟火盒子”、“四月庙会”、“盂兰会”、“祭灶过年” 等条目也记录了天津的传统文化。另外，还记录了近代以来天津由一主要以产盐为业的商埠，逐渐向工业城市的变迁，并反映了中外文化互相交流所带来的冲击和影响。这些材料涉及的内容包括食品、饮料、服饰、建筑等方面的变化，以及来自不同文化背景的移民和外籍居民在天津的生活和影响。这些变迁和影响，使得天津逐渐成为一个充满活力和多元文化的城市。（介绍参考）
        </div>
        
    </div>
    <div>
        <el-button @click="downloadFile">
            点击下载
        </el-button>
    </div>
</template>
<script lang="ts">
import {ref} from 'vue'
import scrollview from '../page_views/srcroll_zouma.vue'
import headerview from '../page_views/header_view.vue'
import axios from 'axios';
export default {
    methods: {
            downloadFile() {
                console.log("click")
                axios.get('http://10.50.32.42:4000/media/津门杂技.pdf', {
                    responseType: 'blob',
                    headers: {
                    'Content-type': 'application/octet-stream'
                    }
                }).then(response => {
                var blob = new Blob([response.data], {type: 'application/octet-stream'});
                var url = window.URL.createObjectURL(blob);
                var a = document.createElement('a');
                a.href = url;
                a.download = 'example.pdf';
                a.click();
                }).catch(error => {
                console.log(error);
                });
            }
    }
}
</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2) {
    background-image: "../../assets/yongle.png";
}

.el-carousel__item:nth-child(1) {
    background-image: '../../assets/yongle.png';
}
.el-carousel__item:nth-child(3) {
    background-image: '../../assets/yongle.png';
}

</style>