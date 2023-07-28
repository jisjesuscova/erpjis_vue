// main.js
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import router from './router';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000'; // URL de la API

const app = createApp(App);
app.config.globalProperties.$axios = axios;

app.use(router);
app.mount('#app');
