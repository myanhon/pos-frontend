import axios from "axios";
const API = require("../../config/API");
import router from "../router";
import toast from "../../config/toast";

const state = {
  status: null,
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
  }
};

const actions = {
  register: ({ commit }, user) => {
    commit("AUTH_REQUEST");
    axios
      .post(API.user.REGISTER_API, {
        name: user.name,
        email: user.email,
        password: user.password
      })
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

function _clearTokens() {
  console.log("cleartokens");
  axios.defaults.headers.common["authorization"] = null;
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
}
function _setTokens(response) {
  axios.defaults.headers.common["authorization"] = response.data.accessToken;
  localStorage.setItem("accessToken", response.data.accessToken);
  localStorage.setItem("refreshToken", response.data.refreshToken);
  router.push({ name: "Home" });
}
const getters = {
  getStatus: state => {
    return state.status;
  }
};

export default {
  namespaced: "User",
  state,
  mutations,
  actions,
  getters
};
