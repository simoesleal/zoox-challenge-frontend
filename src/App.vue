<template>
  <v-app id="app">
    <TheMenu />
    <TheHeader />
    <TheMain />
    <TheFooter />
  </v-app>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader";
import TheMenu from "./components/layouts/TheMenu";
import TheMain from "./components/layouts/TheMain";
import TheFooter from "./components/layouts/TheFooter";

export default {
  name: "App",
  components: {
    TheHeader,
    TheMenu,
    TheMain,
    TheFooter,
  },
  computed: {},
};
</script>

<style>
#app {
  background: #eceff1;
}
</style>
