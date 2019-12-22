<template>
  <v-app>
    <v-content> <router-view></router-view></v-content>
    <Toolbar v-if="getStatus === 'Success'"></Toolbar>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Toolbar from "./components/Toolbar";

export default {
  name: "App",

  data: () => ({
    //
  }),
  methods: {
    ...mapActions("User", ["verify"])
  },
  mounted() {
    console.log(this.getStatus);
  },
  computed: {
    ...mapGetters("User", ["getStatus"])
  },
  components: {
    Toolbar
  }
};
</script>
