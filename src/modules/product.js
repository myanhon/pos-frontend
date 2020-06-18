import axios from "axios";
const API = require("../../config/API");

const state = {
  productArray: []
};

const mutations = {
  SAVE_ALL_PRODUCTS: (state, data) => {
    state.productArray = data;
  }
};

const actions = {
  fetchAllProducts: ({ commit }) => {
    axios
      .get(API.product.FETCH_ALL_PRODUCTS_API)
      .then(response => {
        commit("SAVE_ALL_PRODUCTS", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  uploadFile: ({ commit }, image) => {
    const formData = new FormData();
    formData.append("name", "genglol");
    formData.append("price", 5);
    formData.append("size", "Medium");
    formData.append("category", "Cold Drink");
    formData.append("productImage", image);

    axios
      .post("http://localhost:3000/upload", formData)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  },
  addProduct: ({ commit }, product) => {
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("size", product.size);
    formData.append("category", product.category);
    formData.append("productImage", product.image);
    axios
      .post(API.product.ADD_PRODUCT_API, formData)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
};

const getters = {
  getAllProducts: state => {
    return state.productArray;
  },
  getColdDrinks: state => {
    return state.productArray.filter(drink => drink.category === "Cold Drinks");
  }
};

export default {
  namespaced: "Product",
  state,
  mutations,
  actions,
  getters
};
