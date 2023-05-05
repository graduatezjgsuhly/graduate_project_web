<template>
    <div>
        <headerview>
        </headerview>
        <!-- <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 3" :key="item">
        </el-carousel-item>
  </el-carousel> -->
        <img src="../../assets/yongle.png" style="height: 200px; width: 1200px;"/>
    </div>
    <div style="display: flex;">
        <div>
            永乐大典·零本专题
            《永乐大典》是明永乐年间编纂的一部集中国古代典籍于大成的类书。全书目录六十卷，正文二万二千八百七十七卷，装成一万一千零九十五册，收录先秦至明初的典籍七八千种。《永乐大典》屡遭浩劫，正本不知去向，副本今仅存四百多册八百余卷，散藏于九个国家和地区的三十多个公私收藏机构。

明太祖洪武二十一年（1388 年），即欲修纂类书，商议 “编辑经史百家之言为《类要》”，但未修成。明成祖即位后，令解缙等人修书。编撰宗旨：“凡书契以来经史子集百家之书，至于天文、地志、阴阳、医卜、僧道、技艺之言，备辑为一书，毋厌浩繁！” 过程召集 147 人，首次成书于永乐二年（1404 年），初名《文献大成》；明成祖过目后认为 “所纂尚多未备”，不甚满意。永乐三年（1405 年）再命太子少傅姚广孝、解缙、礼部尚书郑赐监修以及刘季篪等人重修，动用朝野上下共 2169 人编写。组织设监修、总裁、副总裁、都总裁等职，负责各方面工作。蒋用文、赵同友各为正副总裁，陈济为都总裁，参用南京文渊阁的全部藏书，永乐五年（1407 年）定稿进呈，明成祖看了十分满意，亲自为序，并命名为《永乐大典》，清抄至永乐六年（1408 年）冬天才正式成书。据《进永乐大典表》称，全书缮写成 22877 卷，目录 60 卷，成书 11095 册
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
                axios.get('http://10.50.32.42:4000/media/永乐大典.pdf', {
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
