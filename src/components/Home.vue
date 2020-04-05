<template>
  <v-content>
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col class="box1" sm="6" md="5" lg="10">
          <component :is="selectedComponent"></component>
        </v-col>
        <v-col
          class="box2  flex-lg-grow-0 "
          sm="6"
          md="5"
          offset-md="2"
          lg="2"
          offset-lg="0"
          v-if="this.getAllItems != null && this.getAllItems.length > 0"
          v-cloak
        >
          <v-card class="pa-2" outlined tile>
            <v-list-item v-for="(products, i) in getAllItems" :key="i">
              <v-list-item-content>
                <v-list-item-title>
                  <p class="pt-2">{{ products.item.name }}</p>
                </v-list-item-title>
                <v-list-item-subtitle>
                  <p>Qty: {{ products.qty }} Price: ${{ products.price }}</p>
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-hover v-slot:default="{ hover }">
                <v-list-item-icon>
                  <v-icon
                    :elevation="hover ? 16 : 2"
                    @click="addProductToCart(products.item._id)"
                    >mdi-plus</v-icon
                  >
                  <v-icon @click="reduceOneFromCart(products.item._id)" left
                    >mdi-minus</v-icon
                  >
                  <v-icon @click="removeFromCart(products.item._id)" right
                    >mdi-close</v-icon
                  >
                </v-list-item-icon>
              </v-hover>
            </v-list-item>
            <v-row no-gutters>
              <v-col
                class="pt-4"
                sm="6"
                md="5"
                offset-md="2"
                lg="6"
                offset-lg="0"
              >
                <p
                  class="ps-4"
                  v-if="this.getTotalPrice != null && this.getTotalPrice > 0"
                >
                  TOTAL:
                </p>
              </v-col>
              <v-col
                class="pt-4"
                sm="6"
                md="5"
                offset-md="2"
                lg="6"
                offset-lg="0"
              >
                <p
                  class="text-lg-right pr-4"
                  v-if="this.getTotalPrice != null && this.getTotalPrice > 0"
                >
                  ${{ this.getTotalPrice }}
                </p>
              </v-col></v-row
            >
          </v-card>
          <router-link to="/checkout" class="remove-underline">
            <div
              class="d-block pa-2 green accent-3 accent-4 white--text text-center font-weight-bold"
            >
              CHECKOUT
            </div>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
    <v-bottom-navigation id="footer" grow dark shift>
      <v-btn @click="selectedComponent = 'Drinks'" value="drinks">
        <span>Drinks</span>
        <v-icon>fas fa-glass-whiskey</v-icon>
      </v-btn>

      <v-btn @click="selectedComponent = 'Lunch'" value="lunch">
        <span>Lunch</span>
        <v-icon>fastfood</v-icon>
      </v-btn>

      <v-btn @click="selectedComponent = 'Dinner'" value="dinner">
        <span>Dinner</span>
        <v-icon>fas fa-utensils</v-icon>
      </v-btn>

      <v-btn @click="selectedComponent = 'Wine'" value="wine">
        <span>Wine</span>
        <v-icon>fas fa-wine-bottle</v-icon>
      </v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on">
            <span>Account</span>
            <v-icon>fas fa-user</v-icon>
          </v-btn>
        </template>
        <v-list class="text-center">
          <v-list-item-content v-if="getStatus === 'Success'">
            <v-list-item v-for="(item, index) in loggedIn" :key="index">
              <v-list-item-title>
                <router-link
                  class="pointer"
                  :to="item.url"
                  @click="item.method()"
                >
                  {{ item.title }}</router-link
                >
                <p class="pointer" @click="logout()">
                  Logout
                </p>
              </v-list-item-title>
            </v-list-item>
          </v-list-item-content>
          <v-list-item-content v-else>
            <v-list-item v-for="(item, index) in notLoggedIn" :key="index">
              <v-list-item-title>
                <router-link :to="item.url"> {{ item.title }}</router-link>
              </v-list-item-title>
            </v-list-item>
          </v-list-item-content>
        </v-list>
      </v-menu>
    </v-bottom-navigation>
  </v-content>
</template>
<script>
import Drinks from "./products/Drinks";
import Lunch from "./products/Lunch";
import Dinner from "./products/Dinner";
import Wine from "./products/Wine";
import Profile from "./user/Profile";
import { mapActions, mapGetters } from "vuex";

export default {
  data: () => ({
    selectedComponent: "Drinks",
    loggedIn: [{ title: "My Orders", url: "/profile" }],
    notLoggedIn: [
      { title: "Login", url: "/login" },
      { title: "Register", url: "/register" }
    ]
  }),
  components: { Drinks, Lunch, Dinner, Wine, Profile },
  computed: {
    ...mapGetters("Cart", ["getAllItems", "getTotalPrice"]),
    ...mapGetters("User", ["getStatus"])
  },
  methods: {
    ...mapActions("Cart", [
      "addProductToCart",
      "reduceOneFromCart",
      "removeFromCart"
    ]),
    ...mapActions("Product", ["fetchAllProducts"]),
    ...mapActions("User", ["logout"])
  },
  created() {
    this.fetchAllProducts();
  }
};
</script>

<style scoped>
.v-application a {
  text-decoration: none;
  font-family: "Oswald", sans-serif;
  color: black;
}
.pointer {
  font-family: "Oswald", sans-serif;
  cursor: pointer;
  margin-top: 20%;
}
p {
  font-family: "Oswald", sans-serif;
}
.box1 {
  background-color: #dcdcdc;
}
.box2 {
  background-color: blue;
}
span {
  font-size: 20px;
}
#footer {
  position: fixed;
}
.remove-underline {
  text-decoration: none;
}
</style>
