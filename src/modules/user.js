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
        axios.defaults.headers.common["authorization"] =
          response.data.accessToken;
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
        _clearTokens();
        commit("LOGOUT");
      })
      .catch(err => {
        console.log(err);
        _clearTokens();
        commit("LOGOUT");
      });
  },
  verify({ commit }) {
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken")
      }
    };
    const bodyParameters = {
      key: "value"
    };
    axios.post(API.user.VERIFY_TOKEN_API, bodyParameters, config).catch(() => {
      _clearTokens();
      commit("LOGOUT");
    });
  }
};

function _clearTokens() {
  console.log("cleartokens");
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
}
const getters = {};

export default {
  namespaced: "User",
  state,
  mutations,
  actions,
  getters
};
