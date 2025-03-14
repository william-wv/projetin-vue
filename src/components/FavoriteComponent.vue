<script setup>
// import CardStocks from '@/components/CardStocks.vue';
import { useFavoritesStore } from '@/stores/favorites';
import { watch } from 'vue';

const favoritesStore = useFavoritesStore();

function formatarMarketCap(valor) {
  if (valor >= 1_000_000_000) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
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


watch(
  () => favoritesStore.favoritos,
  (newFavoritos) => {
    console.log("Favoritos atualizados:", newFavoritos);
  }
);



</script>

<template>
  <main>
    <div v-if="favoritesStore.favoritos.length === 0">
      <p>Nenhuma ação favoritada ainda!</p>
    </div>
    <div v-else>
      <ul class="container-card__stocks">
        <li v-for="acao in favoritesStore.favoritos" :key="acao.stock">
          <!-- Exibindo as informações da ação -->
          <div class="cardStocks">
            <img :src="acao.logo" :alt="`Logo da ação de ${acao.name} (${acao.stock})`" width="50px">
            <ul>
              <li>{{ acao.name }} ({{ acao.stock }})</li>
              <li>Setor: {{ acao.sector }}</li>
              <li>Type: {{ type }}</li>
              <li>Valor de Mercado: <br>  {{ formatarMarketCap(acao.market_cap) }}</li>
            </ul>
            <!-- Botão para remover -->
            <div class="button-rmv">
              <button @click="favoritesStore.toggleFavorito(acao)">Remover</button>
            </div>

          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped>

main{
  margin-bottom: 100px !important;
}
.container-card__stocks {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 10px;
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

  & button {
    margin-top: 10px;
    padding: 1px 1px !important;
    border-radius: 30px;
    background-color: transparent;
    color: black;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
  }

  .button-rmv{
    width: 100%;
    display: flex;
    justify-content: flex-end; 
    padding-right: 10px !important;
  }
}

@media (min-width: 320px) {
  .container-card__stocks {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (min-width: 420px) {
  .container-card__stocks {
    grid-template-columns: repeat(2, 1fr);
  }
  .cardStocks {
      margin: 0px !important;
    }
}

@media (min-width: 700px) {
  .container-card__stocks {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1020px) {
  .container-card__stocks {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 1420px) {
  .container-card__stocks {
    grid-template-columns: repeat(5, 1fr);
    width: 100%;
  }
}
</style>