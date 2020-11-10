<template>
  <div>
    <BaseTitle :title="'Consulta de Estados'"></BaseTitle>
    <SearchFieldsFilters></SearchFieldsFilters>
    <SearchTableData></SearchTableData>
  </div>
</template>

<script>
import SearchFieldsFilters from "../../components/geographical/state/search/SearchFieldsFilters";
import SearchTableData from "../../components/geographical/state/search/SearchTableData";
export default {
  name: "StateSearch",
  components: {
    SearchFieldsFilters,
    SearchTableData,
  },
};
</script>

<style></style>
