import axios from "axios";
const API = require("../../config/API");

const state = {
  cartArray: null
};
const mutations = {
  ADD_PRODUCT_CART(state, data) {
    state.cartArray = data;
  }
};

const actions = {
  addProductToCart({ commit }, productId) {
    axios
      .get(API.cart.ADD_PRODUCT_CART_API + productId, { withCredentials: true })
      .then(response => {
        console.log("AWOO WE MADE IT", response);
        commit("ADD_PRODUCT_CART", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
const getters = {};
export default {
  namespaced: "Cart",
  state,
  mutations,
  actions,
  getters
};
