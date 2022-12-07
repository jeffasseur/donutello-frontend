import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from './../views/Login.vue'
import Dashboard from './../views/Dashboard.vue'
import ForgotPassword from './../views/ForgotPassword.vue'

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
    path: '/login/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router