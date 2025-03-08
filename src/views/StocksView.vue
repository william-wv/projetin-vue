<script setup>
import { ref, computed, onMounted, watchEffect } from 'vue';
import { getStocks } from '@/services/httpService';
import CardStocks from "../components/CardStocks.vue";

const acoes = ref([]);
const paginaAtual = ref(1);
const itensPorPagina = ref(6); // Começa com 6 itens
const totalPaginas = computed(() => Math.ceil(acoes.value.length / itensPorPagina.value));

async function getAllStocks() {
  try {
    const result = await getStocks();
    // Filtrando as ações de acordo com o setor antes de atribuir ao 'acoes'
    acoes.value = result.filter(stock =>
      stock.sector === 'Finance' ||
      stock.sector === 'Retail Trade' ||
      stock.sector === 'Utilities'
    );
  } catch (error) {
    console.error('Erro ao buscar ações:', error);
  }
}

// Ajusta a quantidade de itens por página com base no tamanho da tela
function ajustarItensPorPagina() {
  const largura = window.innerWidth;

  if (largura <= 500) {
    itensPorPagina.value = 4;
  } else if (largura <= 768) {
    itensPorPagina.value = 4;
  } else if (largura <= 1024) {
    itensPorPagina.value = 5;
  } else {
    itensPorPagina.value = 5;
  }
}

// Computed para exibir as ações paginadas corretamente
const acoesFiltradas = computed(() => {
  return acoes.value.filter(stock =>
    stock.sector === 'Finance' ||
    stock.sector === 'Retail Trade' ||
    stock.sector === 'Utilities'
  );
});

const acoesPaginadas = computed(() => {
  const inicio = (paginaAtual.value - 1) * itensPorPagina.value;
  return acoesFiltradas.value.slice(inicio, inicio + itensPorPagina.value);
});

// Observa mudanças no tamanho da tela e ajusta dinamicamente os itens por página
watchEffect(() => {
  ajustarItensPorPagina();
});

function mudarPagina(novaPagina) {
  if (novaPagina >= 1 && novaPagina <= totalPaginas.value) {
    paginaAtual.value = novaPagina;
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  }
}

onMounted(() => {
  getAllStocks();
  window.addEventListener('resize', ajustarItensPorPagina);
});

</script>
<template>
  <main>
    <div class="container">
      <h1>Stocks available</h1>
      <div>
        <h1><span class="green">Finances</span></h1>
        <div class="container-card__stocks">
          <CardStocks 
            v-for="acao in acoesPaginadas" 
            :key="acao.stock"
            :name="acao.name" 
            :stock="acao.stock" 
            :logo="acao.logo" 
            :sector="acao.sector"
            :market_cap="acao.market_cap" 
          />
        </div>
      </div>
      <!-- Controles de Paginação -->
      <div class="paginacao">
        <button class="btn-green" @click="mudarPagina(paginaAtual - 1)" :disabled="paginaAtual === 1">anterior</button>

        <span v-if="paginaAtual > 2" class="ellipsis">...</span>

        <button v-for="pagina in totalPaginas" :key="pagina" @click="mudarPagina(pagina)"
          :class="{ ativo: pagina === paginaAtual }"
          v-show="pagina === 1 || pagina === totalPaginas || (pagina >= paginaAtual - 1 && pagina <= paginaAtual + 1)">
          {{ pagina }}
        </button>

        <span v-if="paginaAtual < totalPaginas - 1" class="ellipsis">...</span>

        <button class="btn-green" @click="mudarPagina(paginaAtual + 1)"
          :disabled="paginaAtual === totalPaginas">proximo</button>
      </div>
    </div>
  </main>
</template>


<style scoped>
.container {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
}

h1 {
  text-align: center;
  font-size: 1.8rem;
}

.container-card__stocks {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 10px;
}

@media (min-width: 500px) {
  .container-card__stocks {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 700px) {
  .container-card__stocks {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 1020px) {
  .container-card__stocks {
    grid-template-columns: repeat(5, 1fr);
  }
}

@media (min-width: 1420px) {
  .container-card__stocks {
    grid-template-columns: repeat(5, 1fr);
    width: 100%;
  }
}

/* PAGINAÇÃO */
.paginacao {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 10px !important;

}

button {
  background-color: var(--Green-primary);
  border: none;
  color: white;
  padding: 1px 3px !important;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s ease;
}

button:hover {
  background-color: black;
}

button.ativo {
  background-color: white;
  color: var(--Green-primary);
  font-weight: bold;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.ellipsis {
  padding: 0 10px;
  font-size: 18px;
}
</style>
