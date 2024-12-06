import { RouteRecordRaw } from 'vue-router';

const userRoutes: RouteRecordRaw[] = [
    {
        path: '/users',
        name: 'UserList',
        component: () => import('@/views/User/UserList.vue'),
        children: [
            {
                path: ':id',  // 子路由路径，带参数
                name: 'UserDetail',
                component: () => import('@/views/User/UserDetail.vue'),
            },
        ],
    },
    // {
    //     path: '/users/:id',
    //     name: 'UserDetail',
    //     component: () => import('@/views/User/UserDetail.vue'),
    //     props: true, // 路由参数作为 props 传入
    // },
];

export default userRoutes;