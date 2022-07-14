/* Da mesma maneira que o arquivo javascript "main.js" configura
   o VUEJS, este arquivo javascript configura o "axios" para a API */
   import axios from 'axios';

   /* Criando uma instância do axios, já com
      um endpoint da API(url base), do front */
   const api = axios.create({
    baseURL: 'https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/api'
   });

   /* Exportando o axios para usar no projeto */
  export default api;