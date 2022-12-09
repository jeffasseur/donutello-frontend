import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from './../views/Login.vue'
import Dashboard from './../views/Dashboard.vue'
import ChangePassword from '../views/ChangePassword.vue'
import Donut from '../views/DonutDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/login/change-password',
    name: 'ChangePassword',
    component: ChangePassword
  },
  {
    path: '/dashboard/donut/id/:id',
    name: 'Donut',
    component: Donut
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router