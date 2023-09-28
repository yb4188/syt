import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: () => import("@/views/home/index.vue"),
    },
    {
      path: "/hospital",
      component: () => import("@/views/hospital/index.vue"),
    },
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/404",
      component: () => import("@/views/404/index.vue"),
    },
    {
      path: "/:pathMatch(.*)",
      redirect: "/404",
    },
  ],
  scrollBehavior() {
    return {
      top: 0,
      left: 0,
    };
  },
});
