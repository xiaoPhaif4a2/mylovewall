
<script setup lang="ts">
import { ElMessage } from 'element-plus';
import request from './utils/request';
request({
  method:"GET",
  url:"/api/post/homepage"
}).then((res) => {
  console.log(res);
  
})

const handleClick = () => {
  ElMessage.success('按需自动导入成功')
}
</script>

<template>
    <!-- 路由组件会在这里渲染 -->
  <router-view></router-view>
  <el-icon>
    <i-ep-user />
  </el-icon>
  <el-icon>
    <i-ep-setting />
  </el-icon>
  <el-icon>
    <IEpView />
  </el-icon>
  <el-button type="primary" @click="handleClick">aaaa</el-button>
  <div>

  </div>
</template>

<style scoped>

</style>
