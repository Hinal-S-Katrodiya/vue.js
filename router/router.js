import Vue from 'vue';
import Router from 'vue-router';
import Cookies from 'js-cookie';
Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/dashboard',
            path: '/user/edit/:userId',
            name: 'EditUser',
            component: () => import('@/pages/EditUser.vue'),
            beforeEnter: (to, from, next) => {
                const token = Cookies.get('userToken');
                if (!token) {
                    next('/login');
                } else {
                    next();
                }
            }
        },
    ]
});

export default router({
    router,
});
