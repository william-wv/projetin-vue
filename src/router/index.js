import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StockView from '../views/StocksView.vue'
import FavoriteView from '../views/FavoriteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL)
  ,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/stocks',
      name: 'character',
      component: StockView
    },
    {
      path: '/fav',
      name: 'favorites',
      component: FavoriteView
    },
  ],
})

export default router
