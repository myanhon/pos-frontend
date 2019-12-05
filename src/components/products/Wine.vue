<template>
  <v-app>
    <Grid :category="category" :products="products" name="Wine"></Grid>
  </v-app>
</template>

<script>
import Grid from "../Grid";
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
      ],
      category: [{ name: "Alcohol" }, { name: "Soda" }]
    };
  },
  components: {
    Grid
  }
};
</script>
