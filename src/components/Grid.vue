<template>
  <v-container fluid grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs9>
        <v-card dark color="primary">
          <v-card-text class="px-0">{{ name }}</v-card-text>
          <v-layout row wrap>
            <v-flex xs12>
              {{ category }}
              {{ products }}
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card dark color="primary">
          <v-card-text class="px-0">Order Details</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style>
.container {
  padding: 0px !important;
}
</style>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    category: {
      type: Array,
      required: false
    },
    products: {
      type: Array,
      required: false
    }
  }
};
</script>
