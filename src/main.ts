import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 引入路由实例
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'

const app = createApp(App);

app.use(ElementPlus)
app.use(router); // 注册路由
app.mount('#app');