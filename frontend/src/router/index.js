import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  // retira o # que vem como padrão na url da aplicação
  mode: 'history'
})

export default router
