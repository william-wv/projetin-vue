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
  <main class="contain">
  <div >
    <div class="img-margin">
    <img src="./icons/logo.png" alt="logo">
  </div>
    <div class="container-footer d-flex">
      <div class="section_produtos section">
        <SectionFooter :h1T="'Nossos Produtos'" :li_1="'Todos os investimentos'" :li_2="'Renda fixa'" :li_3="'Ações'"
          :li_4="'Fundos Investimentos'" />
      </div>
      <div class="section_duvidas section">
        <SectionFooter :h1T="'Tire suas duvidas'" :li_1="'Portabilidade de investimentos'" :li_2="'Ouvidoria'"
          :li_3="'Central de atendimento'" :li_4="'Transparencia de recursos'" />
      </div>
      <div class="section_conosco section">
        <SectionFooter :h1T="'Fale conosco'" :li_1="'Telefones'" :li_2="'Autoatendimento via WhatsApp'"
          :li_3="'SAC - Dúvidas, reclamações e orientações'" :li_4="'Ouvidoria (Segunda a sexta das 9hs às 18hs)'" />
      </div>
    </div>
  </div></main>
</template>
<style scoped>

.img-margin{
  margin: 30px 0 20px 0!important;
}


.contain{
  margin-top: 110px !important;
  background-color: #1f1f1f;
}

.section{
  border-right:1px solid rgb(148, 148, 148) !important;;
  opacity: 70% !important;
}

@media (max-width:450px){
.container-footer{
  display: block !important;
}

}

@media (min-width:451px){

.container-footer{
 gap: 20px !important;
}
}
</style>