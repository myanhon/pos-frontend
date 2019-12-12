<template>
  <v-bottom-navigation id="footer" dark shift>
    <v-btn>
      <span>Video</span>
      <v-icon>mdi-television-play</v-icon>
    </v-btn>

    <v-btn>
      <span>Music</span>
      <v-icon>music_note</v-icon>
    </v-btn>

    <v-btn>
      <span>Book</span>
      <v-icon>mdi-book</v-icon>
    </v-btn>

    <v-btn>
      <span>Image</span>
      <v-icon>mdi-image</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({
    //
  })
};
</script>

<style scoped>
span {
  font-size: 20px;
}
#footer {
  position: fixed;
}
</style>
