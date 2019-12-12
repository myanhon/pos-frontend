import axios from "axios";
const API = require("../../config/API");

const state = {};

const mutations = {};

const actions = {
  fetchJWT() {
    axios
      .get(API.user.FETCH_JWT_API)
      .then(response => {
        axios.defaults.headers.common["x-csrf-token"] = response.data.csrfToken;
      })
      .catch(error => {
        console.log(error.response);
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
