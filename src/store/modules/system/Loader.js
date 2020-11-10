const initialState = () => ({
  linearLoaderStatus: false,
});

const state = initialState;

const mutations = {
  RESET(state) {
    const clearState = initialState();
    Object.keys(clearState).forEach((key) => {
      state[key] = clearState[key];
    });
  },

  SET_STATUS(state, value) {
    state.linearLoaderStatus = value;
  },
};

const actions = {
  resetLoader: ({ commit }) => {
    commit("RESET");
  },

  setStatus: ({ commit }, payload) => {
    commit("SET_STATUS", payload);
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
