<script setup lang="ts">
import SectionStocks from '@/components/SectionStocks.vue';

defineProps({
  sector: String,
})
</script>

<template>
    <h1>Stocks available</h1>
  
    <SectionStocks :sector="'Finance'" />

    <SectionStocks :sector="'Retail Trade'" />

    <SectionStocks :sector="'Energy Minerals'" />
</template>

<style scoped>
  h1{
    margin: 50px 0 0 0 !important;
    text-align: center;
  }
</style>
