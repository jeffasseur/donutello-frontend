import { createApp } from 'vue'
import './style.css'
import './sass/app.scss'
import 'material-icons/iconfont/material-icons.css';
import App from './App.vue'

import router from './router'

createApp(App).use(router).mount('#app')
