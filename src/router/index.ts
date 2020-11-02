import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import home from './home'

const routes: Array<RouteRecordRaw> = [
  home,
  {
    path: '/',
    redirect: '/home'
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
