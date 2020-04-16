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
              <span>I'm The About Page!</span>
              <v-spacer />
              <v-btn dark fab small color="green" @click="goToHomePage">
                <v-icon>arrow_back</v-icon>
              </v-btn>
            </v-toolbar>
            <v-cardtext class="pa-10">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nam impedit rerum possimus tempora obcaecati blanditiis sed dolores recusandae tempore nemo dolore, earum officiis unde soluta odit quos molestias ratione.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quis blanditiis, culpa sequi quod dolore nesciunt obcaecati possimus molestiae, dolores deleniti magni quam doloremque numquam veritatis ut nisi, vero hic!</p>
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
    goToHomePage() {
      this.$router.push("Home");
    }
  }
};
</script>

<style>
</style>