import { createRouter, createWebHashHistory } from "vue-router";
import Index from "../views/Index.vue";
import Add from "../views/Add.vue";
import View from "../views/View.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/add",
    name: "Add",
    component: Add,
  },
  {
    path: "/view",
    name: "View",
    component: View,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;