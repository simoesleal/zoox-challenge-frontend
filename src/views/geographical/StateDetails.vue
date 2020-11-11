<template>
  <div>
    <BaseTitle :title="'Estado'"></BaseTitle>
    <BaseCard>
      <template #card-text>
        <BaseCardText>
          <v-container>
            <v-row>
              <v-col cols="4">
                <BaseInput
                  v-model="state.name"
                  dense
                  :outlined="true"
                  :label="'Estado:'"
                  type="text"
                ></BaseInput>
              </v-col>
              <v-col cols="2">
                <BaseInput
                  v-model="state.abbreviation"
                  dense
                  :outlined="true"
                  :label="'UF:'"
                  type="text"
                ></BaseInput>
              </v-col>
              <v-col cols="2">
                <BaseInput
                  v-model="state.region"
                  dense
                  :outlined="true"
                  :label="'Região:'"
                  type="text"
                ></BaseInput>
              </v-col>
            </v-row>
          </v-container>
        </BaseCardText>
      </template>
      <template #card-actions>
        <BaseCardActions class="d-flex justify-end pa-6">
          <div v-if="actionType === 'CREATE'">
            <BaseButton :dark="true" @click="insert()"
              ><v-icon class="mr-3" dark>mdi-content-save</v-icon>
              <span>salvar</span></BaseButton
            >
          </div>
          <div v-else-if="actionType === 'UPDATE'">
            <BaseButton :dark="true" @click="delet()"
              ><v-icon class="mr-3" dark>mdi-content-save</v-icon>
              <span>deletar</span></BaseButton
            >
            <BaseButton :dark="true" @click="update()"
              ><v-icon class="mr-3" dark>mdi-content-save</v-icon>
              <span>atualizar</span></BaseButton
            >
          </div>
        </BaseCardActions>
      </template>
    </BaseCard>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "StateDetails",

  data: () => ({
    state: {
      name: null,
      abbreviation: null,
      region: [],
    },
  }),

  computed: {
    ...mapState("GeoStates", ["actionType", "stateDetails"]),
  },

  methods: {
    ...mapActions("GeoStates", ["insertState", "updateState", "deleteState"]),

    async insert() {
      const payload = this.state;
      await this.insertState(payload);
    },

    async update() {
      await this.updateState(this.state);
    },

    async delet() {
      await this.deleteState(this.state.Id);
    },
  },

  created() {
    if (this.actionType === "UPDATE") {
      this.state = { ...this.stateDetails };
    }
  },
};
</script>

<style></style>
