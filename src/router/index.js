import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Comparison from '@/views/Comparison.vue'

const routes = [
    {
        path: '/',
        name: "Home",
        component: Home,
    },
    {
        path: '/Comparison',
        name: "Comparison",
        component: Comparison,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router