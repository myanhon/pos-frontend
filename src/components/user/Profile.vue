<template>
  <v-container class="fill-height" fluid>
    <Reveal>
      <a id="home" href="#">
        <router-link to="/" class="remove-underline">
          <span>Home </span></router-link
        >
      </a>
      <a id="home" href="#">
        <router-link to="/" class="remove-underline">
          <span @click="logout">Logout </span></router-link
        >
      </a>
    </Reveal>
    <main id="page-wrap"></main>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <h1 align="center">Welcome {{ getUser.name }}</h1>
        <v-card
          class="elevation-12"
          v-for="(order, i) in this.getOrders"
          :key="i"
        >
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Order ID:{{ order._id }} </v-toolbar-title>
          </v-toolbar>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Name</th>
                  <th class="text-left">Size</th>
                  <th class="text-left">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(items, i) in order.cart.items" :key="i">
                  <td>{{ items.item.name }}</td>
                  <td>{{ items.item.size }}</td>
                  <td>{{ items.qty }}</td>
                </tr>
              </tbody>
              <v-card-text class="font-weight-bold">
                Total price: ${{ order.cart.totalPrice }}
              </v-card-text>
            </template>
          </v-simple-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { Reveal } from "vue-burger-menu";
export default {
  name: "Login",
  data: () => ({
    homeUrl: process.env.VUE_APP_HOME_URL || "http://localhost:8080/"
  }),
  computed: {
    ...mapGetters("User", ["getOrders", "getUser"])
  },
  created() {
    this.fetchProfile();
  },
  components: {
    Reveal
  },
  methods: {
    ...mapActions("User", ["fetchProfile", "logout"])
  }
};
</script>

<style scoped>
.remove-underline {
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  margin-left: 10px;
}
</style>
