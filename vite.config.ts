import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    // alias: {
    //   '@': path.resolve(__dirname, './src'),
    // },
    alias: {
      '@': '/src',  // 确保正确配置了路径别名
    },
  },
});
