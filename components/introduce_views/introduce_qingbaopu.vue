<template>
    <div>
        <headerview>
        </headerview>
        <!-- <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 3" :key="item">
        </el-carousel-item>
  </el-carousel> -->
        <img src="../../assets/qingdaobaopu.jpg" style="height: 200px; width: 1200px;"/>
    </div>
    <div style="display: flex;">
        <div>
            清代宝谱
            宝谱，即皇帝宝玺印谱。此《清代宝谱》由清末民初陶湘辑编。此辑包含：清乾隆十三年定本《乾隆宝谱》（内收清乾隆帝钦定御宝玺印二十五枚，后附匣衍记）、清内府藏古玉印（附汉玉十印）、金轮精舍藏古玉印。此为民国时期陶氏涉园刊朱墨套印本。

从秦始皇一直到秦、汉、魏、晋，都是六玺。后来逐渐增多，到南北朝时的北齐曾经出现一个大的木印，压在公文等文书上，这方印进入御用宝玺的范围，使皇帝御用宝玺成为七方。到唐代是八方，明代的时候是二十四方。

在清朝初期，御用宝玺数量较少，也没有明确的规定。随着清朝的发展和皇权的逐渐壮大，御用宝玺的数量逐渐增多。到了康熙、雍正时期，御用宝玺的数量已经达到了三十多方。清乾隆十一年，乾隆帝根据《周易》中的「天數二十有五」的记载，将御用宝玺数量钦定为二十五种，希望清王朝至少能传至二十五世。这二十五种印章被后人称为 “清二十五宝”。    
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
                axios.get('http://10.50.32.42:4000/media/清代宝谱.pdf', {
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