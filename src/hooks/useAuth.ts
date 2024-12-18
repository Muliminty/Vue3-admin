import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { setToken } from '@/utils/auth';
import { apiLogin } from '@/api/auth';

const userRole = ref<string | null>(null);

export function useAuth() {
    const router = useRouter();

    const login = async (username: string, password: string): Promise<void> => {
        try {
            const response = await apiLogin(username, password); // 调用登录接口
            const { token, role } = response.data;

            // 保存 token 和角色
            setToken(token);
            userRole.value = role;
        } catch (error) {
            throw new Error('用户名或密码错误');
        }
    };

    const logout = (): void => {
        setToken(null);
        userRole.value = null;
        router.push('/login');
    };

    return { login, logout, userRole };
}
