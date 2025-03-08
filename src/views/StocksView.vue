<script setup lang="ts">
import SectionStocks from '@/components/SectionStocks.vue';

defineProps({
  sector: String,
})
</script>

<template>
  <div>
    <h1>Stocks available</h1>

    <!-- Primeira instância de SectionStocks com setor 'Finance' -->
    <SectionStocks :sector="'Finance'" />

    <!-- Segunda instância de SectionStocks com setor 'Retail Trade' -->
    <SectionStocks :sector="'Retail Trade'" />
  </div>
</template>
