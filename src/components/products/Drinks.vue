<template>
  <v-app>
    <!--        <Grid :products="products" name="Drinks"></Grid>-->
    <!--    {{ getAllProducts }}-->
    <h1>DRINKS</h1>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    //
  }),
  components: {},
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
