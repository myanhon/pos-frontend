<template>
  <v-app>
    <Grid></Grid>
    <Toolbar fixed></Toolbar>
  </v-app>
</template>

<script>
import Grid from "./components/Grid";
import Toolbar from "./components/Toolbar";
export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    Toolbar,
    Grid
  }
};
</script>
