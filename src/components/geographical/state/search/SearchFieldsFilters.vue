<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="5" xl="4">
          <BaseInput
            v-model.trim.lazy="name"
            id="state-name-filter"
            name="state-name-filter"
            :clearable="true"
            dense
            label="Estado"
            outlined
            type="text"
            :backgroundColor="'white'"
          ></BaseInput>
        </v-col>
        <v-col>
          <BaseButton :dark="true">Buscar</BaseButton>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "SearchFieldsFilters",
  data: () => ({
    name: null,
  }),
  computed: {},
  methods: {},
};
</script>

<style></style>
