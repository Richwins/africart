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
import  AboutPage from './views/AboutPage';
import  ResumePage from './views/ResumePage';
import  ServicesPage from './views/ServicesPage';
import  PortofolioPage from './views/PortofolioPage';
import  ContactPage from './views/ContactPage';
import  PortofolioDetailPage from './views/PortofolioDetailPage';

const app = createApp(App);

const routes = [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/A propos',
      component: AboutPage,
    },
    {
      path: '/Résumé',
      component: ResumePage,
    },
    {
      path: '/Services',
      component: ServicesPage,
    },
    {
      path: '/Portofolio',
      component: PortofolioPage,
    },
    {
      path: '/Contact',
      component: ContactPage,
    },
    {
      path: '/Portofolio Detail',
      component: PortofolioDetailPage,
    },

  ];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.mount("#app");


