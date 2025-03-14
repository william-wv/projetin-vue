<script setup>
import FavoriteComponent from '@/components/FavoriteComponent.vue';

</script>
<template>

  <main>
    <div>
      <div>
        <h1>Seus favoritos</h1>
      </div>
      <div>
        <FavoriteComponent/>
      </div>
    </div>
  </main>

</template>

<style scoped>
h1 {
  text-align: center;
  margin: 80px 0 10px 0 !important;
}
</style>