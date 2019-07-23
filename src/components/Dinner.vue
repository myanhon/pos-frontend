<template>
  <v-app>
    <Grid name="Dinner" :category="category"></Grid>
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
