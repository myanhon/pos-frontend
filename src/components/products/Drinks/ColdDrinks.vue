<template>
  <LoadProducts :products="this.getColdDrinks"></LoadProducts>
</template>

<script>
import { mapGetters } from "vuex";
import LoadProducts from "../LoadProducts";
export default {
  components: {
    LoadProducts
  },
  computed: {
    ...mapGetters("Product", ["getColdDrinks"])
  }
};
</script>
