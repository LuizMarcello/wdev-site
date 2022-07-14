/* Este arquivo javascript gerenciará todas
   as rotas do projeto - VueRouter*/
import Vue from 'vue';
import VueRouter from 'vue-router';

/* Para o Vue entender as dependências e 
   ter o VueRouter como dependência */
Vue.useAttrs(VueRouter);

import Home from '@/pages/Home';

/* Aqui serão guardadas todas as rotas */
/* Um array, onde cada posição será um
   objeto(uma rota) */
const routes = [{
  path: '/',
  name: 'home',
  component: Home
}];

/* Uma instância do VueRouter */
const router = new VueRouter({
  routes,
  mode: 'history'
});

/* Exportando o VueRouter para ser
   usado no projeto VueJs */
export default router;