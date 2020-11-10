/* import HttpConnection from "../../../rest/HttpConnection";
import { AUTHENTICATE } from "../../../rest/uri/Auth";
import { HTTP_OK } from "../../../utils/Constants"; */

const initialState = () => ({
  account: null,
  token: "",
  sessionTimeout: false,
});

const state = initialState;

const mutations = {
  RESET(state) {
    const clearState = initialState();
    Object.keys(clearState).forEach((key) => {
      state[key] = clearState[key];
    });
  },

  SET_TOKEN: (state, value) => {
    state.token = value;
  },

  SET_SESSION_TIMEOUT: (state, value) => {
    state.sessionTimeout = value;
  },

  SET_ACCOUNT_INFO: (state, value) => {
    state.account = value;
  },
};

const actions = {
  resetStore: ({ commit }) => commit("RESET"),

  setToken: ({ commit }, payload) => {
    commit("SET_TOKEN", payload);
  },

  setAccountInfo: ({ commit }, payload) => {
    commit("SET_ACCOUNT_INFO", payload);
  },

  setSessionTimeout: ({ commit }, payload) => {
    commit("SET_SESSION_TIMEOUT", payload);
  },

  /* async authenticateLogin({ commit }, payload) {},
  logout: ({ commit }) => {
    commit("RESET");
  }, */
};

const getters = {
  isAuth: (state) => {
    return state.account !== null && state.token !== "";
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true,
};
