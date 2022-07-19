import { createApp } from 'vue'
import App from './App.vue'

import './assets/css/style.scss'
import './assets/css/theme1.scss'
import '@splidejs/vue-splide/css';
import 'flag-icons'

import VueSplide from '@splidejs/vue-splide';
import router from './router'
import VueWriter from "vue-writer";


const app = createApp(App)
app.use(VueSplide)
app.use(router)
app.use(VueWriter)
app.mount('#app')
