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
            label="Cidade"
            outlined
            type="text"
            :backgroundColor="'white'"
          ></BaseInput>
        </v-col>
        <v-col>
          <BaseButton :dark="true" @click="getCities({ name })"
            >Buscar</BaseButton
          >
        </v-col>
        <v-col cols="auto ml-auto">
          <BaseButton :color="'blue white--text'" @click="newCity()">
            <v-icon class="mr-2" small>mdi-plus</v-icon>Novo
          </BaseButton>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "SearchFieldsFilters",
  data: () => ({
    name: null,
  }),
  computed: {},
  methods: {
    ...mapActions("Cities", ["getCities", "resetState"]),
    ...mapActions("GeoStates", ["getStates"]),

    async newCity() {
      this.resetState();
      if (await this.getStates()) {
        this.$router.push({
          name: "CityDetails",
        });
      } else {
        alert("Um problema ocorreu, por favor, tente novamente!");
      }
    },
  },
};
</script>

<style></style>
