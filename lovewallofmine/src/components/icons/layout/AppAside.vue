<script setup lang="ts">
import { ElAside, ElMenu, ElMenuItem, ElIcon } from 'element-plus'
import {isCollapse} from "./isCollapse"

//控制折叠
</script>

<template>
    <el-aside>
        <el-scrollbar>
            <!-- //滚动条，但是不知道为什么我的自动导入老是出错 -->
            <el-menu router unique-opened :collapse="isCollapse">
                <a href="/" class="logo">
                    <img src="@/assets/pika.gif" alt="pika" />
                    <h1>Pica</h1>
                </a>
                <el-menu-item index="/users">
                    <el-icon><IEpSetting /></el-icon> <span>用户管理</span>
                </el-menu-item>
                <el-menu-item index="/lovepage">
                    <el-icon><IEpSetting /></el-icon> <span>表白界面</span>
                </el-menu-item>
                <el-menu-item index="/community">
                    <el-icon><IEpSetting /></el-icon> <span>社区管理</span>
                </el-menu-item>
                <el-menu-item index="/complaint">
                    <el-icon><IEpSetting /></el-icon> <span>举报投诉</span>
                </el-menu-item>
            </el-menu>
        </el-scrollbar>

    </el-aside>
</template>

<style lang="scss" scoped>
.el-aside {
    background-color: pink;
    height: 100vh;
    width:auto;
}

//控制折叠
.el-menu {
    background-color: #eee;
    width: 200px;
    &.el-menu--collapse{
        width: 60px;
        //&是父元素。下面这句的意思是折叠时不显示文字
        & h1{
            display: none;
        }
    }
}

.logo{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    text-decoration: none;
    color: pink;

    img{
        width: 50px;
        height: 50px;
    }
}
</style>
