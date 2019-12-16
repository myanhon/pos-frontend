import axios from "axios";
const API = require("../../config/API");

const state = {
  status: null,
  accessToken: localStorage.getItem("accessToken"),
  refreshToken: localStorage.getItem("refreshToken")
};

const mutations = {
  AUTH_REQUEST(state) {
    state.status = "loading";
  },
  AUTH_SUCCESS(state) {
    state.status = "success";
  },
  AUTH_ERROR(state) {
    state.status = "error";
  },
  LOGOUT(state) {
    state.status = null;
  }
};

const actions = {
  register({ commit }, user) {
    commit("AUTH_REQUEST");
    axios
      .post(API.user.REGISTER_API, {
        name: user.name,
        email: user.email,
        password: user.password
      })
      .then(response => {
        console.log("before auth_sucess", response.data);
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        commit("AUTH_SUCCESS");
      })
      .catch(error => {
        commit("AUTH_ERROR");
        console.log(error.response);
      });
  },
  logout({ commit }) {
    axios
      .delete(API.user.LOGOUT_API, {
        data: { refreshToken: localStorage.getItem("refreshToken") }
      })
      .then(() => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        delete axios.defaults.headers.common["Authorization"];
        commit("LOGOUT");
      })
      .catch(err => {
        console.log(err);
      });
  }
};

const getters = {};

export default {
  namespaced: "User",
  state,
  mutations,
  actions,
  getters
};
