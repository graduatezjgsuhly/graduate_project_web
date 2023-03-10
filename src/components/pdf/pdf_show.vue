<template>
<div>
    <PDFView :pdfUrl="zaofanPdf" />
</div>
</template>
<script setup lang="ts">
import PDFView from "./pdfPreview.vue"
import zaofanPdf from "../assets/革命造反年代_上海文革运动史稿_I_李逊_z_lib_org.pdf"
</script>