<template>
    <div class="menu-box">
        <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" :collapse="props.open"
            @select="handleMenuSelect">
            <template v-for="menu in menuList" :key="menu.index">
                <!-- 判断是否为子菜单 -->
                <el-sub-menu v-if="menu.children" :index="menu.index">
                    <template #title>
                        <el-icon v-if="menu.props?.icon">
                            <component :is="menu.props.icon" />
                        </el-icon>
                        <span>{{ menu.name }}</span>
                    </template>
                    <!-- 渲染子菜单 -->
                    <el-menu-item v-for="subMenu in menu.children" :key="subMenu.index" :index="subMenu.index"
                        :disabled="subMenu.disabled">
                        <el-icon v-if="subMenu.props?.icon">
                            <component :is="subMenu.props.icon" />
                        </el-icon>
                        {{ subMenu.name }}
                    </el-menu-item>
                </el-sub-menu>

                <!-- 普通菜单项 -->
                <el-menu-item v-else :index="menu.index" :key="menu.index" :disabled="menu.disabled"
                    v-show="!menu?.props?.hiddenMenu">
                    <el-icon v-if="menu.props?.icon">
                        <component :is="menu.props.icon" />
                    </el-icon>
                    <span>{{ menu.name }}</span>
                </el-menu-item>
            </template>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { routes } from '@/router/modules/index.ts'; // 引入菜单配置
import { watch, ref } from 'vue';

const props = defineProps({
    open: Boolean, // 是否折叠菜单
});

// 递归为菜单项添加索引
const addMenuIndex = (menus: any[], parentIndex: string = ''): any[] => {
    return menus.map((menu, index) => {
        const newIndex = `${parentIndex}${index}`;  // 拼接父级索引和当前索引
        const updatedMenu = { ...menu, index: newIndex };

        // 如果有子菜单，递归处理
        if (menu.children) {
            updatedMenu.children = addMenuIndex(menu.children, `${newIndex}-`);  // 子菜单的索引基于父级索引
        }

        return updatedMenu;
    });
};

// 动态菜单列表
const menuList = addMenuIndex(routes);

// 获取当前路由
const route = useRoute();
const router = useRouter();


/**
 * 根据路由路径查找菜单的索引
 * @param {string} path - 路由路径
 * @returns {string} - 对应的菜单索引
 */
const getActiveMenuIndex = (path: string): string => {
    /**
     * 内部递归函数，用于在菜单列表中查找匹配路径的菜单
     * @param {any[]} menus - 菜单列表
     * @returns {string} - 匹配的菜单索引
     */
    const findMenuIndex = (menus: any[]): string => {
        let matchedMenu: { index: string; path: string } | null = null;

        for (const menu of menus) {
            // 如果路径完全匹配，则直接返回当前菜单的 index
            if (menu.path === path) {
                return menu.index;
            }

            // 如果路径部分匹配（即 path 是某个父级菜单路径的前缀），暂存匹配项，但继续深入查找更精确的路径
            if (menu.path && path.startsWith(menu.path)) {
                matchedMenu = { index: menu.index, path: menu.path };
            }

            // 如果存在子菜单，递归查找
            if (menu.children) {
                const childIndex = findMenuIndex(menu.children);
                if (childIndex) return childIndex; // 如果子菜单中找到了匹配项，优先返回子菜单的索引
            }
        }

        // 如果没有更精确的匹配项，则返回部分匹配的父菜单索引
        return matchedMenu ? matchedMenu.index : '';
    };

    return findMenuIndex(menuList);
};



// 使用 ref 和 onMounted 保证页面渲染后才计算 activeIndex
const activeIndex = ref('');

watch(
    () => route.path,
    (newPath) => {
        console.log('newPath', newPath);
        activeIndex.value = getActiveMenuIndex(newPath);
        console.log('activeIndex.value: ', activeIndex.value)
    },
    { immediate: true }
);


// 处理菜单点击
const handleMenuSelect = (index: string) => {
    const selectedMenu = findMenuByIndex(index, menuList); // 查找菜单项
    if (selectedMenu) {
        const path = selectedMenu.path;
        if (path) {
            router.push(path);
        }
    }
};

// 工具函数：根据 index 查找菜单项
const findMenuByIndex = (index: string, menus: any[]) => {
    for (const menu of menus) {
        if (menu.index === index) return menu;
        if (menu.children) {
            const found = findMenuByIndex(index, menu.children);
            if (found) return found;
        }
    }
    return null;
};
</script>

<style scoped>
.menu-box {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
}

.el-menu {
    flex: 1;
}
</style>
