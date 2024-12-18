import axios, { AxiosInstance } from 'axios';
import { getToken } from '@/utils/auth';
import { useRouter } from 'vue-router';

const router = useRouter();

// 创建 Axios 实例
const instance: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL, // 基础请求路径，从环境变量中读取
    timeout: 5000, // 请求超时时间
});

// 请求拦截器
instance.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            // 将 Token 添加到请求头中
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 响应拦截器
instance.interceptors.response.use(
    (response) => {
        // 直接返回响应数据
        return response;
    },
    (error) => {
        if (error.response?.status === 401) {
            // 如果返回 401 未授权，跳转到登录页面
            router.push('/login');
        }
        return Promise.reject(error);
    }
);

export default instance;
