import Home from "../Pages/Home.vue";
import About from "../Pages/About.vue";
import { Register, Login } from "../Pages";

const routes = [
  {
    path: "",
    component: Home,
    name: "home",
  },
  {
    path: "/about",
    component: About,
    name: "about",
  },
  {
    path: "/auth/register",
    component: Register,
    name: "register",
  },
  {
    path: "/auth/login",
    component: Login,
    name: "login",
  },
];
export default routes;
