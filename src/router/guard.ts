import { Router } from 'vue-router';

export default function setupGuards(router: Router) {
    router.beforeEach((to, from, next) => {
        const isAuthenticated = !!localStorage.getItem('token'); // 假设通过 token 判断登录状态
        if (to.meta.requiresAuth && !isAuthenticated) {
            next('/login'); // 未登录时跳转到登录页
            // next(); // 放行

        } else {
            next(); // 放行
        }
    });
}