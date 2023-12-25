import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// pinia persist
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate) //  实现本地存储插件

export default pinia
