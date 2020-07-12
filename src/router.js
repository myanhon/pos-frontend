import Vue from "vue";
import Router from "vue-router";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Profile from "./components/user/Profile";
import Dashboard from "./components/Dashboard";
import store from "./store/store";

Vue.use(Router);

const router = new Router({
  mode: "history",
  redirect: Login,
  routes: [
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: {
        checkLogin: true
      }
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
      meta: {
        requireAuth: true
      }
    },
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        checkCart: true
      }
    },
    {
      path: "/checkout",
      name: "Checkout",
      component: Checkout,
      meta: {
        requireCart: true,
        checkBeforePay: true
      }
    },
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
  if (to.matched.some(record => record.meta.checkLogin)) {
    if (store.getters["User/getStatus"] === "Success") {
      next("/");
      return;
    }
    next();
  } else {
    next();
  }
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (store.getters["User/getStatus"] === "Success") {
      next();
      return;
    }
    next("/");
  } else {
    next();
  }
  if (to.matched.some(record => record.meta.checkBeforePay)) {
    if (store.getters["User/getStatus"] !== "Success") {
      next("/Login");
      return;
    } else {
      next();
    }
  }
  if (to.matched.some(record => record.meta.checkCart)) {
    store.dispatch("Checkout/isCartActive");
    next();
  }
  if (to.matched.some(record => record.meta.requireCart)) {
    if (store.getters["Cart/getAllItems"]) {
      next();
      return;
    }
    next("/");
  } else {
    next();
  }
});

export default router;
