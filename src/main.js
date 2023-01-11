import { createApp } from 'vue'
import router from './router'
import vuex from './vuex'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

createApp(App)
.use(router)
.use(vuex)
.mount('#app')
