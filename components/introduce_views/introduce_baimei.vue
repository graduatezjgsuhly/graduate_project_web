<template>
    <div>
        <headerview>
        </headerview>
        <!-- <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 3" :key="item">
        </el-carousel-item>
  </el-carousel> -->
        <img src="../../assets/baimei.jpg" style="height: 200px; width: 1200px;"/>
    </div>
    <div style="display: flex;">
        <div>
            百美图卷
            此《百美图》卷旧传为仇英绘。画卷描绘了初春时节身穿华服的仕女在苑囿中的游乐活动：荡秋千、浇花、扑蝶、斗草、歌舞、弹唱、下棋、读书等。本幅描绘仕女人物一百人，其中华丽的建筑、缤纷的美人，呈现出 “苏州片” 式的大杂烩商业作品风格。此卷现藏于台北故宫博物院。

自明中期以来，苏州逐渐成为江南甚至全国的文化与时尚中心，其苏样时装、苏式家具与器用、苏州园林与绘画，甚至点心，都备受各地模仿。苏州本就拥有深厚的文化底蕴，画家们通过学习与临摹古画，利用江南地区丰富的文物收藏，逐渐发展出各自的风格，成为画坛主流。著名的苏州职业画家仇英曾在项家临摹学习古画后，创制出不少新作品。透过文人的聚会品题，苏州的书画品味与知识也逐步深化扩散。当时江南经济繁荣，许多人都有意愿及财力收藏书画。在丰厚利益的诱惑下，苏州出现了不少古画作坊，甚至部分文人画家也参与了造假。这些冠以唐、宋、元、明书画名家头衔的伪作，在近代被笼统地称为 “苏州片”。

在明末，出现了很多传为仇英作品的长卷。其中一类描绘了身穿华服的仕女在苑囿中游乐。这些作品的名字包括《汉宫春晓》、《百美图》、《阿房宫宫女欢乐之图》、《汉宫春晓百美图》。这显示了此类美女大杂烩的商业作品命题的泛滥。本幅作品即为此类作品的代表。旧传为仇英所作，但风格与仇英的作品不太相似，且色彩更为鲜艳。虽然这幅作品名为《百美图》，但其中的仕女们执壶浇花、荡秋千、用扇子扑蝶、坐在地上弄花草等场景，都应模仿自于仇英的《汉宫春晓》图卷。
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