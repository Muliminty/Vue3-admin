<template>
    <div class="default-layout">
        <!-- 布局部分 -->
        <header>
            <h1>{{ defaultLayout.title }}</h1>
            <p>{{ defaultLayout.content }}</p>
        </header>

        <!-- 导航部分 -->
        <nav class="nav-links">
            <router-link to="/dashboard" aria-label="Go to Dashboard">Dashboard</router-link>
            <router-link to="/users" aria-label="Go to Users">Users</router-link>
        </nav>

        <!-- 路由视图 -->
        <router-view />
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

// 使用 reactive 来替代 ref，方便管理对象数据
const defaultLayout = reactive({
    title: '默认布局',
    content: '这是默认布局的内容',
});
</script>

<style scoped>
.default-layout {
    padding: 20px;
    font-family: Arial, sans-serif;
}

header {
    margin-bottom: 20px;
}

nav {
    margin-top: 20px;
}

.nav-links {
    display: flex;
    gap: 10px;
}

.nav-links a {
    padding: 8px 12px;
    background-color: #007bff;
    color: white;
    border-radius: 4px;
    text-decoration: none;
}

.nav-links a:hover {
    background-color: #0056b3;
}
</style>