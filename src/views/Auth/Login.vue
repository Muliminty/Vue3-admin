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
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const username = ref('');
    const password = ref('');
    const errorMessage = ref('');

    const login = async () => {
      if (!username.value || !password.value) {
        errorMessage.value = '用户名和密码不能为空';
        return;
      }

      try {
        // 假设登录验证是通过 API 调用的
        const response = await fakeLoginApi(username.value, password.value);

        if (response.success) {
          // 登录成功后跳转到 dashboard
          router.push('/user');
        } else {
          errorMessage.value = '用户名或密码错误';
        }
      } catch (error) {
        errorMessage.value = '登录失败，请稍后重试';
      }
    };

    // 假设的登录 API
    const fakeLoginApi = (username: string, password: string) => {
      return new Promise<{ success: boolean }>((resolve) => {
        setTimeout(() => {
          if (username === 'admin' && password === '123') {
            resolve({ success: true });
          } else {
            resolve({ success: false });
          }
        }, 1000);
      });
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
