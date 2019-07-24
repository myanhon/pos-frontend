<template>
  <v-app>
    <router-view></router-view>
    <toolbar> </toolbar>
  </v-app>
</template>

<script>
import Toolbar from "./components/Toolbar";

export default {
  data() {
    return {};
  },
  components: {
    toolbar: Toolbar
  }
};
</script>

<style>
.container {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
}
</style>
