<template>
  <v-content><h1>DRINKS</h1></v-content>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// import Grid from "../Grid";
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
    // Grid
  }
};
</script>
