import { RouteRecordRaw } from 'vue-router';

const dashboardRoutes: RouteRecordRaw[] = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard/Dashboard.vue'),
        meta: { requiresAuth: true }, // 路由元信息
    },
];

export default dashboardRoutes;