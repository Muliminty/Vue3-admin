<template>
    <div class="header">
        <h1>Header</h1>

        <div style="display: flex;">
            <button @click="toggleTheme" style="margin-right: 15px;">
                {{ theme.current === "light" ? "黑间模式" : "白天模式" }}
            </button>

            <div style="display: flex; align-items: center;">
                <span>主题色选择器</span>
                <ThemeColorPicker />
            </div>


        </div>
    </div>


</template>


<script setup lang="ts">
import ThemeColorPicker from "@/components/ThemeColorPicker.vue";

import { useTheme } from "@/hooks/useTheme"; // 如果使用 Pinia，则引入 useAppStore
const { theme, toggleTheme } = useTheme(); // 或 const appStore = useAppStore();
</script>

<style scoped>
.header {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>