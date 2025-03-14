<script setup >
import SectionStocks from '@/components/SectionFund.vue';

defineProps({
  sector: String,
})
</script>

<template>
    <h1>Fundos disponiveis</h1>
  
    <SectionStocks :sector="'Finance'" />

    <SectionStocks :sector="'Miscellaneous'" />

</template>

<style scoped>
  h1{
    margin: 50px 0 0 0 !important;
    text-align: center;
  }
</style>