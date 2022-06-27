import {
    createRouter,
    createWebHashHistory
} from "vue-router";
import Home from '../views/home/Home.vue';

const routes = [{
        path: '/', //路径
        redirect: '/home' //重定向  如果访问/结尾，就重定向到/home页面去
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/userCenter/login',
        name: 'login',
        component: () =>
            import ( /* webpackChunkName: "login" */ '../views/userCenter/login/Login.vue'),
    },
    {
        path: '/act',
        name: 'activitydetail',
        component: () =>
            import ( /* webpackChunkName: "activitydetail" */ '../views/act/ActivityDetail.vue'),
    },
]
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

export default router;