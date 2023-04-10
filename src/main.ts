import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router"
import { createPinia } from "pinia"

import Home  from "./pages/Home.vue"
import Cars  from "./pages/Cars.vue"

import './index.css'
import App from './App.vue'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/cars', component: Cars },
  ]
})

const pinia = createPinia()

app.use(pinia)
app.use(router)
app.mount('#app')