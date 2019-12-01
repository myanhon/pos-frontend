<template>
  <v-app>
    <!--        <Grid :products="products" name="Drinks"></Grid>-->
    {{ getAllProducts }}
  </v-app>
</template>

<script>
import Grid from "./Grid";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      // products: this.fetchAllProducts()
    };
  },
  components: {
    Grid
  },
  methods: {
    ...mapActions("Product", ["fetchAllProducts"])
  },
  mounted() {
    this.fetchAllProducts();
  },
  computed: {
    ...mapGetters("Product", ["getAllProducts"])
  }
};
</script>
