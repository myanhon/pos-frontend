<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title
              >Your Total ${{ this.getTotalPrice }}
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <!--            <v-form>-->
            <!--              <v-text-field-->
            <!--                label="Name"-->
            <!--                name="name"-->
            <!--                type="text"-->
            <!--                v-model="data.email"-->
            <!--                @keyup.enter="login(data)"-->
            <!--              />-->

            <!--              <v-text-field-->
            <!--                label="Address"-->
            <!--                name="address"-->
            <!--                type="text"-->
            <!--                v-model="data.password"-->
            <!--                @keyup.enter="login(data)"-->
            <!--              />-->
            <!--              <v-text-field-->
            <!--                label="Card Holder Name"-->
            <!--                name="card holder name"-->
            <!--                type="text"-->
            <!--                v-model="data.password"-->
            <!--                @keyup.enter="login(data)"-->
            <!--              />-->
            <!--              <v-text-field-->
            <!--                label="Credit Card Number"-->
            <!--                name="credit card number"-->
            <!--                type="text"-->
            <!--                v-model="data.password"-->
            <!--                @keyup.enter="login(data)"-->
            <!--              />-->
            <!--              <v-text-field-->
            <!--                label="Expiration Month"-->
            <!--                name="expiration month"-->
            <!--                type="text"-->
            <!--                v-model="data.password"-->
            <!--                @keyup.enter="login(data)"-->
            <!--              />-->
            <!--              <v-text-field-->
            <!--                label="CVC"-->
            <!--                name="cvc"-->
            <!--                type="text"-->
            <!--                v-model="data.password"-->
            <!--                @keyup.enter="login(data)"-->
            <!--              />-->
            <!--              <v-row style="padding-bottom: 2%" align="center" justify="center">-->
            <!--                <v-btn @click="login(data)" color="primary">Buy </v-btn>-->
            <!--              </v-row>-->
            <!--            </v-form>-->

            <div ref="card"></div>
            <button v-on:click="purchase">Purchase</button>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
let stripe = window.Stripe(process.env.VUE_APP_STRIPE_PK),
  elements = stripe.elements(),
  card = undefined;
export default {
  name: "Checkout",
  data: () => ({
    data: { email: null, password: null },
    publishableKey: process.env.VUE_APP_STRIPE_PK
  }),
  computed: {
    ...mapGetters("Cart", ["getAllItems", "getTotalPrice"])
  },
  mounted() {
    card = elements.create("card");
    card.mount(this.$refs.card);
  },
  methods: {
    purchase() {
      stripe.createToken(card).then(function(result) {
        // Access the token with result.token
        console.log(result);
      });
    }
  }
};
</script>

<style scoped></style>
