<script setup>
import { ref, computed, onMounted, defineProps ,watchEffect} from 'vue';
import { getAll, sortOrder } from '@/services/httpService';
import CardStocks from "../components/CardStocks.vue";

const order = ref([]);  // Lista ordenada de ações
const acoes = ref([]);   // Lista de todas as ações
const paginaAtual = ref(1);
const itensPorPagina = ref(5);

const totalPaginas = computed(() => Math.ceil(filtroActions.value.length / itensPorPagina.value));

const props = defineProps({
  name: String,
  stock: String,
  logo: String,
  sector: String,
  type: String,
});

// Função para ordenar as ações
async function acoesCrescente() {
  try {
    // Obtemos as ações ordenadas em ordem crescente
    const orderedStocks = await sortOrder('asc');
    // Atualizamos a lista 'order' com as ações ordenadas
    acoes.value = orderedStocks;
    console.log(acoes.value);  // Verifique o que está sendo retornado
  } catch (error) {
    console.error('Erro ao ordenar ações:', error);
  }
}

onMounted(() => {
  getAllStocks();  // Carrega as ações ao montar
  window.addEventListener('resize', ajustarItensPorPagina);
});

async function getAllStocks() {
  try {
    const result = await getAll();
    acoes.value = result.filter(stock =>
      stock.sector === 'Finance' ||
      stock.sector === 'Retail Trade' ||
      stock.sector === 'Energy Minerals'
    );
    acoesCrescente();  // Ordena as ações após o carregamento
  } catch (error) {
    console.error('Erro ao buscar ações:', error);
  }
}

function ajustarItensPorPagina() {
  const largura = window.innerWidth;

  if (largura <= 500) {
    itensPorPagina.value = 2;
  } else if (largura <= 768) {
    itensPorPagina.value = 3;
  } else if (largura <= 1024) {
    itensPorPagina.value = 4;
  } else {
    itensPorPagina.value = 4;
  }
}

// Computed para filtrar as ações com base no setor
const filtroActions = computed(() => {
  if (props.sector === "Retail Trade") {
    return acoes.value.filter(stock => stock.sector === 'Retail Trade');
  } else if (props.sector === "Finance") {
    return acoes.value.filter(stock => stock.sector === 'Finance');
  } else if (props.sector === "Energy Minerals") {
    return acoes.value.filter(stock => stock.sector === 'Energy Minerals');
  } else {
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
  }
}
</script>

<template>
  <div class="main">
    <div class="container-card__stocks">
      <CardStocks v-for="acao in acoesPaginadas" :key="acao.stock" :name="acao.name" :stock="acao.stock" :logo="acao.logo"
        :sector="acao.sector" :market_cap="acao.market_cap" :type="acao.type"
        :volume="acao.volume" />
    </div>

    <div class="paginacao">
      <button class="btn-green" @click="mudarPagina(paginaAtual - 1)" :disabled="paginaAtual === 1">anterior</button>
      <span class="paginas">Página {{ paginaAtual }} de {{ totalPaginas }}</span>
      <button class="btn-green" @click="mudarPagina(paginaAtual + 1)"
        :disabled="paginaAtual === totalPaginas">próximo</button>
    </div>
  </div>
</template>

<style scoped>
.main {
  padding: 0 100px !important;
}

.container-card__stocks {
  display: grid;
  grid-template-columns: repeat(4, 2fr);
}

.paginacao {
  display: flex;
  justify-content: center;
  margin-top: 20px !important;
}

.paginas {
  padding: 0 10px !important;
  display: flex;
  align-items: center;
}

@media (max-width: 450px) {
  .container-card__stocks {
    grid-template-columns: repeat(2, 1fr);
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
