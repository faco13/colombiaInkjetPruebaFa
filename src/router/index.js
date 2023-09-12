    import { createRouter,createWebHashHistory } from "vue-router";
    import login from '../components/login.vue'
    import hello from '../components/HelloWorld.vue'


    const routes=[
            {
                path: '/login',
                name: 'login',
                component:  login

            },
            {
                path: '/',
                name: 'hello',
                component:  hello

            }
        ]

    const router = createRouter({
            history: createWebHashHistory(),routes
        });
    export default router;