<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card :shaped="true" class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Register </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Name"
                name="name"
                prepend-icon="person"
                type="text"
                v-model="data.name"
              />

              <v-text-field
                label="E-mail"
                name="login"
                prepend-icon="person"
                type="text"
                v-model="data.email"
              />

              <v-text-field
                id="password"
                label="Password"
                name="password"
                prepend-icon="lock"
                type="password"
                v-model="data.password"
              />
              <v-row style="padding-bottom: 2%" align="center" justify="center">
                <v-btn @click="register(data)" color="primary">Register</v-btn>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Register",
  data: () => ({
    data: { name: null, email: null, password: null }
  }),
  props: {
    source: String
  },
  created() {
    // this.logout();
  },
  computed: mapState("User", ["status"]),
  methods: {
    ...mapActions("User", ["register", "logout"])
  }
};
</script>

<style scoped>
#rowButton {
  padding-bottom: 10px;
}
</style>
