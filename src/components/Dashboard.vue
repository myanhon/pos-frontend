<template>
  <v-app>
    <Reveal>
      <a id="home" href="#">
        <span>Home</span>
      </a>
    </Reveal>
    <main id="page-wrap">
      <Products></Products>
    </main>
  </v-app>
</template>

<script>
import { Reveal } from "vue-burger-menu";
import Products from "./admin/Products";
export default {
  data() {
    return {};
  },
  components: {
    Reveal,
    Products
  },
  created() {}
};
</script>
<style scoped></style>
