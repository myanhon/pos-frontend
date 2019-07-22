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

    <v-card height="150px" flat>
      <!--      <div class="headline text-xs-center pa-5">Active: {{ bottomNav }}</div>-->
      <v-bottom-nav
        :active.sync="bottomNav"
        :value="true"
        absolute
        color="transparent"
      >
        <v-btn color="teal" flat value="lunch">
          <span>Lunch</span>
          <v-icon>history</v-icon>
        </v-btn>

        <v-btn color="teal" flat value="dinner">
          <span>Dinner</span>
          <v-icon>favorite</v-icon>
        </v-btn>

        <v-btn color="teal" flat value="drinks">
          <span>Drinks</span>
          <v-icon>place</v-icon>
        </v-btn>
        <v-btn color="teal" flat value="wine">
          <span>Wine</span>
          <v-icon>place</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      bottomNav: "recent"
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
