import 'es6-promise/auto'
import axios from 'axios'
import './bootstrap'
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueAuth from '@websanova/vue-auth'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import Index from './Index'
import auth from './auth'
import router from './router'
import store from './store/index'
import {i18n} from "./plugins/i18n"
import FlagIcon from 'vue-flag-icon'
// Set Vue globally
window.Vue = Vue;

// Set Vue router
Vue.router = router
Vue.use(VueRouter)
Vue.use(FlagIcon)
Vue.use(Vuetify)

// Set Vue authentication
Vue.use(VueAxios, axios)
// axios.defaults.baseURL = `${process.env.MIX_APP_URL}/api`
axios.defaults.baseURL = `http://127.0.0.1:8000/api`
Vue.use(VueAuth, auth)

// Load Index
Vue.component('index', Index)

const app = new Vue({
  el: '#app',
  router,
  vuetify: new Vuetify(),
  store,
  i18n,
});
