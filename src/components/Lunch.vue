<template>
  <v-app>
    <Grid :category="category" name="Lunch"></Grid>
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
        }
      ]
    };
  },
  components: {
    Grid
  }
};
</script>
