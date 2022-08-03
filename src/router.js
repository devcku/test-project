import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/Home.vue";
import Blog from "./views/Blog.vue";
import Contact from "./views/Contact.vue";
import Login from "./views/Login.vue";

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home },
  { path: "/login", component: Login },
  { path: "/blog", component: Blog },
  { path: "/contact", component: Contact },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
