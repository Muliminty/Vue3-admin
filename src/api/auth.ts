import axios from '@/utils/request'; // HTTP 请求工具

/**
 * 定义登录接口的请求参数类型
 */
interface LoginParams {
    username: string;
    password: string;
}

/**
 * 定义登录接口的返回值类型
 */
interface LoginResponse {
    token: string;
    role: string;
}

/**
 * 用户登录
 * @param username - 用户名
 * @param password - 密码
 * @returns 登录接口的响应数据（包含 Token 和角色信息）
 */
export async function apiLogin(
    username: string,
    password: string
): Promise<{ data: LoginResponse }> {
    return axios.post('/api/login', { username, password });
}
