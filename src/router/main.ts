const Login = () => import('../views/Login/Login.vue')


export default [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      showFooter: false
    }
  },
]