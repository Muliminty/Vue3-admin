<template>
    <div class="header">
        <h1>Header</h1>
        <button @click="toggleTheme">
            {{ theme.current === "light" ? "切换到夜间模式" : "切换到日间模式" }}
        </button>
    </div>


</template>


<script setup lang="ts">
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