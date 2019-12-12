<template>
  <v-app id="inspire">
    <v-content>
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
                    label="E-mail"
                    name="login"
                    prepend-icon="person"
                    type="text"
                  />

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                  />
                </v-form>
              </v-card-text>
              <v-row style="padding-bottom: 2%" align="center" justify="center">
                <v-btn color="primary">Login</v-btn>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
export default {
  name: "Register",
  data: () => ({
    //
  }),
  props: {
    source: String
  }
};
</script>

<style scoped>
#rowButton {
  padding-bottom: 10px;
}
</style>
