<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",

  data: () => ({
    //
  }),
  methods: {
    ...mapActions("User", ["verify"])
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Oswald:700&display=swap");
</style>
