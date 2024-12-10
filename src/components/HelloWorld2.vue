<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <p class="read-the-docs">11111111</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
