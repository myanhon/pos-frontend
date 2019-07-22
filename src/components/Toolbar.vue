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
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-card  flat>
      <!--      <div class="headline text-xs-center pa-5">Active: {{ bottomNav }}</div>-->
      <v-bottom-nav
        :active.sync="bottomNav"
        :value="true"
        absolute
        color="transparent"
      >
        <v-btn color="pink darken-3" flat value="lunch">
          <span>Lunch</span>
          <i class="fas fa-bread-slice fa-2x"></i>
        </v-btn>

        <v-btn color="deep-purple darken-3" flat value="dinner">
          <span>Dinner</span>
          <i class="fas fa-utensils fa-2x"></i>
        </v-btn>

        <v-btn color="light-green darken-3" flat value="drinks">
          <span>Drinks</span>
          <i class="material-icons" style="font-size: 2em">
            local_drink
          </i>
        </v-btn>
        <v-btn color="purple darken-3" flat value="wine">
          <span>Wine</span>
          <i class="fas fa-wine-glass fa-2x"></i>
        </v-btn>
      </v-bottom-nav>
    </v-card>
  </v-app>
</template>

<style>
span {
  font-size: 20px;
}
</style>
