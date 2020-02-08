<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
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
                  <th class="text-left">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(items, i) in order.cart.items" :key="i">
                  <td>{{ items.item.name }}</td>
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
export default {
  name: "Login",
  data: () => ({}),
  computed: {
    ...mapGetters("User", ["getOrders"])
  },
  created() {
    this.fetchProfile();
  },
  methods: {
    ...mapActions("User", ["fetchProfile"])
  }
};
</script>

<style scoped></style>
