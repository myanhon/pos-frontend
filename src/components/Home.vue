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
    <v-bottom-navigation id="footer" grow dark shift>
      <v-btn @click="selectedComponent = 'Drinks'" value="drinks">
        <span>Drinks</span>
        <v-icon>local_drink</v-icon>
      </v-btn>

      <v-btn @click="selectedComponent = 'Lunch'" value="lunch">
        <span>Lunch</span>
        <v-icon>mdi-food-variant</v-icon>
      </v-btn>

      <v-btn @click="selectedComponent = 'Dinner'" value="dinner">
        <span>Dinner</span>
        <v-icon>fastfood</v-icon>
      </v-btn>

      <v-btn @click="selectedComponent = 'Wine'" value="wine">
        <span>Wine</span>
        <v-icon>format_color_fill</v-icon>
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
  background-color: #dcdcdc;
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
