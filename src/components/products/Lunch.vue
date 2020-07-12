<template>
  <LoadProducts :products="this.getLunch"></LoadProducts>
</template>

<script>
import { mapGetters } from "vuex";
import LoadProducts from "./LoadProducts";
export default {
  components: {
    LoadProducts
  },
  computed: {
    ...mapGetters("Product", ["getLunch"])
  }
};
</script>
