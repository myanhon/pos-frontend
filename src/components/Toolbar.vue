<template>
  <v-app>
    <head>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons"
        rel="stylesheet"
      />
      <title>POS</title>
    </head>
    <v-content>
      <v-container fluid>
        <component :is="selectedComponent"></component>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-card flat>
      <!--      <div class="headline text-xs-center pa-5">Active: {{ bottomNav }}</div>-->
      <v-bottom-nav
        :active.sync="bottomNav"
        :value="true"
        absolute
        height="85px"
        dark
      >
        <v-btn
          @click="selectedComponent = 'Lunch'"
          color="red lighten-1"
          flat
          value="lunch"
        >
          <span>Lunch</span>
          <i class="fas fa-bread-slice fa-2x"></i>
        </v-btn>

        <v-btn
          @click="selectedComponent = 'Dinner'"
          color="purple lighten-1"
          flat
          value="dinner"
        >
          <span>Dinner</span>
          <i class="fas fa-utensils fa-2x"></i>
        </v-btn>

        <v-btn
          @click="selectedComponent = 'Drinks'"
          color="green lighten-1"
          flat
          value="drinks"
        >
          <span>Drinks</span>
          <i class="material-icons" style="font-size: 2em">
            local_drink
          </i>
        </v-btn>
        <v-btn
          @click="selectedComponent = 'Wine'"
          color="lime lighten-1"
          flat
          value="wine"
        >
          <span>Wine</span>
          <i class="fas fa-wine-glass fa-2x"></i>
        </v-btn>
        <v-btn
          @click="selectedComponent = 'Settings'"
          color="light-blue darken-1"
          flat
          value="settings"
        >
          <span>Settings</span>
          <i class="fas fa-cog fa-2x"></i>
        </v-btn>
      </v-bottom-nav>
    </v-card>
  </v-app>
</template>

<script>
import Settings from "./Settings";
import Dinner from "./Dinner";
import Drinks from "./Drinks";
import Lunch from "./Lunch";
import Wine from "./Wine";

export default {
  data() {
    return {
      show: true,
      selectedComponent: ""
    };
  },
  components: {
    Settings,
    Dinner,
    Drinks,
    Lunch,
    Wine
  }
};
</script>

<style>
span {
  font-size: 20px;
}
</style>
