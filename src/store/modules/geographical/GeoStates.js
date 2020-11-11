import HttpConnection from "../../../rest/index";
import { HTTP_OK } from "../../../utils/Constants";

const initialState = () => ({
  tableHeader: [
    { text: "ID", value: "Id" },
    { text: "Estado", value: "name" },
    { text: "UF", value: "abbreviation" },
    { text: "Região", value: "region" },
    { text: "Ações", value: "actions" },
  ],
  statesList: [],
  stateDetails: null,
  uriFilters: "",
  actionType: "CREATE",
});

const state = initialState;

const mutations = {
  RESET(state) {
    const clearState = initialState();
    Object.keys(clearState).forEach((key) => {
      state[key] = clearState[key];
    });
  },

  SET_URI_FILTERS: (state, value) => {
    if (value) {
      if (state.uriFilters.length <= 0) {
        state.uriFilters = `?${value}`;
      } else {
        state.uriFilters += `&${value}`;
      }
    } else {
      state.uriFilters = "";
    }
  },

  SET_STATE_LIST(state, value) {
    state.statesList = value;
  },

  SET_STATE_DETAILS(state, value) {
    state.stateDetails = value;
  },

  SET_ACTION_TYPE(state, value) {
    state.actionType = value;
  },
};

const actions = {
  resetState: ({ commit }) => {
    commit("RESET");
  },

  /**
   * @description create the URI for the specific filters.
   */
  async setUriFilters({ commit }, payload) {
    const { name, abbreviation, region } = payload;
    if (name) commit("SET_URI_FILTERS", `name=${name}`);
    if (abbreviation) commit("SET_URI_FILTERS", `abbreviation=${abbreviation}`);
    if (region) commit("SET_URI_FILTERS", `region=${region}`);
  },

  setStateList({ commit }, payload) {
    commit("SET_STATE_LIST", payload);
  },

  setStateDetails({ commit }, payload) {
    commit("SET_STATE_DETAILS", payload);
  },

  async getStates({ commit, dispatch, state }, payload) {
    commit("RESET");
    dispatch("Loader/setStatus", true, { root: true });
    dispatch("setUriFilters", payload);
    let response;
    try {
      if (state.uriFilters.length === 0) {
        response = await HttpConnection.connection.get("/states");
      } else {
        response = await HttpConnection.connection.get(
          `/states${state.uriFilters}`
        );
        commit("SET_URI_FILTERS", null);
      }
      if (
        response &&
        response.status === HTTP_OK &&
        response.data.code === HTTP_OK
      ) {
        dispatch("Loader/setStatus", false, { root: true });
        commit("SET_STATE_LIST", response.data.payload);
        return true;
      }
    } catch (error) {
      dispatch("Loader/setStatus", false, { root: true });
      return false;
    }
  },

  async getState({ commit, dispatch }, id) {
    commit("RESET");
    commit("SET_ACTION_TYPE", "UPDATE");
    dispatch("Loader/setStatus", true, { root: true });
    let response;
    try {
      response = await HttpConnection.connection.get(`/states/${id}`);
      if (
        response &&
        response.status === HTTP_OK &&
        response.data.code === HTTP_OK
      ) {
        dispatch("Loader/setStatus", false, { root: true });
        commit("SET_STATE_DETAILS", response.data.payload);
        return true;
      }
    } catch (error) {
      dispatch("Loader/setStatus", false, { root: true });
      return false;
    }
  },

  async insertState({ commit, dispatch }, payload) {
    commit("RESET");
    dispatch("Loader/setStatus", true, { root: true });
    let response;
    try {
      response = await HttpConnection.connection.post(`/states/`, payload);
      if (
        response &&
        response.status === HTTP_OK &&
        response.data.code === HTTP_OK
      ) {
        dispatch("Loader/setStatus", false, { root: true });
        commit("SET_STATE_DETAILS", response.data.payload);
        return true;
      }
    } catch (error) {
      dispatch("Loader/setStatus", false, { root: true });
      return false;
    }
  },

  async updateState({ commit, dispatch }, payload) {
    commit("RESET");
    dispatch("Loader/setStatus", true, { root: true });
    let response;
    try {
      response = await HttpConnection.connection.put(
        `/states/${payload.Id}`,
        payload
      );
      if (
        response &&
        response.status === HTTP_OK &&
        response.data.code === HTTP_OK
      ) {
        dispatch("Loader/setStatus", false, { root: true });
        commit("SET_STATE_DETAILS", response.data.payload);
        return true;
      }
    } catch (error) {
      dispatch("Loader/setStatus", false, { root: true });
      return false;
    }
  },

  async deleteState({ commit, dispatch }, id) {
    commit("RESET");
    dispatch("Loader/setStatus", true, { root: true });
    let response;
    try {
      response = await HttpConnection.connection.delete(`/states/${id}`);
      if (
        response &&
        response.status === HTTP_OK &&
        response.data.code === HTTP_OK
      ) {
        dispatch("Loader/setStatus", false, { root: true });
        commit("SET_STATE_DETAILS", response.data.payload);
        return true;
      }
    } catch (error) {
      dispatch("Loader/setStatus", false, { root: true });
      return false;
    }
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
