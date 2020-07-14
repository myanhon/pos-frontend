<template>
  <v-app>
    <Reveal>
      <a id="home" href="#">
        <router-link to="/" class="remove-underline">
          <span>Home </span></router-link
        >
      </a>
      <a id="home" href="#">
        <router-link to="/" class="remove-underline">
          <span @click="logout">Logout </span></router-link
        >
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
import { mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  components: {
    Reveal,
    Products
  },
  methods: {
    ...mapActions("User", ["logout"]),
    ...mapActions("Product", ["fetchAllProducts"])
  },
  created() {
    this.fetchAllProducts();
  }
};
</script>
<style scoped>
.remove-underline {
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  margin-left: 10px;
}
</style>
