<template>
  <v-container fluid>
    <v-row>
      <v-col
        sm="3"
        md="4"
        lg="2"
        v-for="colddrink in this.getColdDrinks"
        :key="colddrink.name"
        class="box1 font-weight-bold text-primary text-center "
        v-cloak
      >
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 16 : 2" flat>
            <v-img
              class="grey--text--text align-end"
              :src="serverUrl + colddrink.productImage"
              aspect-ratio="1.7"
              v-on:click="addProductToCart(colddrink._id)"
            >
            </v-img>
            <p>{{ colddrink.name }}</p>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data: () => ({
    serverUrl: process.env.VUE_APP_API_URL || 'http://localhost:3000',
    url: process.env.VUE_APP_API_URL,
  }),
  methods: {
    ...mapActions('Cart', ['addProductToCart']),
  },
  computed: {
    ...mapGetters('Product', ['getColdDrinks']),
  },
};
</script>
