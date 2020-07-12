import axios from "axios";
const API = require("../../config/API");
import router from "../router";
import toast from "../../config/toast";

const state = {
  status: null,
  orders: null,
  accessToken: localStorage.getItem("accessToken"),
  refreshToken: localStorage.getItem("refreshToken")
};

const mutations = {
  AUTH_REQUEST: state => {
    state.status = "Loading";
  },
  AUTH_SUCCESS: state => {
    state.status = "Success";
  },
  AUTH_ERROR: state => {
    state.status = "Error";
  },
  LOGOUT: state => {
    state.status = null;
    state.orders = null;
    state.accessToken = null;
    state.refreshToken = null;
  },
  SAVE_ALL_ORDERS: (state, data) => {
    state.orders = data;
  }
};

const actions = {
  fetchProfile: ({ commit }) => {
    axios
      .get(API.user.GET_USER_ORDERS, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken")
        },
        withCredentials: true
      })
      .then(response => {
        commit("SAVE_ALL_ORDERS", response.data.orders);
      })
      .catch(error => {
        if (error.response.status === 403) {
          axios
            .post(API.user.GET_REFRESH_TOKEN_API, {
              refreshToken: localStorage.getItem("refreshToken")
            })
            .then(response => {
              localStorage.setItem("accessToken", response.data.accessToken);
              router.push({ name: "Home" });
            })
            .catch(er => {
              console.log(er);
              _clearTokens();
            });
        }
      });
  },
  register: ({ commit }, user) => {
    commit("AUTH_REQUEST");
    axios
      .post(
        API.user.REGISTER_API,
        {
          name: user.name,
          email: user.email,
          password: user.password
        },
        { withCredentials: true }
      )
      .then(response => {
        _setTokens(response);
        commit("AUTH_SUCCESS");
      })
      .catch(error => {
        commit("AUTH_ERROR");
        toast.error(error.response.data.message, "Error");
      });
  },
  login: ({ commit }, user) => {
    commit("AUTH_REQUEST");
    axios
      .post(
        API.user.LOGIN_API,
        {
          email: user.email,
          password: user.password
        },
        { withCredentials: true }
      )
      .then(response => {
        _setTokens(response);
        commit("AUTH_SUCCESS");
      })
      .catch(error => {
        commit("AUTH_ERROR");
        toast.error(error.response.data.message, "Error");
      });
  },
  logout: ({ commit }) => {
    axios
      .delete(API.user.LOGOUT_API, {
        data: { refreshToken: localStorage.getItem("refreshToken") },
        withCredentials: true
      })
      .then(response => {
        console.log(response);
        _clearTokens();
        commit("LOGOUT");
        // router.push({ name: "Home" });
      })
      .catch(err => {
        console.log(err);
        commit("LOGOUT");
      });
  },
  verify: ({ commit }) => {
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

function _clearRefreshToken() {
  axios
    .delete(API.user.LOGOUT_API, {
      data: { refreshToken: localStorage.getItem("refreshToken") },
      withCredentials: true
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
}

function _clearTokens() {
  console.log("cleartokens");
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
}
function _setTokens(response) {
  localStorage.setItem("accessToken", response.data.accessToken);
  localStorage.setItem("refreshToken", response.data.refreshToken);
  router.push({ name: "Home" });
}
const getters = {
  getStatus: state => {
    return state.status;
  },
  getOrders: state => {
    return state.orders;
  }
};

export default {
  namespaced: "User",
  state,
  mutations,
  actions,
  getters
};
