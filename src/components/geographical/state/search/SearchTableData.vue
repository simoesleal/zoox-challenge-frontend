<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            <h3 class="text-h6">Estados</h3>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="tableSearch"
              append-icon="mdi-magnify"
              label="Pesqusiar"
              hide-details
            >
            </v-text-field>
          </v-card-title>
          <v-data-table
            :headers="tableHeader"
            :items="statesList"
            item-key=""
            loading-text="Buscando estados... Por favor aguarde."
            :locale="'pt-br'"
            :single-select="true"
            :search="tableSearch"
            no-data-text="Nenhuma informação disponível, faça uma busca 😃"
            :footer-props="{
              showFirstLastPage: true,
              itemPerPageAllText: 'todos',
              itemsPerPageText: 'Quantidade por pagina',
            }"
          >
            <template v-slot:item.actions="{ item }">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <BaseButton
                    v-bind="attrs"
                    v-on="on"
                    :icon="true"
                    :elevation="2"
                    @click="getDetails(item)"
                    ><v-icon>mdi-file-table-outline</v-icon></BaseButton
                  >
                </template>
                <span>Detalhes</span>
              </v-tooltip>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "SearchTableData",
  data: () => ({
    tableSearch: "",
  }),
  computed: {
    ...mapState("GeoStates", ["tableHeader", "statesList"]),
  },
  methods: {
    ...mapActions("GeoStates", ["getState"]),
    async getDetails(item) {
      if (await this.getState(item.Id)) {
        this.$router.push({
          name: "StateDetails",
        });
      }
    },
  },
};
</script>

<style></style>
