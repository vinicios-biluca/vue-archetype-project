import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes as appRoutes } from '../views'

Vue.use(VueRouter)

const routes = [
  {
    name: 'app',
    path: '/',
    redirect: 'home',
    meta: {
      requiresAuth: false
    }
  },
  ...appRoutes,
  // {
  //   path: '*',
  //   redirect: '/errors/404'
  // },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
