const initialState = () => ({
  menuDrawer: false,
});

const state = initialState;

const mutations = {
  RESET(state) {
    const clearState = initialState();
    Object.keys(clearState).forEach((key) => {
      state[key] = clearState[key];
    });
  },

  SET_MENU_DRAWER(state) {
    state.menuDrawer = !state.menuDrawer;
  },
};

const actions = {
  resetState: ({ commit }) => commit("RESET"),

  setMenuDrawer: ({ commit }) => commit("SET_MENU_DRAWER"),
};

const getters = {};

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true,
};
