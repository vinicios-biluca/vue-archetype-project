<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="12" align="center" justify="center">
          <v-img width="100px" src="@/assets/logo.png"></v-img>
        </v-col>
        <v-col cols="12" sm="12" md="12" align="center" justify="center">
          <v-card width="500px">
            <v-toolbar dark>
              <span>Hello!</span>
              <v-spacer />
              <v-btn dark fab small color="green" @click="goToAboutPage">
                <v-icon>info</v-icon>
              </v-btn>
            </v-toolbar>
            <v-cardtext class="pa-10">
              <p>This is the Starter Project!</p>
              <p>Go On! Make Great Things!</p>
            </v-cardtext>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-footer absolute :padless="true">
      <v-card flat tile width="100%" class="green lighten-1 text-center">
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} —
          <strong>Vue</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  methods: {
    goToAboutPage() {
      this.$router.push("About");
    }
  }
};
</script>

<style>
</style>