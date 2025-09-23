<script setup lang="ts">
import { ElContainer, ElHeader, ElMain } from 'element-plus'
import AppAside from './AppAside.vue';
import AppHeader from './AppHeader.vue';



</script>

<template>
    <div class="common-layout">
    <el-container>
        <AppAside />
        <el-container class="header-and-main">
          <AppHeader />
          <el-main>
            <RouterView />
          </el-main>
        </el-container>
    </el-container>
    <!-- 注解以下此处appaside和appheader。
    通过剪切再引用我们实现了对这两者的精细化操作。
    一切为了总体布局。
    我在说废话哦。 -->
  </div>
</template>

<style lang="scss" scoped>
.header-and-main {
  flex-direction: column;
  height: 100vh;
}
.el-main {
  padding-right: 0;
}
</style>
