import { RouteRecordRaw } from 'vue-router';

const userRoutes: RouteRecordRaw[] = [
    {
        path: '/users',
        name: 'UserList',
        component: () => import('@/views/User/UserList.vue'),
        props: true, // 路由参数作为 props 传入
    },
    {
        path: '/users/:id',
        name: 'UserDetail',
        component: () => import('@/views/User/UserDetail.vue'),
        props: {
            hiddenMenu: true,
        }, // 路由参数作为 props 传入
    },
    {
        path: '/test',  // 修改这里，确保 path 以斜杠开头
        name: 'test',
        children: [
            {
                path: '/test1',  // 子路由路径无需以斜杠开头
                name: 'test1',
                component: () => import('@/components/HelloWorld.vue'),
            },
        ]
    }
];

export default userRoutes;
