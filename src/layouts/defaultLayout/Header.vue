<template>
    <div class="header">
        <h1>
            <span @click="toggleAside" style="margin-right: 10px;">{{ open ? '开' : '关' }}</span>
            <span>Header</span>
        </h1>

        <div style="display: flex;">
            <!-- 主题切换按钮 -->
            <div @click="toggleTheme" style="margin-right: 15px;">
                {{ theme.current === 'light' ? '黑间模式' : '白天模式' }}
            </div>

            <!-- 主题色选择器 -->
            <div style="display: flex; align-items: center;">
                <span>主题色选择器</span>
                <ThemeColorPicker />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import ThemeColorPicker from '@/components/ThemeColorPicker.vue';
import { useTheme } from '@/hooks/useTheme';

// 接收父组件传递的 `open` 状态
const props = defineProps({
    open: {
        type: Boolean,
        required: true,
    },
});

// 定义向父组件发送事件
const emit = defineEmits(['handleOpen']);

// 调用自定义 hook 管理主题
const { theme, toggleTheme } = useTheme();

// 切换侧边栏的打开状态
const toggleAside = () => {
    emit('handleOpen'); // 通知父组件切换状态
};
</script>

<style scoped>
.header {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--text-color)
}
</style>