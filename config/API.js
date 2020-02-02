const serverUrl = "http://localhost:3000";
// const authUrl = "http://localhost:4000";

const apiUrl = {
  product: { FETCH_ALL_PRODUCTS_API: serverUrl + "/api/products" },
  user: {
    FETCH_JWT_API: serverUrl + "/user/signup",
    REGISTER_API: serverUrl + "/api/register",
    LOGIN_API: serverUrl + "/api/login",
    LOGOUT_API: serverUrl + "/api/logout",
    VERIFY_TOKEN_API: serverUrl + "/api/verify"
  },
  cart: {
    ADD_PRODUCT_CART_API: serverUrl + "/api/add-to-cart/",
    GET_SHOPPING_CART: serverUrl + "/api/shopping-cart"
  },
  checkout: {
    POST_TOKEN_API: serverUrl + "/api/checkout"
  }
};

module.exports = apiUrl;
