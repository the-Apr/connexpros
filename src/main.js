import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/tailwind.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash} from '@fortawesome/free-regular-svg-icons';

import { faCircleNotch, faExclamationCircle } from '@fortawesome/fontawesome-free-solid'

library.add(faEye, faEyeSlash, faCircleNotch, faExclamationCircle);

const app= createApp(App);

app.use(store)
app.use(router)

app.component('fa-icon', FontAwesomeIcon)
app.use(ElementPlus)

app.mount('#app')