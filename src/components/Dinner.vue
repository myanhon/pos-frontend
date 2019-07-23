<template>
  <v-app>
    <Grid :category="category"></Grid>
  </v-app>
</template>

<script>
import Grid from "./Grid";

export default {
  data() {
    return {
      category: [
        {
          name: "Meat"
        },
        {
          name: "Vegetable"
        },
        { name: "Fish" }
      ]
    };
  },
  components: {
    Grid
  }
};
</script>
