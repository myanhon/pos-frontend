<template>
  <LoadProducts :products="this.getAlcohols"></LoadProducts>
</template>

<script>
import { mapGetters } from "vuex";
import LoadProducts from "./LoadProducts";
export default {
  components: {
    LoadProducts
  },
  computed: {
    ...mapGetters("Product", ["getAlcohols"])
  }
};
</script>
