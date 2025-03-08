import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StockView from '../views/StocksView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL)
  ,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/stocks',
      name: 'character',
      component: StockView,
    },
  ],
})

export default router
