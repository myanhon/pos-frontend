<template>
  <LoadProducts :products="this.getDinners"></LoadProducts>
</template>

<script>
import { mapGetters } from "vuex";
import LoadProducts from "./LoadProducts";
export default {
  components: {
    LoadProducts
  },
  computed: {
    ...mapGetters("Product", ["getDinners"])
  }
};
</script>
