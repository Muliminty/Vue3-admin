<template>
  <div class="login-container">
    <h2>登录</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">用户名</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div class="form-group">
        <label for="password">密码</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="submit">登录</button>
    </form>
    <!-- 错误提示 -->
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useAuth } from '@/hooks/useAuth'; // 引入登录逻辑
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const username = ref('');
    const password = ref('');
    const errorMessage = ref('');
    const { login: apiLogin } = useAuth(); // 使用封装的登录逻辑

    const login = async () => {
      if (!username.value || !password.value) {
        errorMessage.value = '用户名和密码不能为空';
        return;
      }

      try {
        // 调用 API 登录接口
        await apiLogin(username.value, password.value);

        // 登录成功后跳转到用户页面
        router.push('/users');
      } catch (error: any) {
        // 显示错误提示
        errorMessage.value = error.message || '登录失败，请稍后重试';
      }
    };

    return {
      username,
      password,
      login,
      errorMessage,
    };
  },
};
</script>


<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 3px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}
</style>
