<template>
    <div>
        <div style="display: flex;" class="layout">
            <el-input v-model="input" placeholder="请输入你想搜索的作品" clearable />
            <el-button class="kongge" type="primary" @click="button_search">
                <el-icon style="vertical-align: middle">
                    <Search/>
                </el-icon>
            </el-button>
            <el-radio-button label="main_page" @click="button_change_main">主页</el-radio-button>
            <el-radio-button label="login">登录</el-radio-button>
            <el-radio-button label="search" @click="button_change_community">交流区</el-radio-button>
        </div>
    </div>
    <div class="text-large">
        热门资源集
    </div>
    <div class="show_style" style="display: flex;">
            <el-space direction="horizontal">
                <el-card class ="box-card" style="width: 400px; height: 700px;">
                    <img src="../assets/qingdaobaopu.jpg" style="width: 200px; height: 150px; object-fit: cover;">
                    <div class="text-button">
                        清代宝谱
                    </div>
                    <div class="text-small">
                        宝谱，即皇帝宝玺印谱。此《清代宝谱》由清末民初陶湘辑编。此辑包含：清乾隆十三年定本《乾隆宝谱》（内收清乾隆帝钦定御宝玺印二十五枚，后附匣衍记）、清内府藏古玉印（附汉玉十印）、金轮精舍藏古玉印。此为民国时期陶氏涉园刊朱墨套印本。
                    </div>
                <el-button >
                    直接下载
                </el-button>
                <el-button @click="button_change_baopu">
                    浏览文件
                </el-button>
                </el-card>
            </el-space>
            <el-space direction="horizontal">
                <el-card class ="box-card" style="width: 400px; height: 700px;">
                    <img src="../assets/jinmen.jpg" style="width: 200px; height: 150px; object-fit: cover;">
                    <div class="text-button">
                        津门杂记
                    </div>
                    <div class="text-small">
                        此《津门杂记》由清代张焘撰。全书共分上中下三卷，其内容以天津城为背景，记述了当地的历史文化、名胜古迹、风土人情等各个方面的内容，展现了天津城从商埠向政治经济、文化贸易城市的种种变迁。此为清光绪十年游艺山庄刊本。
                    </div>
                    <el-button >
                        直接下载
                    </el-button>
                    <el-button @click="button_change_jinmen" >
                        浏览文件
                    </el-button>
                </el-card>
            </el-space>
            <el-space direction="horizontal">
                <el-card class ="box-card" style="width: 400px; height: 700px;">
                    <img src="../assets/busui.jpg" style="width: 200px; height: 150px; object-fit: cover;">
                    <div class="text-button">
                        卜岁恒言
                    </div>
                    <div class="text-small">
                        此《卜岁恒言》由清代吴鹄编撰。其内容为作者辑录前人著作中按月令记载的占候以及有关天象、物象记述的农业谚语。全书分上下两卷，包含三十七个子类（如：日、月、风、雨、雪、十二月、闰月、地土、山川、鸟兽、昆虫等等）。此为清光绪四年余庭训校刊本。
                    </div>
                    <el-button>
                        直接下载
                    </el-button>
                    <el-button @click="button_change_busui">
                        浏览文件
                    </el-button>
                </el-card>
            </el-space>
    </div>
    <div class="show_style" style="display: flex;">
            <el-space direction="horizontal">
                <el-card class ="box-card" style="width: 400px; height: 700px;">
                    <img src="../assets/yongle.png" style="width: 400px; height: 250px; object-fit: cover;">
                    <div class="text-button">
                        永乐大典
                    </div>
                    <div class="text-small">
                        《永乐大典》是明永乐年间编纂的一部集中国古代典籍于大成的类书。全书目录六十卷，正文二万二千八百七十七卷，装成一万一千零九十五册，收录先秦至明初的典籍七八千种。《永乐大典》屡遭浩劫，正本不知去向，副本今仅存四百多册八百余卷，散藏于九个国家和地区的三十多个公私收藏机构。此专题专为归档大典
                    </div>
                <el-button>
                    直接下载
                </el-button>
                <el-button @click="button_change_yongle">
                    浏览文件
                </el-button>
                </el-card>
            </el-space>
            <el-space direction="horizontal">
                <el-card class ="box-card" style="width: 400px; height: 700px;">
                <img src="../assets/baimei.jpg" style="width: 400px; height: 250px; object-fit: cover;">
                    <div class="text-button">
                        百美图卷
                    </div>
                    <div class="text-small">
                        此《百美图》卷旧传为仇英绘。画卷描绘了初春时节身穿华服的仕女在苑囿中的游乐活动：荡秋千、浇花、扑蝶、斗草、歌舞、弹唱、下棋、读书等。本幅描绘仕女人物一百人，其中华丽的建筑、缤纷的美人，呈现出 “苏州片” 式的大杂烩商业作品风格。此卷现藏于台北故宫博物院。
                    </div>
                <el-button @click="button_change_baimei">
                    直接下载
                </el-button>
                <el-button @click="button_change_baimei">
                    浏览文件
                </el-button>
                </el-card>
            </el-space>
            <el-space direction="horizontal">
                <el-card class ="box-card" style="width: 400px; height: 700px;">
                    <img src="../assets/huiwen.jpg" style="width: 400px; height: 250px; object-fit: cover;">
                    <div class="text-button">
                        回文类聚
                    </div>
                    <div class="text-small">
                        回文诗是一种独特的诗歌体裁，反复皆可成章。此《回文类聚》由宋代桑世昌撰，清代朱象贤续编。全书分作原编四卷（辑自汉至唐宋回文诗）、另编图一卷（包括一幅苏若兰像与八幅故事版画）、续编十卷（诸家诗图、璇玑碎锦图、各体诗词赋和题识）。此为清康熙时期刊本（麟玉堂藏板）。
                    </div>
                <el-button >
                    直接下载
                </el-button>
                <el-button @click="button_change_huiwen">
                    浏览文件
                </el-button>
                </el-card>
            </el-space>
    </div>
</template>
<script lang="ts" >
import { ref } from 'vue'
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'
import { method } from 'lodash';
import {useRouter} from 'vue-router'
import axios from 'axios';
import { inputEmits } from 'element-plus';
export default {
    name: 'Mainsrc',
    setup(){
    },
    data(){
        return {
            input: ''
        }
    },
    methods : {
        button_change_yongle(){
            this.$router.push({
                path: 'introduce_main_page',
            })
        },
        button_change_main(){
            this.$router.push({
                path: 'main_page',
            })
        },
        button_change_community(){
            this.$router.push({
                path: 'community_invitation',
            })
        },
        button_change_baopu(){
            this.$router.push({
                path: '/introduce_baopu',
            })
        },
        button_change_jinmen(){
            this.$router.push({
                path: '/introduce_jinmen',
            })
        },
        button_change_baimei(){
            this.$router.push({
                path: '/introduce_baimei',
            })
        },
        button_change_busui(){
            this.$router.push({
                path: '/introduce_busui',
            })
        },
        button_change_huiwen(){
            this.$router.push({
                path: '/introduce_huiwen',
            })
        },

        button_search(){
            console.log(this.input)
            const response = axios.post("http://10.50.32.42:4000/news/get_news/",{
                theme: this.input
            }).then(response => {
                console.log(response.data.data[0].url);
                this.$router.push({
                    path: response.data.data[0].url
                })
            }).catch(response => {
                console.log(response.data.data);
            })
            console.log(response)
        }
    }
}
</script>
<style scoped>
.layout{
    position:absolute;
    left: calc(30% );
    top: 20px;
    
    width: 800px;
}
.show_style{
    position: relative;
    top: 300px;
    justify-content: center;
}
.text-large{
    font-size: 24px;
    top:100px;
    color: tomato;
    text-align: center;
}
.text-button{
    font-size: 24px;
    top: 5px;
    text-align: center;
    color: black;
}
.button-show{
    justify-content: center;
    align-items: center;
    top: 100px;
}
</style>