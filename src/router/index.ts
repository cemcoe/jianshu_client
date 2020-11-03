import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import home from './home'
import main from './main'

const routes: Array<RouteRecordRaw> = [
  home,
  ...main,
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
