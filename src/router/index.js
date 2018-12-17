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
    path: '/register',
    component: () => import('@/views/register'),
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
        meta: { title: '系统首页', icon: 'menu', noCache: true }
      }
    ]
  },
  {
    path: '/client',
    component: Layout,
    redirect: 'table',
    children: [
      {
        path: '',
        component: () => import('@/views/clients/List'),
        name: 'table',
        meta: { title: '设备列表', icon: 'tickets', noCache: true }
      },
      {
        path: 'detail',
        component: () => import('@/views/clients/Detail'),
        name: 'detail',
        hidden: true
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
