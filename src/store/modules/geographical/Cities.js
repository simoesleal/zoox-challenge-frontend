const initialState = () => ({
  tableHeader: [
    { text: "ID", value: "_id" },
    { text: "Cidade", value: "name" },
    { text: "UF", value: "stateId" },
    { text: "Ações", value: "actions" },
  ],
  citiesList: [],
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
