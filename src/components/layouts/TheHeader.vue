<template>
  <div v-if="isAuth">
    <v-app-bar id="header" app fixed clipped-left elevation="1" color="white">
      <v-app-bar-nav-icon @click.stop="setMenuDrawer" />
      <v-toolbar-title>
        <v-img
          class="mr-n16"
          contain
          height="50px"
          alt="Logo"
          src="../../assets/challenge-logo.png"
        />
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <span class="mr-6">{{ account.name }}</span>
      <v-menu bottom left>
        <template v-slot:activator="{ on }">
          <v-avatar color="grey" v-on="on" class="mr-12">
            <v-icon dark>mdi-account-circle</v-icon>
          </v-avatar>
        </template>
        <v-list two-line>
          <v-list-item>
            <v-btn @click="logoutAccount" small dark>
              <v-icon class="mr-3" dark>mdi-logout</v-icon>SAIR
            </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
      <BaseLinearProgress
        :active="this.$store.state.Loader.linearLoaderStatus"
        bottom
        fixed
        indeterminate
      />
    </v-app-bar>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "TheHeader",
  methods: {
    ...mapActions("MenuToggle", ["setMenuDrawer"]),
    ...mapActions("Auth", ["logout"]),
    async logoutAccount() {
      try {
        await this.logout();
        this.$router.push({ name: "auth" });
      } catch (error) {
        this.$router.push({ name: "auth" });
      }
    },
  },
  computed: {
    ...mapState("Auth", ["account"]),
    ...mapGetters("Auth", ["isAuth"]),
  },
};
</script>

<style scoped></style>
