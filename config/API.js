const serverUrl = "http://localhost:3000";
const authUrl = "http://localhost:4000";

const apiUrl = {
  product: { FETCH_ALL_PRODUCTS_API: serverUrl + "/api/products" },
  user: {
    FETCH_JWT_API: authUrl + "/user/signup",
    REGISTER_API: authUrl + "/register",
    LOGIN_API: authUrl + "/login",
    LOGOUT_API: authUrl + "/logout",
    VERIFY_TOKEN_API: authUrl + "/verify"
  },
  cart: {
    ADD_PRODUCT_CART_API: serverUrl + "/api/add-to-cart/",
    GET_SHOPPING_CART: serverUrl + "/api/shopping-cart"
  }
};

module.exports = apiUrl;
