<template>
  <v-footer app color="white" id="the-footer" inset>
    <span class="text-caption ma-1"
      ><span>Zoox</span> &copy; {{ new Date().getFullYear() }}</span
    >
  </v-footer>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style scoped>
#the-footer {
  justify-content: flex-end;
  padding-right: 10px;
}
</style>
