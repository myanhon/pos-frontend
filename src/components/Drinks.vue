<template>
  <v-app>
    <Grid :products="products" name="Drinks"></Grid>
  </v-app>
</template>

<script>
import Grid from "./Grid";
export default {
  data() {
    return {
      products: [
        {
          name: "Coco Cola",
          price: 2.5
        },
        {
          name: "Fanta",
          price: 3
        },
        { name: "Tea", price: 10 }
      ]
    };
  },
  components: {
    Grid
  }
};
</script>
