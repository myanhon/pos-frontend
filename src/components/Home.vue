<template>
  <v-content>
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col class="box1" sm="6" md="5" lg="9">
          <component :is="selectedComponent"></component>
        </v-col>
        <v-col class="box2" sm="6" md="5" offset-md="2" lg="3" offset-lg="0">
          <v-card class="pa-2" outlined tile>
            <v-list-item v-for="(products, i) in getAllItems" :key="i">
              <v-list-item-content>
                <v-list-item-title> {{ products.item.name }}</v-list-item-title>
                <v-list-item-subtitle
                  >Quantity: {{ products.qty }}<v-spacer></v-spacer> Price: ${{
                    products.price
                  }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-icon>
                <v-icon left>fas fa-plus</v-icon>
                <v-icon left>fas fa-minus</v-icon>
                <v-chip label>
                  <v-icon left>far fa-trash-alt</v-icon>
                  Remove All
                </v-chip>
              </v-list-item-icon>
            </v-list-item>
            <p v-if="this.getTotalPrice !== null">
              Total: ${{ this.getTotalPrice }}
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-bottom-navigation id="footer" grow dark shift>
      <v-btn @click="selectedComponent = 'Drinks'" value="drinks">
        <span>Drinks</span>
        <v-icon>fas fa-glass-whiskey</v-icon>
      </v-btn>

      <v-btn @click="selectedComponent = 'Lunch'" value="lunch">
        <span>Lunch</span>
        <v-icon>fastfood</v-icon>
      </v-btn>

      <v-btn @click="selectedComponent = 'Dinner'" value="dinner">
        <span>Dinner</span>
        <v-icon>fas fa-utensils</v-icon>
      </v-btn>

      <v-btn @click="selectedComponent = 'Wine'" value="wine">
        <span>Wine</span>
        <v-icon>fas fa-wine-bottle</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-content>
</template>
<script>
import Drinks from "./products/Drinks";
import Lunch from "./products/Lunch";
import Dinner from "./products/Dinner";
import Wine from "./products/Wine";
import { mapGetters } from "vuex";

export default {
  data: () => ({
    selectedComponent: "Drinks"
  }),
  components: { Drinks, Lunch, Dinner, Wine },
  computed: {
    ...mapGetters("Cart", ["getAllItems", "getTotalPrice"])
  }
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
