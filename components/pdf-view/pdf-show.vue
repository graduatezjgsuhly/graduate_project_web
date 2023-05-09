<script setup lang="ts">
import PDFViewer from './PDFViewer.vue';

// import PDFSrc from '@/assets/files/Markdown.pdf'
const PDFSrc = new URL('http://10.50.32.42:4000/media/ARM.pdf').href
// pdf document pages are rendered. Can be used to set default pages scale
function onLoaded (pdfApp: any) {
  console.log('loaded app:', pdfApp)
}
</script>
<template>
  <div>
    <h1>vue3-pdf-app 参考文档</h1>
    <ul class="m-list">
      <li>
        <a class="u-file" href="http://10.50.32.42:4000/media/ARM.pdf" target="_blank">vue3-pdf-app</a>
      </li>
    </ul>
    <h2 class="mt30 mb10">PDFViewer 基本使用</h2>
    <PDFViewer
      page-scale="page-fit"
      :width="800"
      :height="700"
      theme="dark"
      :src="PDFSrc"
      @loaded="onLoaded" />
  </div>
</template>
<style lang="less" scoped>
</style>