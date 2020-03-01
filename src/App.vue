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
  },
  created() {
    console.log('auth urlll:', process.env.VUE_APP_AUTH_URL);
    console.log('api urlll:', process.env.VUE_APP_API_URL);
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Oswald:700&display=swap");
</style>
