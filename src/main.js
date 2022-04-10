import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'
import VueCollapsiblePanel from '@dafcoe/vue-collapsible-panel'

createApp(App).use(router).use(VueChartkick).use(VueCollapsiblePanel).mount('#app')
