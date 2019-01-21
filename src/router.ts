import Vue from 'vue';
import Router from 'vue-router';
// pages
import Home from './views/Home.vue';
import Dashboard from './views/Dashboard.vue';
// components
import Login from './components/Auth/Login.vue';
import Register from './components/Auth/Register.vue';
import PR from './components/documents/PR.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Home,
      props: { action: 'register' },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      props: { action: '' },
    },
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: 'pr',
      name: 'pr',
      component: PR,
    },
  ],
});
