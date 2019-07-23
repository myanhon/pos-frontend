<template>
  <v-app>
    <Grid :products="products"></Grid>
  </v-app>
</template>

<script>
import Grid from "./Grid";
export default {
  data() {
    return {
      products: [
        {
          name: "White Wine",
          price: 2.5
        },
        {
          name: "Red Wine",
          price: 3
        },
        { name: "Blue Wine", price: 10 }
      ]
    };
  },
  components: {
    Grid
  }
};
</script>
