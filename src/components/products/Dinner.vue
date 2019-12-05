<template>
  <v-app>
<!--    <Grid name="Dinner" :category="category"></Grid>-->
  </v-app>
</template>

<script>
import Grid from "../Grid";

export default {
  data() {
    return {
      category: [
        {
          drinks: [{name:"Tea"},{name:"Soda"}]
        },
        {
          dinner: [{name:"Meat"},{name:"Soda"},{name:"Alcohol"},{name:"Wine"}]
        },
        {
          lunch: [{name:"Meat"},{name:"Soda"}]
        }
      ]
    };
  },
  components: {
    Grid
  }
};
</script>
