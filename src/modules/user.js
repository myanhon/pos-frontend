import axios from "axios";
const API = require("../../config/API");

const state = {
  status: null,
  accessToken: null,
  refreshToken: null
};

const mutations = {
  AUTH_REQUEST(state) {
    state.status = "loading";
  },
  AUTH_SUCCESS(state, payload) {
    console.log("mutation acesstoken:", payload.accessToken);
    console.log("mutation refreshtoken:", payload.refreshToken);
    state.status = "success";
    state.accessToken = payload.accessToken;
    state.refreshToken = payload.refreshToken;
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
        console.log("before auth_sucess", response.data.refreshToken);
        commit("AUTH_SUCCESS", response.data);
      })
      .catch(error => {
        commit("AUTH_ERROR");
        console.log(error.response);
      });
  }
};

const getters = {
  getAccessToken(state){
    return state.accessToken;
  },
  getRefreshToken(state) {
    return state.refreshToken;
  }
};

export default {
  namespaced: "User",
  state,
  mutations,
  actions,
  getters
};
