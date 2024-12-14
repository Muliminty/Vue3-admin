<template>
    <div class="menu-box">
        <el-menu :default-active="addMenuIndex" class="el-menu-vertical-demo" :collapse="props.open"
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
import { onMounted, ref } from 'vue';

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

// 根据路由路径查找菜单的索引
const getActiveMenuIndex = (path: string) => {
    const findMenuIndex = (menus: any[], parentIndex: string = '') => {
        for (const menu of menus) {
            console.log('Checking menu:', menu.path, path);  // 调试：打印检查路径

            // 如果路径匹配或路径前缀匹配
            if (path === menu.path || path.startsWith(menu.path)) {
                return parentIndex;  // 路由路径匹配时返回当前索引
            }

            if (menu.children) {
                const childIndex = findMenuIndex(menu.children, `${parentIndex}${menu.index}-`);
                if (childIndex) return childIndex;
            }
        }
        return '';  // 没有找到匹配项时返回空字符串
    };

    return findMenuIndex(menuList, '');
};


// 使用 ref 和 onMounted 保证页面渲染后才计算 activeIndex
const activeIndex = ref('dashboard');

onMounted(() => {
    console.log('route.path:', route.path);  // 调试：打印当前路由路径
    activeIndex.value = getActiveMenuIndex(route.path); // 在 mounted 后计算默认选中的菜单项
    console.log('activeIndex:', activeIndex.value);  // 打印 activeIndex 以确认值
});

// 处理菜单点击
const handleMenuSelect = (index: string) => {
    console.log('handleMenuSelect:', index);  // 调试：打印点击的菜单项索引
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
