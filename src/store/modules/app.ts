import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
    state: () => ({
        theme: localStorage.getItem("theme") || "light",
    }),
    actions: {
        toggleTheme() {
            this.theme = this.theme === "light" ? "dark" : "light";
            document.documentElement.setAttribute("data-theme", this.theme);
            localStorage.setItem("theme", this.theme);
        },
        initTheme() {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            this.theme = localStorage.getItem("theme") || systemTheme;
            document.documentElement.setAttribute("data-theme", this.theme);
        },
    },
});