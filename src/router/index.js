import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/:id?',
        name: 'Home',
        component: () => import('../view/home')
    },

    {
        path: '/maps',
        name: 'Maps',
        component: () => import('../view/maps')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router