import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/Landing.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Dashboard from '../views/Dashboard.vue'
import Tickets from '../views/Tickets.vue'

const routes = [
  { path: '/', component: Landing },
  { path: '/auth/login', component: Login },
  { path: '/auth/signup', component: Signup },
  { path: '/dashboard', component: Dashboard, meta:{requiresAuth:true} },
  { path: '/tickets', component: Tickets, meta:{requiresAuth:true} },
]

const router = createRouter({ history:createWebHistory(), routes })

router.beforeEach((to, from, next) => {
  const session = localStorage.getItem('ticketapp_session')
  if (to.meta.requiresAuth && !session) {
    return next('/auth/login')
  }
  next()
})

export default router
