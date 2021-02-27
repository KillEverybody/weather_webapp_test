import Vue from 'vue'
import VueRouter from 'vue-router'
import GlobalFeed from '@/views/GlobalFeed'

Vue.use(VueRouter)

const routes = [
    {
        path: '/:slug',
        name: 'Home',
        component: GlobalFeed
    },
    {
        path: '*',
        redirect: {name: 'Home'}
    }
]
const router = new VueRouter({
    // mode: 'history',
    // base: process.env.BASE_URL,
    routes
})

export default router
