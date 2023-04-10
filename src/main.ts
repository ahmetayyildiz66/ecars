import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router"

import Home  from "./pages/Home.vue"

import './index.css'
import App from './App.vue'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/', component: Home
    }
  ]
})

app.use(router)
app.mount('#app')