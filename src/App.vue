<script setup>
  import {  RouterView } from 'vue-router'
  import HeaderPage from './components/HeaderPage.vue'
import Footerpage from './components/FooterPage.vue';
</script>

<template>
  <header>
    <HeaderPage/>
  </header>

  <RouterView />

  <footer>
    <Footerpage/>
  </footer>
</template>

<style scoped>

</style>
