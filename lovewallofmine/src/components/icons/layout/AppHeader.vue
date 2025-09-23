<script setup lang="ts">
// import { ref } from 'vue';
import {isCollapse} from "./isCollapse"
</script>

<template>
    <el-header>
        <!-- 图标 -->
        <el-icon @click="isCollapse=!isCollapse">
            <!-- false的时候显示fold，true的时候显示expand，总之就是做一个交替 -->
             <!-- 这里可能用v-show更好一点，但是我不会 -->
             <!-- 两个图标而已。而已吧。。。。。。 -->
            <IEpExpand v-if="isCollapse"/>
            <IEpFold v-else />
        </el-icon>
<!-- 
        面包屑 -->
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item>
        <a href="/">promotion management</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 下拉菜单 -->
     <el-dropdown>
    <span class="el-dropdown-link">
          <el-avatar :size="40" :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'" />
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>用户姓名</el-dropdown-item>
        <el-dropdown-item divided>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
    </el-dropdown>


        </el-header>
</template>

<style lang="scss" scoped>
.el-header {
    display: flex;
    align-items:center ;
    background-color: pink;
    // .el-icon {
    //   margin-right: 17px;
    //   border: 0;
    // }

}

.el-dropdown {
    margin-left: auto;
}
</style>
