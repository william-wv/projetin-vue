<script setup>
import SectionHome from '@/components/SectionHome.vue';
import SectionStocks from '@/components/SectionStocks.vue';
</script>

<template>
  <SectionHome :image="'/company.jpg'" :desc="'foto da sede da empresa'"
    :title="'Life Balance - O equilibrio de suas financas'"
    :paragraph="'A Life Balance ajuda você a organizar suas finanças e investir com inteligência. Com ferramentas práticas, oferecemos insights para economizar, aumentar seu capital e alcançar estabilidade financeira. Simplifique sua vida e conquiste um futuro seguro!'" />


  <SectionHome :styler="'flex-direction: row-reverse;'" :image="'/cash.png'" :desc="'venha investir'"
    :title="'Life Balance - Venha Investir e Transforme Seu Futuro'"
    :paragraph="'Descubra as melhores estratégias para fazer seu dinheiro crescer com segurança. Na Life Balance, ajudamos você a investir com inteligência e alcançar a estabilidade financeira que sempre desejou!'" />
  <div class="actions">
    <h2> Veja algumas das ações que recomendamos</h2>
    <SectionStocks/>
  </div>
</template>

<style scoped>
.actions  h2{
  margin-top: 4rem;
  text-align: center;
}
</style>