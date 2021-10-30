import Home from './components/Home.vue'
import Sign from './components/Sign.vue'
import {createRouter,createWebHistory} from 'vue-router'
import Login from './components/Login.vue'

const routes=[
    {
        name:"Home",
        component:Home,
        path:"/",
    },
    {
        name:"Sign",
        component:Sign,
        path:"/sign",
    },
    {
        name:"Login",
        component:Login,
        path:"/login",
    }
];

const router = createRouter({
    history:createWebHistory(),routes
});

export default router;