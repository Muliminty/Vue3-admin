import { reactive, onMounted } from "vue";

// 定义主题状态
const theme = reactive({
    current: localStorage.getItem("theme") || "light",
});

// 切换主题
const toggleTheme = () => {
    theme.current = theme.current === "light" ? "dark" : "light";
    applyTheme(theme.current);
};

// 应用主题
const applyTheme = (themeName: string) => {
    document.documentElement.setAttribute("data-theme", themeName);
    localStorage.setItem("theme", themeName);
};

// 初始化主题（优先加载用户选择，其次是系统偏好）
const initTheme = () => {
    const userTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    theme.current = userTheme || systemTheme;
    applyTheme(theme.current);
};

export const useTheme = () => {
    onMounted(initTheme);
    return { theme, toggleTheme };
};