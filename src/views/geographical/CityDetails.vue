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
                  :value="name"
                  dense
                  :outlined="true"
                  :label="'Cidade:'"
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
            </v-row>
          </v-container>
        </BaseCardText>
      </template>
      <template #card-actions>
        <BaseCardActions class="d-flex justify-end">
          <BaseButton :dark="true">salvar</BaseButton>
        </BaseCardActions>
      </template>
    </BaseCard>
  </div>
</template>

<script>
export default {
  name: "CityDetails",
  data: () => ({
    name: null,
    stateSelected: null,
  }),
};
</script>

<style></style>
