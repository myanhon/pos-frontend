import axios from "axios";
const API = require("../../config/API");
// const _ = require("lodash");
const state = {
  cartArray: []
};
const mutations = {
  GET_CART: (state, data) => {
    state.cartArray = data;
  }
};

const actions = {
  addProductToCart: ({ dispatch }, productId) => {
    axios
      .get(API.cart.ADD_PRODUCT_CART_API + productId, { withCredentials: true })
      .then(() => {
        dispatch("fetchShoppingCart");
      })
      .catch(error => {
        console.log(error);
      });
  },
  fetchShoppingCart: ({ commit }) => {
    axios
      .get(API.cart.GET_SHOPPING_CART, { withCredentials: true })
      .then(response => {
        commit("GET_CART", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
};

const getters = {
  getAllItems: state => {
    return state.cartArray.products;
  },
  getTotalPrice: state => {
    return state.cartArray.totalPrice;
  }
};
export default {
  namespaced: "Cart",
  state,
  mutations,
  actions,
  getters
};
