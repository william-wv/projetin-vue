import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import StockView from '../views/StocksView.vue'
import FavoriteView from '../views/FavoriteView.vue'
import FundView from '@/views/FundView.vue'
import BrdView from '@/views/BrdView.vue'
import AscView from '@/views/AscView.vue'


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
    {
      path:'/fund',
      name: 'fundos',
      component: FundView,
    },
    {
      path: '/brd',
      name: 'brd',
      component: BrdView,
    },{
      path: '/asc',
      name: 'crescente',
      component: AscView,
    }
    // {
    //   path: '/:notFound(.*)',
    //   name: 'notFound',
    //   component: () => import('../views/NotFoundView.vue')
    // }
  ],
})

export default router
