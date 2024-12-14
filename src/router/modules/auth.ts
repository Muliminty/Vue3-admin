import { RouteRecordRaw } from 'vue-router';

const authRoutes: RouteRecordRaw[] = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Auth/Login.vue'),
        meta: { layout: 'empty' }, // 设置为 'empty' 布局
        props: {
            hiddenMenu: true,
        },
    },
];
export default authRoutes;