/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

import '@/assets/css/style.css'
import '@/assets/css/admin.css'
import '@/assets/css/cabinet.css'
import '@/assets/css/cart.css'
import '@/assets/css/catalog.css'
import '@/assets/css/category-page.css'
import '@/assets/css/empty-cart.css'
import '@/assets/css/info.css'
import '@/assets/css/product-content.css'
import '@/assets/css/thanks.css'

// Plugins
import { registerPlugins } from '@/plugins'

import vClickOutside from 'v-click-outside'

import vSelect from "vue-select"
import 'vue-select/dist/vue-select.css'

const app = createApp(App)

registerPlugins(app)

app.use(vClickOutside)
app.component("vv-select", vSelect)
app.mount('#app')
