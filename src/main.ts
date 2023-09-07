import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
//import VDataTable from 'vuetify/labs/components'
import * as labComponents from 'vuetify/labs/components'
import { createVuetify } from 'vuetify'

//export default createVuetify()

const vuetify = createVuetify({
    components: {...components, ...labComponents},
    directives
})

const app = createApp(App).use(vuetify)
// const app = createApp({
//     data(){
//         return{
//             company: 'evolv Consulting LLC',
//             showEmployees: true,
//             employees: [
//                 {first_name: "John", last_name: "Doe", title: "asdf"},
//                 {first_name: "Jane", last_name: "Doe", title: "asdf"},
//                 {first_name: "Brandon", last_name: "Guyton", title: "bsdf"}
//             ]
//         }
//     }
// })

app.use(router)

app.mount('#app')
