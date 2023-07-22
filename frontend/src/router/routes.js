//import Dashboard from '@/views/Dashboard.vue';
import ControleDeProdutos from "@/views/ControleDeProdutos";
import ControleDeClientes from "@/views/ControleDeClientes";
import Login from "@/views/Login";
import Produto from "@/views/Produto";

const routes = [
    {
      path: '/',
      name: 'Login',
      component: Login,
      title: 'Login',
      // objeto que pode receber vários parâmetros
      meta: {
          requiredAuth: false
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      title: 'Login',
      // objeto que pode receber vários parâmetros
      meta: {
        requiredAuth: false
      }
    },
    {
      path: '/controle-de-produtos',
      name: 'ControleDeProdutos',
      component: ControleDeProdutos,
      title: 'Produtos',
      meta: {
        requiredAuth: true
      }
    },
    {
      path: '/controle-de-produtos/novo',
      name: 'NovoProduto',
      component: Produto,
      title: 'Adicionar Produto',
      meta: {
        requiredAuth: true
      }
    },
    {
      path: '/controle-de-produtos/editar',
      name: 'EditarProduto',
      component: Produto,
      title: 'Editar Produto',
      meta: {
        requiredAuth: true
      }
    },
    {
      path: '/controle-de-clientes',
      name: 'ControleDeClientes',
      component: ControleDeClientes,
      title: 'Clientes',
      meta: {
        requiredAuth: true
      }
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
    // }
];

export default routes;