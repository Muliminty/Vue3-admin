<template>


    <!-- 菜单组件 -->
    <div class="menu-box">
        <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
            @close="handleClose">
            <el-sub-menu index="1">
                <template #title>
                    <el-icon>
                        <Location />
                    </el-icon>
                    <span>Navigator One</span>
                </template>
                <el-menu-item-group>
                    <template #title><span>Group One</span></template>
                    <el-menu-item index="1-1">item one</el-menu-item>
                    <el-menu-item index="1-2">item two</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                    <el-menu-item index="1-3">item three</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                    <template #title><span>item four</span></template>
                    <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
                <el-icon>
                    <IconMenu />
                </el-icon>
                <template #title>Navigator Two</template>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <el-icon>
                    <Document />
                </el-icon>
                <template #title>Navigator Three</template>
            </el-menu-item>
            <el-menu-item index="4">
                <el-icon>
                    <Setting />
                </el-icon>
                <template #title>Navigator Four</template>
            </el-menu-item>
        </el-menu>

        <!-- 切换折叠和展开的按钮 -->
        <div class="collapse-box">
            <el-button @click="toggleCollapse" type="primary">{{ isCollapse ? '开' : '关' }}</el-button>
        </div>
    </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'

const isCollapse = ref(true)  // 控制菜单是否折叠

// 切换折叠和展开状态
const toggleCollapse = () => {
    isCollapse.value = !isCollapse.value
}

const handleOpen = (key: string, keyPath: string[]) => {
    console.log('Open:', key, keyPath)
}

const handleClose = (key: string, keyPath: string[]) => {
    console.log('Close:', key, keyPath)
}
</script>

<style>
.menu-box {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
}

.collapse-box {
    overflow: hidden;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.el-menu {
    flex: 1;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    /* width: 200px;
    min-height: 400px; */
}
</style>
