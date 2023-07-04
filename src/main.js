import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/dist/jquery.min.js';
import '@popperjs/core/dist/umd/popper.min.js';

import 'datatables.net-bs5/js/dataTables.bootstrap5';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'datatables.net-bs5/css/dataTables.bootstrap5.css';

import 'jquery-easing';
import 'apexcharts';
import 'chart.js';
import 'echarts';

import { createRouter, createWebHistory } from 'vue-router';
import  HomePage from './views/HomePage';
import  LoginPage from './views/authentification/LoginPage';
import  RegisterPage from './views/authentification/RegisterPage';


const app = createApp(App);

const routes = [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/connexion',
      component: LoginPage,
    },
    {
      path: '/inscription',
      component: RegisterPage,
    },
  ];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.mount("#app");


