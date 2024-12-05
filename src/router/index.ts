import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './modules'; // 导入模块化路由
import setupGuards from './guard';  // 路由守卫

// 创建路由实例
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), // HTML5 模式
    routes,
});

// 应用路由守卫
setupGuards(router);

export default router;