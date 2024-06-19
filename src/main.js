import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/tailwind.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import axios from 'axios';
import VueAxios from 'vue-axios';

// import DayspanVuetify from 'dayspan-vuetify';
// import 'material-design-icons-iconfont/dist/material-design-icons.css'
// import 'dayspan-vuetify/dist/lib/dayspan-vuetify.min.css';

const Spinner = defineAsyncComponent(() => import('@/components/UI/BaseLoading.vue'));

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash, faUser } from '@fortawesome/free-regular-svg-icons';

import {faCircleNotch, faExclamationCircle, faBriefcase,faArrowRightFromBracket, faEnvelope, faBell, faMagnifyingGlass, faFolder,faDownload, faSpinner} from '@fortawesome/free-solid-svg-icons'

axios.defaults.baseURL = process.env.BASEURL

library.add(
  // regular
  faEye, faEyeSlash, faUser, 

  // solid
  faCircleNotch, faExclamationCircle, faBriefcase,faArrowRightFromBracket, faEnvelope, faBell, faMagnifyingGlass, faFolder, faDownload, faSpinner
);


const app= createApp(App);

app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(VueAxios, axios);
//app.use(DayspanVuetify)

app.component('fa-icon', FontAwesomeIcon)
app.component('spinner', Spinner)

app.mount('#app')