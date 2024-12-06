<template>
    <div v-if="user">
        <h1>{{ user.name }} 的详情</h1>
        <p>ID: {{ user.id }}</p>
        <p>名称: {{ user.name }}</p>
        <p>年龄: {{ user.age }}</p>
        <p>邮箱: {{ user.email }}</p>
    </div>
    <div v-else>
        <p v-if="isLoading">正在加载...</p>
        <p v-else>用户信息未找到</p>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';

// 定义用户详情类型
interface User {
    id: number;
    name: string;
    age: number;
    email: string;
}

// 响应式的用户数据
const user = ref<User | null>(null);
const isLoading = ref(true);  // 是否正在加载
const route = useRoute();

// 模拟的用户数据
const users = [
    { id: 1, name: '张三', age: 25, email: 'zhangsan@example.com' },
    { id: 2, name: '李四', age: 30, email: 'lisi@example.com' },
    { id: 3, name: '王五', age: 28, email: 'wangwu@example.com' },
];

// 获取用户详情的函数
const getUserDetail = (userId: number) => {
    const foundUser = users.find((user) => user.id === userId);
    if (foundUser) {
        user.value = foundUser;
    } else {
        user.value = null;
    }
    isLoading.value = false; // 数据加载完成，停止loading
};

// 监听路由参数变化并加载用户详情
watch(
    () => route.params.id,
    (newId) => {
        isLoading.value = true; // 开始加载
        const userId = Number(newId);
        getUserDetail(userId);
    },
    { immediate: true }  // 初始化时也调用一次
);

// 初始化时获取用户数据
onMounted(() => {
    const userId = Number(route.params.id);
    getUserDetail(userId);
});
</script>

<style scoped>
h1 {
    color: #333;
}

p {
    color: #666;
}

p:not(:last-child) {
    margin-bottom: 8px;
}
</style>
