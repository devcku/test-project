import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/Home.vue";
import List from "./views/List.vue";
import Login from "./views/Login.vue";

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home },
  { path: "/playlists/:id", component: List },
  { path: "/login", component: Login },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
