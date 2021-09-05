import { createRouter, createWebHashHistory } from "vue-router";
import Index from "../views/Index.vue";
import View from "../views/View.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/view",
    name: "View",
    component: View,
  },
  { path: "/:pathMatch(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
