import Vue from "vue";
import Router from "vue-router";

import Layout from "@/views/layout/Layout";

Vue.use(Router);

export const constantRouterMap = [
  {
    path: "/login",
    component: () => import("@/views/login"),
    hidden: true
  },
  {
    path: "",
    component: Layout,
    redirect: "home",
    children: [
      {
        path: "home",
        component: () => import("@/views/home"),
        name: "home",
        meta: { title: "系统首页", icon: "dashboard", noCache: true }
      }
    ]
  },
  {
    path: "/table",
    component: Layout,
    redirect: "table",
    children: [
      {
        path: "",
        component: () => import("@/views/home"),
        name: "table",
        meta: { title: "设备列表", icon: "table", noCache: true }
      }
    ]
  },
  {
    path: "/group",
    component: Layout,
    redirect: "group",
    children: [
      {
        path: "",
        component: () => import("@/views/home"),
        name: "group",
        meta: { title: "分组操作", icon: "group", noCache: true }
      }
    ]
  }
];

export default new Router({
  base: process.env.BASE_URL,
  routes: constantRouterMap
});
