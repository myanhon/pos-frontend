<template>
  <v-container fluid>
    <v-row>
      <v-col
        sm="3"
        md="4"
        lg="2"
        v-for="(product, i) in this.products"
        :key="i"
        class="box1 font-weight-bold text-primary text-center "
        v-cloak
      >
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 16 : 2" flat>
            <v-img
              class="grey--text--text align-end"
              :src="serverUrl + product.productImage"
              aspect-ratio="1.7"
              v-on:click="addProductToCart(product._id)"
            >
            </v-img>
            <p>{{ product.name }} - {{ product.size }} ${{ product.price }}</p>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["products"],
  data: () => ({
    serverUrl: process.env.VUE_APP_API_URL || "http://localhost:3000"
  }),
  methods: {
    ...mapActions("Cart", ["addProductToCart"])
  },
  computed: {
    ...mapGetters("Product", ["getColdDrinks"])
  }
};
</script>
