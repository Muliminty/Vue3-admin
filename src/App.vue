<template>
  <!-- 根据路由的 meta.layout 动态加载布局 -->
  <component :is="layout">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </component>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue'; // 需要导入 computed
import DefaultLayout from '@/layouts/defaultLayout/index.vue';
import EmptyLayout from '@/layouts/empty/index.vue';

// 布局映射
const layoutMap = {
  default: DefaultLayout,
  empty: EmptyLayout,
};

// 获取当前路由
const route = useRoute();

// 动态获取布局
const layout = computed(() => {
  const layoutName = route.meta?.layout || 'default'; // 防止 meta 或 layout 为 undefined
  return layoutMap[layoutName] || DefaultLayout; // 防止 layoutMap 中找不到对应布局
});

console.log('route.meta', route.meta);
console.log('layout', layout.value);

</script>

<style scoped>
/* 全局样式 */
</style>
