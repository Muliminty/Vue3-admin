const TOKEN_KEY = 'access_token'; // 存储 Token 的键名

/**
 * 设置 Token
 * @param token - 需要存储的 Token 字符串，如果为 null 则移除 Token
 */
export function setToken(token: string | null): void {
    if (token) {
        localStorage.setItem(TOKEN_KEY, token);
    } else {
        localStorage.removeItem(TOKEN_KEY);
    }
}

/**
 * 获取 Token
 * @returns 存储的 Token 字符串，如果不存在则返回 null
 */
export function getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
}

/**
 * 删除 Token
 */
export function removeToken(): void {
    localStorage.removeItem(TOKEN_KEY);
}
