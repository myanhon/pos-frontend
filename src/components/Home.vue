<template>
  <v-content>
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col class="box1" sm="6" md="5" lg="9">
          <component :is="selectedComponent"></component>
        </v-col>
        <v-col class="box2" sm="6" md="5" offset-md="2" lg="3" offset-lg="0">
          <v-card class="pa-2" outlined tile>
            .col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-bottom-navigation id="footer" dark shift>
      <v-btn
        @click="selectedComponent = 'Drinks'"
        color="green lighten-1"
        value="drinks"
      >
        <span>Drinks</span>
        <v-icon>local_drink</v-icon>
      </v-btn>

      <v-btn
        @click="selectedComponent = 'Lunch'"
        color="red lighten-1"
        value="lunch"
      >
        <span>Lunch</span>
        <v-icon>music_note</v-icon>
      </v-btn>

      <v-btn
        @click="selectedComponent = 'Dinner'"
        color="purple lighten-1"
        value="dinner"
      >
        <span>Dinner</span>
        <v-icon>mdi-book</v-icon>
      </v-btn>

      <v-btn
        @click="selectedComponent = 'Wine'"
        color="lime lighten-1"
        value="wine"
      >
        <span>Wine</span>
        <v-icon>mdi-image</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-content>
</template>

<script>
import Drinks from "./products/Drinks";
import Lunch from "./products/Lunch";
import Dinner from "./products/Dinner";
import Wine from "./products/Wine";

export default {
  data: () => ({
    selectedComponent: "Drinks"
  }),
  components: { Drinks, Lunch, Dinner, Wine }
};
</script>

<style scoped>
.box1 {
  background-color: purple;
}
.box2 {
  background-color: blue;
}
span {
  font-size: 20px;
}
#footer {
  position: fixed;
}
</style>
