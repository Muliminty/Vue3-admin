<template>
    <div class="menu-box">
        <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="open" @select="handleMenuSelect">
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
import { useRouter } from 'vue-router';
import { routes } from '@/router/modules/index.ts'; // 引入菜单配置

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

// 使用 Vue Router 进行导航
const router = useRouter();

const handleClick = (index: string) => {
    console.log(index);
}

const handleMenuSelect = (index: string) => {
    console.log(menuList);
    const selectedMenu = findMenuByIndex(index, menuList); // 查找菜单项
    if (selectedMenu) {
        // 如果路径是动态的（例如带有参数 :id），传递相应的参数
        const path = selectedMenu.path;
        if (path && path.includes(':id')) {
            // 如果路径包含 :id，跳转时需要传递动态参数
            const userId = 123; // 这里的 123 是示例，你应该根据需求获取实际的 ID
            router.push({ path: path.replace(':id', userId.toString()) });
        } else {
            // 普通路径
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
