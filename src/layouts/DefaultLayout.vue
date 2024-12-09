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
import Header from '@/layouts/Header.vue'
import Footer from '@/layouts/Footer.vue'
import AsideMenu from '@/layouts/AsideMenu.vue'

import { ref } from 'vue'


// 定义 open 状态
const open = ref(false);

// 定义 Header 的事件处理函数
const handleOpen = (value: boolean) => {
    open.value = !open.value;
};

</script>

<style scoped>
.common-layout {
    width: 100vw;
    height: 100vh;
    /* 确保布局填满整个视口 */
    display: flex;
    flex-direction: column;
}

.el-header,
.el-footer {
    background-color: #B3C0D1;
}

.el-main {
    background-color: #E9EEF3;
    flex-grow: 1;
    /* 让 el-main 占据剩余空间 */
    overflow: auto;
    /* 如果内容过多，可以滚动 */
}

/* .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
} */

.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    display: block;
    /* 去掉固定宽度，改为自适应内容宽度 */
    width: auto;
    max-width: 300px;
}



body>.el-container {
    /* margin-bottom: 40px; */
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
    }

    .el-main {
        line-height: 80px;
    }
}
</style>
