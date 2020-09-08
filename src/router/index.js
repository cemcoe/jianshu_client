import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/Home/Home')
const Login = () => import('../views/Login/Login')
const Profile = () => import('../views/Profile/Profile')
const Write = () => import('../views/Write/Write')
const Post = () => import('../views/Post/Post')

Vue.use(VueRouter)

  
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/u/:id',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/write',
    name: 'Write',
    component: Write
  },
  {
    path: '/p/:id',
    name: 'Post',
    component: Post
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    redirect: '/home'
  },
]

const router = new VueRouter({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes
})

export default router
