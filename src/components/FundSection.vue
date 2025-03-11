<script setup>
import { ref, computed, onMounted, watchEffect, defineProps } from 'vue';
import { getFund } from '@/services/httpService';
import CardStocks from "../components/CardStocks.vue";

const acoes = ref([]);
const paginaAtual = ref(1);
const itensPorPagina = ref(5);

const totalPaginas = computed(() => Math.ceil(filtroActions.value.length / itensPorPagina.value));

// Propriedades definidas para receber dados do componente pai
const props = defineProps({
  name: String,
  stock: String,
  logo: String,
  sector: String,
  market_cap: Number,
})

async function getAllStocks() {
  try {
    const result = await getFund();
    acoes.value = result.filter(stock =>
      stock.sector === 'Finance' || 
      stock.sector === 'Miscellaneous'
    );
  } catch (error) {
    console.error('Erro ao buscar ações:', error);
  }
}

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

// Computed para filtrar as ações com base no setor
const filtroActions = computed(() => {
  if (props.sector === "Miscellaneous") {
    return acoes.value.filter(stock => stock.sector === 'Miscellaneous');
  } else if (props.sector === "Finance") {
    return acoes.value.filter(stock => stock.sector === 'Finance');
  }  else {
    return acoes.value;
  }
});

// Computed para obter as ações da página atual
const acoesPaginadas = computed(() => {
  const inicio = (paginaAtual.value - 1) * itensPorPagina.value;
  return filtroActions.value.slice(inicio, inicio + itensPorPagina.value);
});

watchEffect(() => {
  ajustarItensPorPagina();
});

// Função para mudar de página
function mudarPagina(novaPagina) {
  if (novaPagina >= 1 && novaPagina <= totalPaginas.value) {
    paginaAtual.value = novaPagina;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// Chamada inicial para carregar as ações
onMounted(() => {
  getAllStocks();
  window.addEventListener('resize', ajustarItensPorPagina);
});
</script>



<template>
  <main>
    <div class="container">
      <div>
        <h1>
          <span :class="{
            green: sector === 'Finance',
            blue: sector === 'Miscellaneous',
            yellow: sector === 'Energy Minerals'
          }">
            {{ sector }}
          </span>
        </h1>
        <div>

          <div class="container-card__stocks">
            <CardStocks 

            v-for="acao in acoesPaginadas" :key="acao.stock" :name="acao.name" :stock="acao.stock"
              :logo="acao.logo" :sector="acao.sector" :market_cap="acao.market_cap" />
          </div>
        </div>
      </div>

      <div class="paginacao">
        
        <button class="btn-green" @click="mudarPagina(paginaAtual - 1)" :disabled="paginaAtual === 1">anterior</button>
        <span class="paginas">Página {{ paginaAtual }} de {{ totalPaginas }}</span>
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

@media (max-width:350px) {
  main{
    padding: 20px !important;
  }
  .paginas {
    font-size: 0.7rem !important;
  }
  .paginacao{
    padding: 10px  0 10px 0!important;
  }
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
