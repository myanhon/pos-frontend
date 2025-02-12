import axios from "axios";
import router from "../router";
const API = require("../../config/API");

const state = {
  status: null,
  productArray: []
};

const mutations = {
  SAVE_ALL_PRODUCTS: (state, data) => {
    state.productArray = data;
    state.status = "fetched successfully";
  },
  ADD_PRODUCT: state => {
    state.status = "added product successfully";
  },
  DELETE_PRODUCT: state => {
    state.status = "delete product successfully";
  }
};

const actions = {
  fetchAllProducts: ({ commit }) => {
    axios
      .get(API.product.FETCH_ALL_PRODUCTS_API, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken")
        },
        withCredentials: true
      })
      .then(response => {
        commit("SAVE_ALL_PRODUCTS", response.data);
      })
      .catch(error => {
        if (error.response.status === 403) {
          getRefreshToken();
        }
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
    if (product._id) formData.append("_id", product._id);
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("size", product.size);
    formData.append("category", product.category);
    formData.append("productImage", product.image);

    axios
      .post(API.product.ADD_PRODUCT_API, formData, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken")
        },
        withCredentials: true
      })
      .then(response => {
        commit("ADD_PRODUCT");
        console.log(response);
      })
      .catch(error => {
        if (error.response.status === 403) {
          getRefreshToken();
        }
        console.log(error);
      });
  },

  deleteProduct: ({ commit }, id) => {
    axios
      .delete(API.product.DELETE_PRODUCT_API, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken")
        },
        withCredentials: true,
        data: { _id: id }
      })
      .then(() => {
        commit("DELETE_PRODUCT");
      })
      .catch(error => {
        if (error.response.status === 403) {
          getRefreshToken();
        }
        console.log(error);
      });
  }
};
function _clearTokens() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  router.push({ name: "Home" });
}

function getRefreshToken() {
  axios
    .post(API.user.GET_REFRESH_TOKEN_API, {
      refreshToken: localStorage.getItem("refreshToken")
    })
    .then(response => {
      localStorage.setItem("accessToken", response.data.accessToken);
      location.reload();
    })
    .catch(er => {
      console.log(er);
      _clearTokens();
    });
}
const getters = {
  getStatus: state => {
    return state.status;
  },
  getAllProducts: state => {
    return state.productArray;
  },
  getColdDrinks: state => {
    return state.productArray.filter(drink => drink.category === "Cold Drinks");
  },
  getHotDrinks: state => {
    return state.productArray.filter(drink => drink.category === "Hot Drinks");
  },
  getDinners: state => {
    return state.productArray.filter(drink => drink.category === "Dinner");
  },
  getLunch: state => {
    return state.productArray.filter(drink => drink.category === "Lunch");
  },
  getAlcohols: state => {
    return state.productArray.filter(drink => drink.category === "Alcohol");
  }
};

export default {
  namespaced: "Product",
  state,
  mutations,
  actions,
  getters
};
