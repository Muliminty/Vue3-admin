import { RouteRecordRaw } from 'vue-router';

const userRoutes: RouteRecordRaw[] = [
    {
        path: '/users',
        name: 'UserList',
        component: () => import('@/views/User/UserList.vue'),
    },
    // {
    //     path: '/users/:id',
    //     name: 'UserDetail',
    //     component: () => import('@/views/User/UserDetail.vue'),
    //     props: true, // 路由参数作为 props 传入
    // },
];

export default userRoutes;