import ParentComponent from "@/views/ParentComponent.vue";
import QueryParam from "@/views/QueryParam.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Parent",
      component: ParentComponent,
    },
    {
      path: "/query",
      name: "query",
      component: QueryParam,
    },
  ],
});

export default router;
