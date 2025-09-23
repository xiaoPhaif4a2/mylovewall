import { createRouter, createWebHistory } from 'vue-router'
// 导入 AppLayout 组件（注意路径要与实际文件位置匹配）
import AppLayout from '@/components/icons/layout/AppLayout.vue'
import IndexView from '@/components/views/IndexView.vue'
import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs'
// 定义路由规则
const routes = [
  {
    path: '/', // 根路径（主页）
    name: 'Home',
    component: AppLayout, // 主页渲染 AppLayout 组件
    children:[
      {
        path:'',
        component: IndexView,
      },
      {
        path:"/about",
        name:"about",
        component: () => import('@/components/views/AboutView.vue'),
        //懒加载/只有当你点击 “关于页”、需要跳转到 /about 路由时，才会临时去加载 AboutView 的代码。
      },
    ]
  },
  // 若有其他页面，可在此处继续添加路由规则
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(), // 使用 HTML5 History 模式（无 # 号的路由）
  routes, // 注册路由规则
})

export default router