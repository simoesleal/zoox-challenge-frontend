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
                  :value="name"
                  dense
                  :outlined="true"
                  :label="'Estado:'"
                  type="text"
                ></BaseInput>
              </v-col>
              <v-col cols="2">
                <BaseInput
                  :value="abbreviation"
                  dense
                  :outlined="true"
                  :label="'UF:'"
                  type="text"
                ></BaseInput>
              </v-col>
              <v-col cols="2">
                <BaseInput
                  :value="region"
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
        <BaseCardActions class="d-flex justify-end">
          <BaseButton :dark="true"
            ><v-icon class="mr-3" dark>mdi-cloud-upload</v-icon>
            <span>salvar</span></BaseButton
          >
        </BaseCardActions>
      </template>
    </BaseCard>
  </div>
</template>

<script>
export default {
  name: "StateDetails",

  data: () => ({
    name: null,
    abbreviation: null,
    region: [],
  }),
};
</script>

<style></style>
