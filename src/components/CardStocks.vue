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
      <img :src="logo" :alt="name" width="50px">
    </div>
    <div class="div-ul">
      <ul>
        <li>{{ name }}</li>
        <li>{{ stock }}</li>
        <li>
          <span :class="{
            green: sector === 'Finance'
          }">{{ sector }}</span> 
        </li>
        <li>{{ formatarMarketCap(market_cap)  }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

.cardStocks{
    box-shadow: 5px 3px 4px 2px rgba(0, 0, 0, 0.2);
    border: none;
    margin: 10px !important;
    background-color: var(--Gray-300);
    border-radius: 20px 20px 10px 10px;
  
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


</style>
