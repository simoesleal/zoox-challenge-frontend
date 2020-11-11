<template
  ><div>
    <BaseTitle :title="'Cidade'"></BaseTitle>
    <BaseCard>
      <template #card-text>
        <BaseCardText>
          <v-container>
            <v-row>
              <v-col cols="4">
                <BaseInput
                  v-model="city.name"
                  dense
                  :outlined="true"
                  :label="'Cidade:'"
                  type="text"
                ></BaseInput>
              </v-col>
              <v-col cols="2">
                <BaseSelect
                  v-model="city.stateId"
                  id="state-id"
                  :backgroundColor="'white'"
                  :items="statesList"
                  itemText="name"
                  itemValue="Id"
                  :clearable="true"
                  :openOnClear="true"
                  dense
                  label="Estado:"
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
export default {
  name: "CityDetails",
  data: () => ({
    city: {
      name: null,
      stateId: null,
    },
  }),

  computed: {
    ...mapState("Cities", ["actionType", "cityDetails"]),
    ...mapState("GeoStates", ["statesList"]),

    canSubmit() {
      if (this.city.name && this.city.stateId) return true;
      return false;
    },
  },

  methods: {
    ...mapActions("Cities", ["insertCity", "updateCity", "deleteCity"]),

    async insert() {
      const payload = this.city;
      if (await this.insertCity(payload)) {
        alert("Cidade cadastrada com sucesso!");
        this.$router.push({
          name: "CitiesSearch",
        });
      }
    },

    async update() {
      if (await this.updateCity(this.city)) {
        alert("Cidade atualizada com sucesso!");
        this.$router.push({
          name: "CitiesSearch",
        });
      }
    },

    async delet() {
      if (await this.deleteCity(this.city.Id)) {
        alert("Cidade deletada com sucesso!");
        this.$router.push({
          name: "CitiesSearch",
        });
      }
    },
  },

  created() {
    if (this.actionType === "UPDATE") {
      this.city = { ...this.cityDetails };
    }
  },
};
</script>

<style></style>
