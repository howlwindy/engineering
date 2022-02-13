import { createApp } from 'vue'
import { router } from './router'
import { createPinia } from 'pinia'
import i18n from './locales/index'
import App from './App.vue'

import './index.scss'

createApp(App).use(router).use(createPinia()).use(i18n).mount('#app')
