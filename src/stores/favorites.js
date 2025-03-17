import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usefav = defineStore('favorites', () => {
  const favoritos = ref([]);

  const addFavorito = (item) => {
    if (!favoritos.value.some(fav => fav.stock === item.stock)) {
      favoritos.value.push(item);
      console.log("Adicionado favorito:", item);
    }
  };

  const removeFavorito = (stock) => {
    favoritos.value = favoritos.value.filter(fav => fav.stock !== stock);
    console.log("Removido favorito:", stock);
  };

  const isFavorito = (stock) => {
    return favoritos.value.some(fav => fav.stock === stock);
  };

  const toggleFavorito = (item) => {
    isFavorito(item.stock) 
      ? removeFavorito(item.stock) 
      : addFavorito(item);
  };

  return {
    favoritos,
    addFavorito,
    removeFavorito,
    isFavorito,
    toggleFavorito
  };
}, {
  persist: true,
});
