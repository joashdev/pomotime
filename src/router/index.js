import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import Settings from '/src/components/Settings.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/settings',
        name: 'Settings',
        component: Settings,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
