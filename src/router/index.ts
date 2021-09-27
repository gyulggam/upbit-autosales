import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import App from '../App.vue'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'App',
        component: App
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
