    import { createRouter,createWebHashHistory } from "vue-router";
    import App from '../App.vue'
    import login from '../components/login.vue'

    const routes=[
            {
                path: '/app',
                name: 'App',
                component:  App
            },
            {
                path: '/login',
                name: 'login',
                component:  login
            }
        ]

    const router = createRouter({
            history: createWebHashHistory(),routes
        });
    export default router;