<script setup>

const props = defineProps({
  name: String,
  stock: String,
  logo: String,
  sector: String,
  market_cap: Number,
  type: String,
  volume: Number,
});

function formatarMarketCap(valor) {
  if (valor >= 1000000000) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(valor / 1000000000) + ' Bi';
  } else if (valor >= 1000000) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(valor / 1000000) + ' Mi';
  } else if (valor >= 1000) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(valor / 1000) + ' K';
  } else {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(valor);
  }
}

import { useFavoritesStore } from '@/stores/favorites';
const favoritesStore = useFavoritesStore();

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
        <li>Type: {{ type }}</li>
        <li> Setor:
          <span :class="{
            green: sector === 'Finance',
            blue: sector === 'Retail Trade' || sector === 'Miscellaneous',
            yellow: sector === 'Energy Minerals',
          }">{{ sector }}</span>
        </li>
        <li>Valor de mercado: <br> {{ formatarMarketCap(market_cap) }}</li>
        <li>Volume: {{ volume }}</li>
      </ul>
      <div class="button-rmv">
        <button @click="favoritesStore.toggleFavorito({ name, stock, logo, sector, market_cap })" class="fav-btn">
          {{ favoritesStore.isFavorito(stock) ? 'Favoritado' : 'Favoritar' }}
        </button>
      </div>


    </div>
  </div>
</template>

<style scoped>
& button {
    margin-top: 10px;
    padding: 1px 1px !important;
    border-radius: 30px;
    background-color: transparent;
    color: black;
    border: none !important;;
    border-radius: 5px;
    cursor: pointer;
  }

  .button-rmv{
    width: 100%;
    display: flex;
    justify-content: flex-end; 
    padding-right: 10px !important;
  }

.fav {
  padding: 3px !important;
  border-radius: 50% !important;
  position: absolute;
  top: 90%;
  right: 10px;
  width: 20px !important;
  cursor: pointer;
}

.cardStocks {
  box-shadow: 5px 3px 4px 2px rgba(0, 0, 0, 0.4);
  border: none;
  margin: 10px !important;
  background-color: var(--Gray-300);
  border-radius: 20px 20px 10px 10px;
  max-width: 250px;

  & img {
    width: 100%;
    border-radius: 20px 20px 0 0;
  }

  & ul {
    font-size: 0.8rem !important;
    list-style-type: none;
    padding: 10px 10px !important;
  }

  & li {
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
