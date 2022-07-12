import { createApp } from 'vue'
import App from './App.vue'

import './assets/css/style.scss'
import './assets/css/color.scss'
import '@splidejs/vue-splide/css';

import VueSplide from '@splidejs/vue-splide';

const app = createApp(App)
app.use(VueSplide)
app.mount('#app')
