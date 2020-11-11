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
                  v-mask="'AA'"
                ></BaseInput>
              </v-col>
              <v-col cols="2">
                <BaseSelect
                  v-model="state.region"
                  id="state-id"
                  :backgroundColor="'white'"
                  :items="regionList"
                  :clearable="true"
                  :openOnClear="true"
                  dense
                  label="Região:"
                  outlined
                ></BaseSelect>
              </v-col>
            </v-row>
          </v-container>
        </BaseCardText>
      </template>
      <template #card-actions>
        <BaseCardActions class="d-flex justify-end pa-6">
          <div v-if="actionType === 'CREATE'">
            <BaseButton
              :disabled="!canSubmit"
              class="blue white--text"
              @click="insert()"
              ><v-icon class="mr-3" dark>mdi-content-save</v-icon>
              <span>salvar</span></BaseButton
            >
          </div>
          <div v-else-if="actionType === 'UPDATE'">
            <BaseButton class="red mr-6 white--text" @click="delet()"
              ><v-icon class="mr-3" dark>mdi-delete</v-icon>
              <span>deletar</span></BaseButton
            >
            <BaseButton :disabled="!canSubmit" class="warning" @click="update()"
              ><v-icon class="mr-3" dark>mdi-update</v-icon>
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
import { mask } from "vue-the-mask";
export default {
  name: "StateDetails",

  directives: { mask },

  data: () => ({
    state: {
      name: null,
      abbreviation: null,
      region: null,
    },
  }),

  computed: {
    ...mapState("GeoStates", ["actionType", "stateDetails", "regionList"]),

    canSubmit() {
      if (this.state.name && this.state.abbreviation && this.state.region)
        return true;
      return false;
    },
  },

  methods: {
    ...mapActions("GeoStates", ["insertState", "updateState", "deleteState"]),

    async insert() {
      const payload = this.state;
      if (await this.insertState(payload)) {
        alert("Estado cadastrado com sucesso!");
        this.$router.push({
          name: "StateSearch",
        });
      }
    },

    async update() {
      if (await this.updateState(this.state)) {
        alert("Estado atualizado com sucesso!");
        this.$router.push({
          name: "StateSearch",
        });
      }
    },

    async delet() {
      if (await this.deleteState(this.state.Id)) {
        alert("Estado deletado com sucesso!");
        this.$router.push({
          name: "StateSearch",
        });
      }
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
