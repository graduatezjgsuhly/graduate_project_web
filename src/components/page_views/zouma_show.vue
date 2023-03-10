<template>
  <div class="block text-center">
    
    <el-carousel height="250px">
      <el-carousel-item v-for="item in 4" :key="item">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background:url("../../assets/grade.png"); 
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
