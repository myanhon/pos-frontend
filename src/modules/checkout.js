const API = require("../../config/API");
import axios from "axios";

const state = {
  productArray: null,
  status: null
};

const mutations = {
  SAVE_ALL_PRODUCTS: (state, data) => {
    state.productArray = data;
  },
  CHARGING: state => {
    state.status = "Charging";
  }
};

const actions = {
  createCharge: ({ commit }, stripeTokenId) => {
    commit("CHARGING");
    axios
      .get(API.checkout.POST_TOKEN_API + stripeTokenId, {
        withCredentials: true
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log("nani error", error);
      });
  },
  getTest: () => {
    axios
      .get(API.checkout.POST_TOKEN_API, { withCredentials: true })
      .then(response => {
        console.log("waarom werkt dit wel?", response);
      })
      .catch(error => {
        console.log(error);
      });
  }
};

const getters = {};

export default {
  namespaced: "Checkout",
  state,
  mutations,
  actions,
  getters
};
