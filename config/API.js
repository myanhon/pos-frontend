const apiUrl = process.env.VUE_APP_API_URL || "http://localhost:3000";
const authUrl = process.env.VUE_APP_AUTH_URL || "http://localhost:4000";

const backEnd = {
  product: { FETCH_ALL_PRODUCTS_API: apiUrl + "/products" },
  user: {
    FETCH_JWT_API: authUrl + "/user/signup",
    GET_USER_ORDERS: apiUrl + "/user/orders",
    REGISTER_API: authUrl + "/register",
    LOGIN_API: authUrl + "/login",
    LOGOUT_API: authUrl + "/logout",
    VERIFY_TOKEN_API: authUrl + "/verify"
  },
  cart: {
    ADD_PRODUCT_CART_API: apiUrl + "/add-to-cart/",
    GET_SHOPPING_CART: apiUrl + "/shopping-cart",
    REDUCE_ONE_FROM_CART: apiUrl + "/reduce-one-from-cart/",
    REMOVE_ITEM_FROM_CART: apiUrl + "/remove-from-cart/"
  },
  checkout: {
    POST_TOKEN_API: apiUrl + "/checkout"
  }
};

module.exports = backEnd;
