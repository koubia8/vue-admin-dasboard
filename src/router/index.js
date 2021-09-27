import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Team from "../views/Team.vue";
import SignIn from "../views/signIngFlow/SignIn.vue";
import Recover from "../views/signIngFlow/Recover.vue";
import Request from "../views/signIngFlow/Request.vue";
import WebSite from "../views/website.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/web",
    name: "web",
    component: WebSite,
  },
  {
    path: "/team",
    name: "Team",
    component: Team,
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/request",
    name: "Request",
    component: Request,
  },
  {
    path: "/recover",
    name: "Recover",
    component: Recover,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
