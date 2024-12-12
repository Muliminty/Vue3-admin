import { RouteRecordRaw } from 'vue-router';
import { DataAnalysis } from '@element-plus/icons-vue'; // 导入图标
const dashboardRoutes: RouteRecordRaw[] = [
    {
        path: '/dashboard',
        // name: 'Dashboard',
        component: () => import('@/views/Dashboard/Dashboard.vue'),
        props: { icon: DataAnalysis },  // 将图标作为组件传递
        meta: { requiresAuth: true }, // 路由元信息
    },
];

export default dashboardRoutes;