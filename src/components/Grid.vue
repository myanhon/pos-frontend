<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col class="box1" sm="6" md="5" lg="9">
        <v-img
          src="https://www.horecagoedkoop.nl/media/catalog/product/cache/5a646e18d8b689d94099823e11c671ad/c/o/coca-cola-nl-blik.jpg"
          lazy-src="https://picsum.photos/id/11/10/6"
          aspect-ratio="1"
          class="grey lighten-2"
          max-width="200"
          max-height="200"
        ></v-img>
        <p>Price: 2.50</p>


      </v-col>
      <v-col class="box2" sm="6" md="5" offset-md="2" lg="3" offset-lg="0">
        <v-card class="pa-2" outlined tile>
          .col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.box1 {
  background-color: red;
}
.box2 {
  background-color: blue;
}
</style>

<script>
export default {
  data: () => ({
    //
  })
};
</script>
