import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.js';



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


