<template>
    <div>
        <headerview>
        </headerview>
        <!-- <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 3" :key="item">
        </el-carousel-item>
  </el-carousel> -->
        <img src="../../assets/busui.jpg" style="height: 200px; width: 1200px;"/>
    </div>
    <div style="display: flex;">
        <div>
            卜岁恒言
            此《卜岁恒言》由清代吴鹄编撰。其内容为作者辑录前人著作中按月令记载的占候以及有关天象、物象记述的农业谚语。全书分上下两卷，包含三十七个子类（如：日、月、风、雨、雪、十二月、闰月、地土、山川、鸟兽、昆虫等等）。此为清光绪四年余庭训校刊本。

卜岁表示预测年成的好坏。恒言者犹常言，表示经常用语，此书分门别类辑录前人著作中有关农业生产知识和农谚而成，若以此而种田一定得到好收成，故名《卜岁恒言》。[1]
其内容包括前人著作中的言论摘录，主要涉及天气谚语。另外也包含作者的见解，强调在运用天气谚语时应灵活因时因地掌握。所记谚语接近现代流传的谚语，例如 “若要麦，见三白。冬无雪，麦不结” 和 “朝霞暮霞，无水煎茶” 等等。
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
                axios.get('http://10.50.32.42:4000/media/卜岁.pdf', {
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