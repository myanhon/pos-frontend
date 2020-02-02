import router from "../router";
const API = require("../../config/API");
import axios from "axios";
import toast from "../../config/toast";

const state = {
  status: null
};

const mutations = {
  CHARGING: state => {
    state.status = "Charging";
  }
};

const actions = {
  createCharge: ({ commit }, stripeTokenId) => {
    commit("CHARGING");
    axios
      .post(API.checkout.POST_TOKEN_API, stripeTokenId, {
        headers: { "Content-Type": "text/plain" },
        withCredentials: true
      })
      .then(response => {
        router.push({ name: "Home" });
        toast.success(response.data.message, "Success");
      })
      .catch(error => {
        console.log(error);
      });
  },
  isCartActive: ({ commit }) => {
    axios
      .get(API.checkout.POST_TOKEN_API, { withCredentials: true })
      .then(response => {
        if (!response.data.isActive) {
          commit("Cart/resetState", null, { root: true });
        }
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
