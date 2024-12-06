<template>
    <div class="user">
        <div>
            <h1>用户列表</h1>
            <ul>
                <li v-for="user in users" :key="user.id">
                    <router-link :to="`/users/${user.id}`">{{ user.name }}</router-link>
                </li>
            </ul>
        </div>

        <!-- 在这里渲染嵌套路由 -->
        <div>
            <router-view />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const users = ref([
    { id: 1, name: '张三' },
    { id: 2, name: '李四' },
    { id: 3, name: '王五' },
]);
</script>

<style scoped>
h1 {
    color: #333;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin: 10px 0;
}

.user {
    display: flex;
}


router-link {
    color: #007bff;
    text-decoration: none;
}

router-link:hover {
    text-decoration: underline;
}
</style>