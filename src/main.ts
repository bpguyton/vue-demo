import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labComponents from 'vuetify/labs/components'
import { createVuetify } from 'vuetify'

const vuetify = createVuetify({
    components: {...components, ...labComponents},
    directives
})

const app = createApp(App).use(vuetify)

app.use(router)

app.mount('#app')
