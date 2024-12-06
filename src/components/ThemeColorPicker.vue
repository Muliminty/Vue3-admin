<template>
    <div class="theme-color-picker">
        <el-color-picker v-model="selectedColor" @change="updateThemeColor" />
    </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
    name: "ThemeColorPicker",
    setup() {
        // 响应式变量：保存当前主题色
        const selectedColor = ref("#007175");

        // 监听主题色变化
        watch(selectedColor, (newColor) => {
            updateThemeColor(newColor);
        });

        // 更新主题色的 CSS 变量
        const updateThemeColor = (newColor) => {
            // 更新主色调的 CSS 变量
            document.documentElement.style.setProperty("--primary-color", newColor);

            // 根据新的主色调，计算其他颜色
            const primaryLight = lighten(newColor, 10);
            const primaryDark = darken(newColor, 10);
            const primaryTransparent10 = rgba(newColor, 0.1);
            const primaryTransparent30 = rgba(newColor, 0.3);
            const primaryTransparent50 = rgba(newColor, 0.5);
            const primaryTransparent70 = rgba(newColor, 0.7);

            // 设置生成的颜色到 CSS 变量
            document.documentElement.style.setProperty("--primary-light", primaryLight);
            document.documentElement.style.setProperty("--primary-dark", primaryDark);
            document.documentElement.style.setProperty("--primary-transparent-10", primaryTransparent10);
            document.documentElement.style.setProperty("--primary-transparent-30", primaryTransparent30);
            document.documentElement.style.setProperty("--primary-transparent-50", primaryTransparent50);
            document.documentElement.style.setProperty("--primary-transparent-70", primaryTransparent70);
        };

        // 工具函数：生成浅色
        const lighten = (color, percent) => {
            const colorObj = hexToRgb(color);
            return `rgb(${Math.min(colorObj.r + (colorObj.r * percent / 100), 255)}, ${Math.min(colorObj.g + (colorObj.g * percent / 100), 255)}, ${Math.min(colorObj.b + (colorObj.b * percent / 100), 255)})`;
        };

        // 工具函数：生成深色
        const darken = (color, percent) => {
            const colorObj = hexToRgb(color);
            return `rgb(${Math.max(colorObj.r - (colorObj.r * percent / 100), 0)}, ${Math.max(colorObj.g - (colorObj.g * percent / 100), 0)}, ${Math.max(colorObj.b - (colorObj.b * percent / 100), 0)})`;
        };

        // 工具函数：将 hex 转换为 RGB
        const hexToRgb = (hex) => {
            let r = 0, g = 0, b = 0;
            if (hex.length === 7) {
                r = parseInt(hex.substring(1, 3), 16);
                g = parseInt(hex.substring(3, 5), 16);
                b = parseInt(hex.substring(5, 7), 16);
            }
            return { r, g, b };
        };

        // 工具函数：生成透明色
        const rgba = (color, alpha) => {
            const { r, g, b } = hexToRgb(color);
            return `rgba(${r}, ${g}, ${b}, ${alpha})`;
        };

        return {
            selectedColor,
        };
    },
};
</script>

<style scoped>
.theme-color-picker {}

.theme-color-picker p {}
</style>