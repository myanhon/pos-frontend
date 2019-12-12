import Vue from "vue";
import Router from "vue-router";
import Dinner from "./components/products/Dinner";
import Drinks from "./components/products/Drinks";
import Lunch from "./components/products/Lunch";
import Wine from "./components/products/Wine";
// import Login from "./components/user/Login";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    // {
    //   path: "/",
    //   name: "Login",
    //   component: Login
    // },
    {
      path: "/",
      name: "Dinner",
      component: Dinner
    },
    {
      path: "/drinks",
      name: "Drinks",
      component: Drinks
    },
    {
      path: "/lunch",
      name: "Lunch",
      component: Lunch
    },
    {
      path: "/wine",
      name: "Wine",
      component: Wine
    }
  ]
});
