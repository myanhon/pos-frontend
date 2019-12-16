<template>
  <v-app>
    <v-content> <router-view></router-view></v-content>
    <v-btn @click="verify()" color="primary">verify</v-btn>
    ></v-app
  >
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
