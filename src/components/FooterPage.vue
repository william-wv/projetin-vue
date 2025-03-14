<script setup>
import SectionFooter from './SectionFooter.vue';

const props = defineProps({
  h1T: String,
  li_1: String,
  li_2: String,
  li_3: String,
  li_4: String,
})

</script>

<template>
  <div class="contain">
    <img src="./icons/logo.png" alt="">
    <div class="container-footer d-flex">
      <div class="section_produtos">
        <SectionFooter :h1T="'Nossos Produtos'" :li_1="'Todos os investimentos'" :li_2="'Renda fixa'" :li_3="'Ações'"
          :li_4="'Fundos Investimentos'" />
      </div>
      <div class="section_duvidas">
        <SectionFooter :h1T="'Tire suas duvidas'" :li_1="'Portabilidade de investimentos'" :li_2="'Ouvidoria'"
          :li_3="'Central de atendimento'" :li_4="'Transparencia de recursos'" />
      </div>
      <div class="section_conosco">
        <SectionFooter :h1T="'Fale conosco'" :li_1="'Telefones'" :li_2="'Autoatendimento via WhatsApp'"
          :li_3="'SAC - Dúvidas, reclamações e orientações'" :li_4="'Ouvidoria (Segunda a sexta das 9hs às 18hs)'" />
      </div>
    </div>
  </div>
</template>
<style scoped>

img{
  padding: 30px 0 0 30px!important;
}

.container-footer {
  background-color: #1f1f1f;
  justify-content: space-around;
}

.contain{
  margin-top: 110px !important;
  background-color: #1f1f1f;
}
</style>