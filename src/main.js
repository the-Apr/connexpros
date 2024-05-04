import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/tailwind.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const Spinner = defineAsyncComponent(() => import('@/components/UI/BaseLoading.vue'));

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash} from '@fortawesome/free-regular-svg-icons';

import { faCircleNotch, faExclamationCircle } from '@fortawesome/fontawesome-free-solid'

library.add(faEye, faEyeSlash, faCircleNotch, faExclamationCircle);

const app= createApp(App);

app.use(store)
app.use(router)
app.use(ElementPlus)

app.component('fa-icon', FontAwesomeIcon)
app.component('spinner', Spinner)

app.mount('#app')