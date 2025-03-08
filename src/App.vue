<script setup>
  import {  RouterView } from 'vue-router'
  import HeaderPage from './components/HeaderPage.vue'
</script>

<template>
  <header>
    <HeaderPage/>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
