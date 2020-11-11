<template>
  <div>
    <BaseTitle :title="'Consulta de Estados'"></BaseTitle>
    <SearchFieldsFilters></SearchFieldsFilters>
    <SearchTableData></SearchTableData>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import SearchFieldsFilters from "../../components/geographical/state/search/SearchFieldsFilters";
import SearchTableData from "../../components/geographical/state/search/SearchTableData";
export default {
  name: "StateSearch",
  components: {
    SearchFieldsFilters,
    SearchTableData,
  },

  methods: {
    ...mapActions("GeoStates", ["resetState"]),
  },

  created() {
    this.resetState();
  },
};
</script>

<style></style>
