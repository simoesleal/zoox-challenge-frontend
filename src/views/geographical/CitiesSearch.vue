<template>
  <div>
    <BaseTitle :title="'Consulta de Cidades'"></BaseTitle>
    <SearchFieldsFilters></SearchFieldsFilters>
    <SearchTableData></SearchTableData>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import SearchFieldsFilters from "../../components/geographical/city/search/SearchFieldsFilters";
import SearchTableData from "../../components/geographical/city/search/SearchTableData";
export default {
  name: "CitiesSearch",
  components: {
    SearchFieldsFilters,
    SearchTableData,
  },
  methods: {
    ...mapActions("Cities", ["resetState"]),
  },

  created() {
    this.resetState();
  },
};
</script>

<style></style>
