<template>
  <v-app>
    <!--        <Grid :products="products" name="Drinks"></Grid>-->
    <!--    {{ getAllProducts }}-->
    <Grid></Grid>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Grid from "../Grid";
export default {
  data: () => ({
    //
  }),
  methods: {
    ...mapActions("Product", ["fetchAllProducts"])
  },
  mounted() {
    // this.fetchAllProducts();
  },
  computed: {
    ...mapGetters("Product", ["getAllProducts"])
  },
  components: {
    Grid
  }
};
</script>
