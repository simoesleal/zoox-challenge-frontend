<template>
  <div>
    <BaseTitle :title="'Consulta de Cidades'"></BaseTitle>
    <SearchFieldsFilters></SearchFieldsFilters>
    <SearchTableData></SearchTableData>
  </div>
</template>

<script>
import SearchFieldsFilters from "../../components/geographical/city/search/SearchFieldsFilters";
import SearchTableData from "../../components/geographical/city/search/SearchTableData";
export default {
  name: "CitiesSearch",
  components: {
    SearchFieldsFilters,
    SearchTableData,
  },
};
</script>

<style></style>
