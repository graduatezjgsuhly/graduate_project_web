<template>
    <div>
        <headerview>
        </headerview>
        <!-- <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 3" :key="item">
        </el-carousel-item>
  </el-carousel> -->
        <img src="../../assets/huiwen.jpg" style="height: 200px; width: 1200px;"/>
    </div>
    <div style="display: flex;">
        <div>
            回文类聚
            回文诗是一种独特的诗歌体裁，反复皆可成章。此《回文类聚》由宋代桑世昌撰，清代朱象贤续编。全书分作原编四卷（辑自汉至唐宋回文诗）、另编图一卷（包括一幅苏若兰像与八幅故事版画）、续编十卷（诸家诗图、璇玑碎锦图、各体诗词赋和题识）。此为清康熙时期刊本（麟玉堂藏板）。

回文，亦称回环，是正读反读都能读通的句子，是一种修辞手法和文字游戏。回文诗，就是使用了这种修辞手法，使得能够回还往复，正读倒读皆成章句的诗篇。回文诗有很多种形式如 “通体回文”、“就句回文”、“双句回文”、“本篇回文”、“环复回文” 等。回文诗具有独特的韵味和趣味，可以让读者在诗歌中感受到多重的意义和美感。

据说回文诗因晋时前秦苏蕙（字若兰）[1] 的《回文璇玑图》而 “大备”。《回文类聚》（四卷本）卷一即专论《璇玑图》，列举各种读法，末附苏轼、黄庭坚、秦观等题《璇玑图》诗。卷二列举各种回文图，并述其读法。卷三收四言、五言、六言、七言回文诗五十三首，卷四收回文词五十五首。此书是在南宋桑世昌《回文类聚》以及明人张之象（增修）本的基础之上增续而成。该书在清康熙至嘉庆年间被多次刊印，主要有：鹤松堂、麟玉堂、裕文堂与洞庭杨氏藏板四种，这些藏板版式几乎完全相同，应为同一刻板的复刊本。    
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
                axios.get('http://10.50.32.42:4000/media/回文.pdf', {
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