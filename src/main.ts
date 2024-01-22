import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import vant from 'vant';
import { Icon } from 'vant';
import 'vant/lib/index.css';

import router from './router'

createApp(App).use(vant).use(Icon).use(router).mount('#app')
