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
  createCharge: ({ commit, rootGetters }, data) => {
    commit("CHARGING");
    if (rootGetters["User/getStatus"] === "Success") {
      axios
        .post(API.checkout.POST_TOKEN_API, data, {
          withCredentials: true
        })
        .then(response => {
          router.push({ name: "Home" });
          toast.success(response.data.message, "Success");
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      router.push({ name: "Login" });
    }
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
  },
  redirectUser: () => {
    axios
      .get("http://localhost:3000/geng", { withCredentials: true })
      .then(response => {
        console.log("redirectTest: ", response);
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
