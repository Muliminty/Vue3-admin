// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 引入路由实例
import './style.css'

const app = createApp(App);

app.use(router); // 注册路由
app.mount('#app');