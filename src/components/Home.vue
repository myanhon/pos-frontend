<template>
  <v-content>
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col class="box1" sm="6" md="5" lg="10">
          <component :is="selectedComponent"></component>
        </v-col>
        <v-col class="box2" sm="6" md="5" offset-md="2" lg="2" offset-lg="0">
          <v-card class="pa-2" outlined tile>
            <v-list-item v-for="(products, i) in getAllItems" :key="i">
              <v-list-item-content>
                <v-list-item-title>
                  <p class="pt-2">{{ products.item.name }}</p>
                </v-list-item-title>
                <v-list-item-subtitle>
                  <p>Qty: {{ products.qty }} Price: ${{ products.price }}</p>
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-icon>
                <v-icon v-on:click="addProductToCart(products.item._id)"
                  >mdi-plus</v-icon
                >
                <v-icon class="" left>mdi-minus</v-icon>
                <v-icon class="" right>mdi-close</v-icon>
              </v-list-item-icon>
            </v-list-item>
            <v-row no-gutters>
              <v-col
                class="pt-4"
                sm="6"
                md="5"
                offset-md="2"
                lg="6"
                offset-lg="0"
              >
                <p class="ps-4" v-if="this.getTotalPrice !== null">
                  TOTAL:
                </p>
              </v-col>
              <v-col
                class="pt-4"
                sm="6"
                md="5"
                offset-md="2"
                lg="6"
                offset-lg="0"
              >
                <p
                  class="text-lg-right pr-4"
                  v-if="this.getTotalPrice !== null"
                >
                  ${{ this.getTotalPrice }}
                </p>
              </v-col></v-row
            >
          </v-card>
          <div
            class="d-block pa-2 green accent-3 accent-4 white--text text-center font-weight-bold"
          >
            CHECKOUT
          </div>
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
import { mapActions, mapGetters } from "vuex";

export default {
  data: () => ({
    selectedComponent: "Drinks"
  }),
  components: { Drinks, Lunch, Dinner, Wine },
  computed: {
    ...mapGetters("Cart", ["getAllItems", "getTotalPrice"])
  },
  methods: { ...mapActions("Cart", ["addProductToCart"]) }
};
</script>

<style scoped>
p {
  font-family: "Oswald", sans-serif;
}
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
