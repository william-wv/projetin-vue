<script setup>

const props = defineProps({
  styler: String,
  image: String,
  desc: String,
  title: String,
  paragraph: String,
})

</script>

<template>
  <main>
    <div class="container" :style="styler">
      <div class=" div-img">
        <img :src=image :alt=desc>
      </div>
      <div class="texts">
        <h2>{{ title }}</h2>
        <p>{{ paragraph }}</p>
      </div>

    </div>
  </main>
</template>

<style scoped>

img {
  border-radius: 80px;
}

p {
  padding-top: 10px !important;
  font-size: 1.1rem;
}

.div-img {
  display: flex;
  align-items: center;
  justify-content: center;
}

.texts {
  margin-top: 30px !important;
  line-height: 1.3;
}


@media (min-width: 768px) {
  .container {
    display: flex;
    align-items: center;

    & .texts {
      margin: 0 15px !important;
    }

  
    
  }

}

@media (min-width: 1200px) {
  h2{
    font-size: 3rem !important;
  }

  p{
    font-size: 1.6rem !important;
  }

  .texts {
      margin-left: 100px !important;
    }

}
</style>