<script setup lang="ts">
import SectionStocks from '@/components/FundSection.vue';

defineProps({
  sector: String,
})
</script>

<template>
    <h1>bdr disponiveis</h1>
  
    <SectionStocks :sector="'Finance'" />

    <SectionStocks :sector="'Miscellaneous'" />

    <SectionStocks :sector="'Technology Services'" />
</template>

<style scoped>
  h1{
    margin: 50px 0 0 0 !important;
    text-align: center;
  }
</style>