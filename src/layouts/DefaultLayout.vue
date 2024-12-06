<!-- <template>
    <div class="default-layout">
        <header>
            <h1>{{ defaultLayout.title }}</h1>
            <p>{{ defaultLayout.content }}</p>
        </header>

        <nav class="nav-links">
            <router-link to="/dashboard" aria-label="Go to Dashboard">Dashboard</router-link>
            <router-link to="/users" aria-label="Go to Users">Users</router-link>
        </nav>

        <router-view />
    </div>
</template> -->
<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>Main</el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.el-header,
.el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
}

body>.el-container {
    margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}

/* 媒体查询：针对移动端（最大宽度为768px） */
@media (max-width: 768px) {
    .el-container {
        flex-direction: column;
    }

    .el-aside {
        width: 100%;
        line-height: 60px;
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
        width: 150px;
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
    }

    .el-main {
        line-height: 80px;
    }
}
</style>
