import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 引入路由实例
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './style.css';
import '@/assets/styles/variables.scss'
import '@/assets/styles/reset.scss'

import { createPinia } from 'pinia';
import { useAppStore } from "@/store/modules/app";

// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}


// 创建并注册 Pinia
const pinia = createPinia();
app.use(pinia);

// 初始化主题
const appStore = useAppStore();
appStore.initTheme();

app.use(ElementPlus);
app.use(router); // 注册路由
app.mount('#app');
