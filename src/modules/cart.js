import axios from "axios";
const API = require("../../config/API");

// initial state
const getDefaultState = () => {
  return {
    cartArray: []
  };
};
const state = getDefaultState();

const mutations = {
  resetState: state => {
    // Merge rather than replace so we don't lose observers
    Object.assign(state, getDefaultState());
  },
  GET_CART: (state, data) => {
    state.cartArray = data;
  }
};

const actions = {
  resetCartState: ({ commit }) => {
    commit("resetState");
  },
  reduceOneFromCart: ({ dispatch }, productId) => {
    axios
      .get(API.cart.REDUCE_ONE_FROM_CART + productId, { withCredentials: true })
      .then(() => {
        dispatch("fetchShoppingCart");
      })
      .catch(error => {
        console.log(error);
      });
  },
  removeFromCart: ({ dispatch }, productId) => {
    axios
      .get(API.cart.REMOVE_ITEM_FROM_CART + productId, {
        withCredentials: true
      })
      .then(() => {
        dispatch("fetchShoppingCart");
      })
      .catch(error => {
        console.log(error);
      });
  },
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
