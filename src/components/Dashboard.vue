<template>
  <v-app>
    <Reveal>
      <a id="home" href="http://localhost:8080/">
        <span>Home</span>
      </a>
      <a id="home" href="#">
        <span>Products</span>
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
