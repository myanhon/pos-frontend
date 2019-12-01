import axios from "axios";
const API = require("../../config/API");

const state = {
  productArray: null
};

const mutations = {
  SAVE_ALL_PRODUCTS(state, data) {
    state.productArray = data;
  }
};

const actions = {
  fetchAllProducts({ commit }) {
    axios
      .get(API.product.GET_ALL_PRODUCTS_URL)
      .then(response => {
        commit("SAVE_ALL_PRODUCTS", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
};

const getters = {
  getAllProducts(state) {
    return state.productArray;
  }
};

export default {
  namespaced: "Product",
  state,
  mutations,
  actions,
  getters
};
