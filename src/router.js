import Vue from "vue";
import Router from "vue-router";
import Drinks from "./components/products/Drinks";
// import Dinner from "./components/products/Dinner";
// import Lunch from "./components/products/Lunch";
// import Wine from "./components/products/Wine";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import NotFound from "./components/NotFound";
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
    { path: "/404", name: "404", component: NotFound },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/",
      name: "Drinks",
      component: Drinks,
      meta: {
        requireAuth: true
      }
      // },
      // {
      //   path: "/drinks",
      //   name: "Drinks",
      //   component: Drinks,
      //   meta: {
      //     requireAuth: true
      //   }
      // },
      // {
      //   path: "/lunch",
      //   name: "Lunch",
      //   component: Lunch,
      //   meta: {
      //     requireAuth: true
      //   }
      // },
      // {
      //   path: "/wine",
      //   name: "Wine",
      //   component: Wine,
      //   meta: {
      //     requireAuth: true
      //   }
    }
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
    next("/login");
  } else {
    next();
  }
});

export default router;
