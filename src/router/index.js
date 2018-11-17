import Vue from "vue";
import Router from "vue-router";

import Layout from "@/views/layout/Layout";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
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
          component: () => import("@/views/home/Index"),
          name: "Dashboard",
          meta: { title: "dashboard", icon: "dashboard", noCache: true }
        }
      ]
    },
    {
      path: "/table",
      component: Layout,
      redirect: "home",
      children: [
        {
          path: "home",
          component: () => import("@/views/home/Index"),
          name: "Dashboard",
          meta: { title: "dashboard", icon: "dashboard", noCache: true }
        }
      ]
    },
    {
      path: "/group",
      component: Layout,
      redirect: "home",
      children: [
        {
          path: "home",
          component: () => import("@/views/home/Index"),
          name: "Dashboard",
          meta: { title: "dashboard", icon: "dashboard", noCache: true }
        }
      ]
    }
  ]
});
