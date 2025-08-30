import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Router importieren

import './assets/style.css' // globale Styles

const app = createApp(App)
app.use(router) // Router verwenden
app.mount('#app')
