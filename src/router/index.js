import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Food from '../components/Food'
import Gerichte from '../components/Gerichte.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/food',
    name: 'Food',
    component: Food
  },
  {
    path: '/gerichte',
    name: 'Gerichte',
    component: Gerichte
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
