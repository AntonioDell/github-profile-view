import { createRouter, createWebHistory } from "vue-router";
import GithubProfiles from "../views/GithubProfiles.vue";

const routes = [
  {
    path: "/",
    name: "GithubProfiles",
    component: GithubProfiles,
  },
  {
    path: "/:username",
    name: "GithubProfiles (specific)",
    component: GithubProfiles,
    props: (route) => ({ initialUsername: route.params.username }),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
