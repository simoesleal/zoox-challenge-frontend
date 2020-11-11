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
          <BaseButton
            :dark="true"
            @click="getStates({ name, abbreviation, region })"
            >Buscar</BaseButton
          >
        </v-col>
        <v-col cols="auto ml-auto">
          <BaseButton :color="'blue white--text'" @click="newState()">
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
    abbreviation: null,
    region: null,
  }),
  computed: {},
  methods: {
    ...mapActions("GeoStates", ["getStates", "resetState"]),

    newState() {
      this.resetState();
      this.$router.push({
        name: "StateDetails",
      });
    },
  },
};
</script>

<style></style>
