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
        <v-card flat>
          <v-img
            class="grey--text--text align-end"
            :src="imageurl(colddrink.url)"
            aspect-ratio="1.7"
            v-on:click="addProductToCart(colddrink._id)"
          >
          </v-img>
          <p>{{ colddrink.name }}</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data: () => ({
    imageurl: url => {
      return require("@/assets/" + url);
    }
  }),
  methods: {
    ...mapActions("Cart", ["addProductToCart"])
  },
  computed: {
    ...mapGetters("Product", ["getColdDrinks"])
  }
};
</script>
