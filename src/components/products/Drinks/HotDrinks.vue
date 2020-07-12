<template>
  <LoadProducts :products="this.getHotDrinks"></LoadProducts>
</template>

<script>
import { mapGetters } from "vuex";
import LoadProducts from "../LoadProducts";
export default {
  components: {
    LoadProducts
  },
  computed: {
    ...mapGetters("Product", ["getHotDrinks"])
  }
};
</script>
