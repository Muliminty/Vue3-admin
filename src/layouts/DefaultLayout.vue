<template>
    <div class="common-layout">
        <el-container>
            <el-aside class="aside">
                <AsideMenu :open="open" />
            </el-aside>
            <el-container>
                <el-header>
                    <Header :open="open" @handleOpen="handleOpen" />
                </el-header>
                <el-main>
                    <router-view />
                </el-main>
                <el-footer>
                    <Footer />
                </el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Header from '@/layouts/Header.vue'
import Footer from '@/layouts/Footer.vue'
import AsideMenu from '@/layouts/AsideMenu.vue'

// 定义 open 状态及类型为 boolean
const open = ref<boolean>(false);

// 事件处理函数，切换菜单状态
const handleOpen = (value: boolean) => {
    open.value = !open.value; // 更新 open 状态
};
</script>

<style scoped>
.common-layout {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    /* 确保布局填满整个视口 */
}

.el-header,
.el-footer {
    background-color: var(--background-color);
}

.el-main {
    flex-grow: 1;
    /* 让 el-main 占据剩余空间 */
    overflow: auto;
    /* 内容过多时可以滚动 */
    background-color: #E9EEF3;
    color: var(--text-color);
    text-align: center;
    line-height: 160px;
}

.el-aside {
    background-color: var(--background-color);
    color: var(--text-color);
    text-align: center;
    width: auto;
    max-width: 300px;
    /* 设置最大宽度 */
}

/* 媒体查询：针对移动端（最大宽度为768px） */
@media (max-width: 768px) {
    .el-container {
        flex-direction: column;
    }

    .el-aside {
        width: 100%;
        line-height: 60px;
        display: none;
        /* 默认隐藏侧边栏 */
    }

    .el-main {
        line-height: 100px;
    }

    .el-header,
    .el-footer {
        line-height: 40px;
    }
}

/* 媒体查询：针对小型桌面端（最大宽度为1200px） */
@media (max-width: 1200px) {
    .el-aside {
        line-height: 180px;
    }

    .el-header,
    .el-footer {
        line-height: 50px;
    }

    .el-main {
        line-height: 120px;
    }
}

/* 媒体查询：针对更小的设备（最大宽度为480px） */
@media (max-width: 480px) {

    .el-header,
    .el-footer {
        line-height: 30px;
    }

    .el-aside {
        line-height: 50px;
        display: none;
        /* 默认隐藏侧边栏 */
    }

    .el-main {
        line-height: 80px;
    }
}
</style>
