/* Este arquivo "javascript" configura o VUEJS */

import {
  createApp
} from 'vue'
import App from './App.vue'

import {
  router,
} from 'vue-router'

const Vue = createApp(App)

Vue.use(router) //Adicionando as configurações 
//de rotas a instância do Vue
Vue.mount('#app')