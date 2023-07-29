import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  // retira o # que vem como padrão na url da aplicação
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token');

  if (to.name == 'Login'){
    (token) ? next({name: 'ControleDeProdutos'}) : next();
  } 
  else if (to.matched.some(rota => rota.meta.requiredAuth)) {
    if(token == null){
      next({
        path: '/login',
        params: { nextUrl: to.fullPath}
      })
    }
    else 
      next();
  }
  else {
    (token == null) ? next() : next({name: 'ControleDeProdutos'});
  }
})

export default router
