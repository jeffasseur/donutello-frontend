import { createRouter, createWebHistory } from 'vue-router'
import Home from './../views/Home.vue'
import Login from './../views/Login.vue'
import Dashboard from './../views/Dashboard.vue'
import ChangePassword from './../views/ChangePassword.vue'
import Donut from './../views/DonutDetail.vue'
import Loading from './../views/Loading.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/dashboard',
      component: Dashboard
    },
    {
      path: '/loading',
      component: Loading
    },
    {
      path: '/login/change-password',
      component: ChangePassword
    },
    {
      path: '/dashboard/donut/:id',
      component: Donut
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '/'
    }
  ]
});

export default router