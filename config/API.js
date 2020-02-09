const serverUrl = "http://localhost:3000";
const authUrl = "http://localhost:4000";

const apiUrl = {
  product: { FETCH_ALL_PRODUCTS_API: serverUrl + "/products" },
  user: {
    FETCH_JWT_API: authUrl + "/user/signup",
    GET_USER_ORDERS: serverUrl + "/user/orders",
    REGISTER_API: authUrl + "/register",
    LOGIN_API: authUrl + "/login",
    LOGOUT_API: authUrl + "/logout",
    VERIFY_TOKEN_API: authUrl + "/verify"
  },
  cart: {
    ADD_PRODUCT_CART_API: serverUrl + "/add-to-cart/",
    GET_SHOPPING_CART: serverUrl + "/shopping-cart",
    REDUCE_ONE_FROM_CART: serverUrl + "/reduce-one-from-cart/"
  },
  checkout: {
    POST_TOKEN_API: serverUrl + "/checkout"
  }
};

module.exports = apiUrl;
