<template>
  <v-container fluid>
    <v-flex xs12 sm6 md4 lg2>
      <v-card v-for="colddrink in this.getColdDrinks" :key="colddrink.name">
        <v-img :src="imageurl(colddrink.url)" aspect-ratio="1.7"></v-img>
        <p class="font-weight-bold text-primary text-center">
         Price: ${{ colddrink.price }}
        </p>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// import Grid from "../Grid";
export default {
  data: () => ({
    imageurl: url => {
      return require("@/assets/" + url);
    }
  }),
  methods: {
    ...mapActions("Product", ["fetchAllProducts"])
  },
  mounted() {
    this.fetchAllProducts();
  },
  computed: {
    ...mapGetters("Product", ["getAllProducts", "getColdDrinks"])
  },
  components: {
    // Grid
  }
};
</script>
