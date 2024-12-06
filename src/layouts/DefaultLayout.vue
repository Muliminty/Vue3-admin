<template>
    <div>
        <h1>{{ defaultLayout.title }}</h1>
        <p>{{ defaultLayout.content }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const defaultLayout = ref({
    title: '默认布局',
    content: '这是默认布局的内容',
});
</script>