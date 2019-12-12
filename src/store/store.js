import Vue from "vue";
import Vuex from "vuex";
import Product from "../modules/product";
import User from "../modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Product,
    User
  }
});
