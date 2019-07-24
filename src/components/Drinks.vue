<template>
  <v-app>
    <Grid :category="category" :products="products" name="Drinks"></Grid>
  </v-app>
</template>

<script>
import Grid from "./Grid";
export default {
  data() {
    return {
      products: [
        {
          title: "Coca Cola",
          src:
            "https://www.myamericanmarket.com/873-large_default/coca-cola-classic.jpg",
          flex: 2
        },
        {
          title: "Fanta",
          src:
            "https://digitalcontent.api.tesco.com/v1/media/ghs/snapshotimagehandler_384551760.jpeg?h=540&w=540",
          flex: 2
        },
        {
          title: "Sprite",
          src:
            "https://cdn.shopify.com/s/files/1/1511/0050/products/Sprite_1024x1024.png?v=1528134246",
          flex: 2
        }
      ],
      category: [{ name: "Tea" }, { name: "Soda" }]
    };
  },
  components: {
    Grid
  }
};
</script>
