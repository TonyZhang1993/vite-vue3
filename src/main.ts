import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// pinia store
import pinia from '@/stores'

const app = createApp(App)

app.use(pinia).mount('#app')
