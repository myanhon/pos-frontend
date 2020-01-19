import Vue from "vue";
import Vuex from "vuex";
import Product from "../modules/product";
import createPersistedState from "vuex-persistedstate";
import User from "../modules/user";
import Cart from "../modules/cart";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Product,
    User,
    Cart
  },
  plugins: [createPersistedState()]
});
