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
            <v-form>
              <v-text-field
                label="Name"
                name="name"
                type="text"
                placeholder="Card Holder Name"
                v-model="data.name"
                @change="nameNotEmpty = !nameNotEmpty"
              />
              <v-text-field
                label="Address"
                name="address"
                type="text"
                placeholder="Address"
                v-model="data.address"
                @change="addressNotEmpty = !addressNotEmpty"
              />
              <div id="app">
                <card
                  class="stripe-card"
                  :class="{ complete }"
                  :stripe="publishableKey"
                  :options="stripeOptions"
                  @change="complete = $event.complete"
                />
                4242424242424242
              </div>
              <v-row
                style="padding-bottom: 2%; padding-top:2%;"
                align="center"
                justify="center"
              >
                <v-btn
                  class="pay-with-stripe"
                  @click="pay"
                  :disabled="!isDisabled()"
                  color="primary"
                >
                  Pay with credit card
                </v-btn>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { Card, createToken } from "vue-stripe-elements-plus";

export default {
  name: "Checkout",
  data: () => ({
    data: { name: null, address: null, stripeToken: null },
    complete: false,
    nameNotEmpty: false,
    addressNotEmpty: false,
    stripeToken: null,
    publishableKey:
      process.env.VUE_APP_STRIPE_PK ||
      "pk_test_7HxXTcmwBHges4XnKksr7aIn002Kfrox9Q",
    stripeOptions: {
      // see https://stripe.com/docs/stripe.js#element-options for details
      hidePostalCode: true
    }
  }),
  components: { Card },
  computed: {
    ...mapGetters("Cart", ["getTotalPrice"])
  },
  mounted() {},
  methods: {
    ...mapActions("Checkout", ["createCharge"]),
    isDisabled() {
      return this.nameNotEmpty && this.addressNotEmpty && this.complete;
    },
    pay() {
      // createToken returns a Promise which resolves in a result object with
      // either a token or an error key.
      // See https://stripe.com/docs/api#tokens for the token object.
      // See https://stripe.com/docs/api#errors for the error object.
      // More general https://stripe.com/docs/stripe.js#stripe-create-token.
      createToken().then(response => {
        this.data.stripeToken = response.token.id;
        this.createCharge(this.data);
      });
    }
  }
};
</script>

<style scoped>
.stripe-card {
  width: 100%;
  color: #fff;
  background: transparent;
  padding: 5px 0 6px 0;
  border-bottom: 1px solid grey;
  transition: border-color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.stripe-card.complete {
  border-color: green;
}
</style>
