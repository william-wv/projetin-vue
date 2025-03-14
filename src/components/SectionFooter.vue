<script setup>

const props = defineProps({
  h1T: String,
  li_1: String,
  li_2: String,
  li_3: String,
  li_4: String,
})

</script>

<template>
  <div class="name-section">
    <h1>{{ h1T }}</h1>
    <ul>
      <li class="li-item">{{ li_1 }}</li>
      <li class="li-item">{{ li_2 }}</li>
      <li class="li-item">{{ li_3 }}</li>
      <li class="li-item">{{ li_4 }}</li>
    </ul>
  </div>
</template>

<style scoped>
  h1{
    color: var(--Gray-500);
    font-size: 1.4rem;
  }

  li{
    color: rgb(181, 181, 181) !important;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  li:hover{
    color: var(--Green-primary) !important;
  }
  .name-section{
    margin: 25px 0 !important;
    max-width: 300px;
    overflow-wrap: break-word;
    hyphens: auto;
  }
</style>