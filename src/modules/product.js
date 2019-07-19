import axios from "axios";

const state = {};

const mutations = {};

const actions = {
  getAllProducts({ commit }, productData) {
    axios.get("http://localhost:3000/api/todos/test").then(response => {
      console.log(response);
    });
  }
};

const getters = {};

export default {
  namespaced: "product",
  state,
  mutations,
  actions,
  getters
};
