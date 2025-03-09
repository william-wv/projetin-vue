<script setup>
defineProps({
  name: String,
  stock: String,
  logo: String,
  sector: String,
  market_cap: Number,
});

function formatarMarketCap(valor) {
  if (valor >= 1_000_000_000) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 3
    }).format(valor / 1_000_000_000) + ' Bi'; 
  } else if (valor >= 1_000_000) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(valor / 1_000_000) + ' Mi'; 
  } else if (valor >= 1_000) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(valor / 1_000) + ' K'; 
  } else {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(valor); 
  }


  
}
</script>

<template>
  <div class="card cardStocks">
    
    <div class="img__stocks"> 
      <img :src="logo" :alt="`Logo da ação de ${name} (${stock})`" width="50px">
    </div>
    <div class="div-ul">
      <ul>
        <li>Nome: {{ name }}</li>
        <li>Moeda: {{ stock }}</li>
        <li> Setor:
          <span :class="{
            green: sector === 'Finance',
            blue: sector === 'Retail Trade',
            yellow: sector === 'Energy Minerals'
          }">{{ sector }}</span> 
        </li>
        <li>Valor de mercado: <br> {{ formatarMarketCap(market_cap)  }}</li>
      </ul>
      <img class="fav" src="./icons/copas.png" alt="">
    </div>
  </div>
</template>

<style scoped>



  .fav {
    padding: 3px !important;
    border-radius: 50% !important;
    position: absolute;
    top: 90%;
    right: 10px;
    width: 20px !important;
    cursor: pointer;
  }

.cardStocks{
    box-shadow: 5px 3px 4px 2px rgba(0, 0, 0, 0.4);
    border: none;
    margin: 10px !important;
    background-color: var(--Gray-300);
    border-radius: 20px 20px 10px 10px;
    max-width: 250px;
  
  & img{
    width: 100%;
    border-radius: 20px 20px 0 0;
  }

  & ul{
    font-size: 0.8rem !important;
    list-style-type: none;
    padding: 10px 10px !important;
  }

  & li{
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis; 
  }
}

@media (max-width: 350px) {
  .cardStocks {
    margin: 0px !important;
  }
}
</style>
