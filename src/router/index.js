import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/views/layout/Layout'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/login',
    component: () => import('@/views/login'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home'),
        name: 'home',
        meta: { title: '系统首页', icon: 'dashboard', noCache: true }
      }
    ]
  },
  {
    path: '/table',
    component: Layout,
    redirect: 'table',
    children: [
      {
        path: '',
        component: () => import('@/views/clients'),
        name: 'table',
        meta: { title: '设备列表', icon: 'table', noCache: true }
      }
    ]
  },
  {
    path: '/setting',
    component: Layout,
    redirect: 'setting',
    children: [
      {
        path: '',
        component: () => import('@/views/setting'),
        name: 'setting',
        meta: { title: '系统配置', icon: 'setting', noCache: true }
      }
    ]
  }
]

export default new Router({
  base: process.env.BASE_URL,
  routes: constantRouterMap
})
