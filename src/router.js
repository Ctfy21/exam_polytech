import { createRouter, createWebHashHistory } from 'vue-router';
import main from './components/Main-page.vue'
import weatherCity from './components/Weather-page.vue'
import jsonPage from './components/json-page.vue'
export default createRouter({
    history: createWebHashHistory(),
    routes: [ 
        {path: '/', component: main},
        {path: '/weather', component: weatherCity},
        {path: '/json', component: jsonPage},
    ]
})