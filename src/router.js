import Vue from "vue";
import Router from "vue-router";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Checkout from "./components/Checkout";

Vue.use(Router);

const router = new Router({
  mode: "history",
  redirect: Login,
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/",
      name: "Home",
      component: Home
      // meta: {
      //   requireAuth: true
      // }
    },
    { path: "/checkout", name: "Checkout", component: Checkout },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    { path: "/404", name: "404", component: NotFound }
  ]
});

router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next("/404");
  } else {
    next();
  }
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (localStorage.getItem("accessToken")) {
      next();
      return;
    }
    next("/");
  } else {
    next();
  }
});

export default router;
