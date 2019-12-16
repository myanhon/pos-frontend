const serverUrl = "http://localhost:3000";
const authUrl = "http://localhost:4000";

const apiUrl = {
  product: { FETCH_ALL_PRODUCTS_API: serverUrl + "/api/products" },
  user: {FETCH_JWT_API:authUrl+"/user/signup", REGISTER_API:authUrl + "/register", LOGOUT_API:authUrl+"/logout"},
};

module.exports = apiUrl;
