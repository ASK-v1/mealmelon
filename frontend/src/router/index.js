import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Calorie from '../views/Calorie.vue'
import Meal from '../views/Meal.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/calorie',
    name: 'Calorie',
    component: Calorie
  },
  {
    path: '/meal',
    name: 'Meal',
    component: Meal
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
