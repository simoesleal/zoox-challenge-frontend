const initialState = () => ({
  tableHeader: [
    { text: "ID", value: "_id" },
    { text: "Estado", value: "name" },
    { text: "UF", value: "abbreviation" },
    { text: "Região", value: "region" },
    { text: "Ações", value: "actions" },
  ],
  statesList: [],
});

const state = initialState;

const mutations = {
  RESET(state) {
    const clearState = initialState();
    Object.keys(clearState).forEach((key) => {
      state[key] = clearState[key];
    });
  },
};

const actions = {
  resetLoader: ({ commit }) => {
    commit("RESET");
  },
};

const getters = {};

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true,
};
