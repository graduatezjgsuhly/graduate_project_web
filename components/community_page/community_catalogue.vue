<template>
    <div>
        <headerview>
        </headerview>
    </div>
    <div >
        <el-pagination background layout="prev, pager, next" :total="1000"/>
    </div>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
import scrollview from '../page_views/srcroll_zouma.vue'
import headerview from '../page_views/header_view.vue'
</script>