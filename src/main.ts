import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from "./routes/index.ts"

import { createPinia } from 'pinia' 

import vant from 'vant';
import 'vant/lib/index.css';

const pinia = createPinia()


createApp(App).use(router).use(pinia).use(vant).mount('#app')
