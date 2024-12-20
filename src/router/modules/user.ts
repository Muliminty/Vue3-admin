import { RouteRecordRaw } from 'vue-router';
import { Edit, Link, User } from '@element-plus/icons-vue'; // 导入图标

const userRoutes: RouteRecordRaw[] = [
    {
        path: '/users',
        component: () => import('@/views/User/UserList.vue'),
        props: { icon: User },  // 将图标作为组件传递
        meta: { layout: 'default' }, // 设置为 'empty' 布局
    },
    {
        path: '/users/:id',
        component: () => import('@/views/User/UserDetail.vue'),
        props: {
            hiddenMenu: true,
            icon: Edit  // 将图标作为组件传递
        },
        meta: { layout: 'default' }, // 设置为 'empty' 布局

    },
    {
        path: '/test',
        props: {
            icon: Link,  // 将图标作为组件传递
        },
        meta: { layout: 'default' }, // 设置为 'empty' 布局
        children: [
            {
                path: '/test1',
                component: () => import('@/components/HelloWorld.vue'),
                props: {
                    icon: Edit,  // 将图标作为组件传递
                },
            },
            {
                path: '/test2',
                component: () => import('@/components/HelloWorld2.vue'),
                props: {
                    icon: Edit,  // 将图标作为组件传递
                },
            },
        ]
    }
];

export default userRoutes;
