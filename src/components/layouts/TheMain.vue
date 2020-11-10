<template>
  <v-main id="the-main">
    <!-- Provides the application the proper gutter -->
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "TheMain",
};
</script>

<style scoped>
</style>
