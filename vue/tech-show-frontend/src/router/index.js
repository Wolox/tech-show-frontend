import Vue from 'vue'
import VueRouter from 'vue-router'
import BookList from '../views/BookList.vue'
import Login from '../components/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/books',
    component: BookList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
