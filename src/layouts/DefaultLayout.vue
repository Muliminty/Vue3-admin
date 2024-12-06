<!-- <template>
    <div class="default-layout">
        <header>
            <h1>{{ defaultLayout.title }}</h1>
            <p>{{ defaultLayout.content }}</p>
        </header>

        <nav class="nav-links">
            <router-link to="/dashboard" aria-label="Go to Dashboard">Dashboard</router-link>
            <router-link to="/users" aria-label="Go to Users">Users</router-link>
        </nav>

        <router-view />
    </div>
</template> -->
<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>Main</el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
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
.el-header,
.el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
}

body>.el-container {
    margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}
</style>