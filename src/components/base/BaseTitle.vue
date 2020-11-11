<template>
  <div class="mt-n16">
    <v-container>
      <v-row>
        <v-col>
          <h2 class="text-h5">{{ title }}</h2>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "BaseTitle",
  props: {
    title: {
      type: String,
      default: undefined,
      required: true,
    },
  },
};
</script>

<style>
</style>