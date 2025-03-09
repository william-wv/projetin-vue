import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favoritos: [], 
  }),
  actions: {
    addFavorito(item) {
      if (!this.favoritos.some(fav => fav.stock === item.stock)) {
        this.favoritos.push(item);
        console.log("Adicionado favorito:", item);
      }
    },
    removeFavorito(stock) {
      this.favoritos = this.favoritos.filter(fav => fav.stock !== stock);
      console.log("Removido favorito:", stock);
    },
    isFavorito(stock) {
      return this.favoritos.some(fav => fav.stock === stock);
    },
    toggleFavorito(item) {
      this.isFavorito(item.stock) 
        ? this.removeFavorito(item.stock) 
        : this.addFavorito(item);
    }
  },
  persist: true,
});
