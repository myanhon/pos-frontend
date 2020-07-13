// const apiServerUrl = process.env.VUE_APP_API_URL || "http://localhost:1000";
//
// const authServerUrl = process.env.VUE_APP_AUTH_URL || "http://localhost:2000";

const apiServerUrl = process.env.VUE_APP_API_URL || "http://pos.backend.io";

const authServerUrl = process.env.VUE_APP_AUTH_URL || "http://pos.auth.io";

console.log("api running on:", apiServerUrl);
console.log("auth running on:", authServerUrl);

const backEnd = {
  product: {
    FETCH_ALL_PRODUCTS_API: apiServerUrl + "/products",
    ADD_PRODUCT_API: apiServerUrl + "/product",
    DELETE_PRODUCT_API: apiServerUrl + "/product"
  },
  user: {
    FETCH_JWT_API: authServerUrl + "/user/signup",
    GET_USER_ORDERS: apiServerUrl + "/user/orders",
    REGISTER_API: authServerUrl + "/register",
    LOGIN_API: authServerUrl + "/login",
    LOGOUT_API: authServerUrl + "/logout",
    VERIFY_TOKEN_API: authServerUrl + "/verify",
    GET_REFRESH_TOKEN_API: authServerUrl + "/refreshToken"
  },
  cart: {
    ADD_PRODUCT_CART_API: apiServerUrl + "/add-to-cart/",
    GET_SHOPPING_CART: apiServerUrl + "/shopping-cart",
    REDUCE_ONE_FROM_CART: apiServerUrl + "/reduce-one-from-cart/",
    REMOVE_ITEM_FROM_CART: apiServerUrl + "/remove-from-cart/"
  },
  checkout: {
    POST_TOKEN_API: apiServerUrl + "/checkout"
  }
};

module.exports = backEnd;
