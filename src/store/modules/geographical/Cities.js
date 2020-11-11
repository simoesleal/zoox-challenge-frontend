import HttpConnection from "../../../rest/index";
import { HTTP_OK } from "../../../utils/Constants";

const initialState = () => ({
  tableHeader: [
    { text: "ID", value: "Id" },
    { text: "Cidade", value: "name" },
    { text: "Ações", value: "actions" },
  ],
  citiesList: [],
  cityDetails: null,
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

  SET_CITY_LIST(state, value) {
    state.citiesList = value;
  },

  SET_CITY_DETAILS(state, value) {
    state.cityDetails = value;
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
    const { name, stateId } = payload;
    if (name) commit("SET_URI_FILTERS", `name=${name}`);
    if (stateId) commit("SET_URI_FILTERS", `stateId=${stateId}`);
  },

  async getCities({ commit, dispatch, state }, payload) {
    commit("RESET");
    dispatch("Loader/setStatus", true, { root: true });
    dispatch("setUriFilters", payload);
    let response;
    try {
      if (state.uriFilters.length === 0) {
        response = await HttpConnection.connection.get("/cities");
      } else {
        response = await HttpConnection.connection.get(
          `/cities${state.uriFilters}`
        );
        commit("SET_URI_FILTERS", null);
      }
      if (
        response &&
        response.status === HTTP_OK &&
        response.data.code === HTTP_OK
      ) {
        dispatch("Loader/setStatus", false, { root: true });
        commit("SET_CITY_LIST", response.data.payload);
        return true;
      }
    } catch (error) {
      dispatch("Loader/setStatus", false, { root: true });
      const { response } = error;
      if (response && response.data.error) {
        alert(response.data.message);
      } else {
        alert("Serviço indiponível no momento.");
      }
      return false;
    }
  },

  async getCity({ commit, dispatch }, id) {
    commit("RESET");
    commit("SET_ACTION_TYPE", "UPDATE");
    dispatch("Loader/setStatus", true, { root: true });
    let response;
    try {
      response = await HttpConnection.connection.get(`/cities/${id}`);
      if (
        response &&
        response.status === HTTP_OK &&
        response.data.code === HTTP_OK
      ) {
        dispatch("Loader/setStatus", false, { root: true });
        commit("SET_CITY_DETAILS", response.data.payload);
        return true;
      }
    } catch (error) {
      dispatch("Loader/setStatus", false, { root: true });
      const { response } = error;
      if (response && response.data.error) {
        alert(response.data.message);
      } else {
        alert("Serviço indiponível no momento.");
      }
      return false;
    }
  },

  async insertCity({ commit, dispatch }, payload) {
    commit("RESET");
    dispatch("Loader/setStatus", true, { root: true });
    let response;
    try {
      response = await HttpConnection.connection.post(`/cities/`, payload);
      if (
        response &&
        response.status === HTTP_OK &&
        response.data.code === HTTP_OK
      ) {
        dispatch("Loader/setStatus", false, { root: true });
        return true;
      }
    } catch (error) {
      dispatch("Loader/setStatus", false, { root: true });
      const { response } = error;
      if (response && response.data.error) {
        alert(response.data.message);
      } else {
        alert("Serviço indiponível no momento.");
      }
      return false;
    }
  },

  async updateCity({ commit, dispatch }, payload) {
    commit("RESET");
    dispatch("Loader/setStatus", true, { root: true });
    let response;
    try {
      response = await HttpConnection.connection.put(
        `/cities/${payload.Id}`,
        payload
      );
      if (
        response &&
        response.status === HTTP_OK &&
        response.data.code === HTTP_OK
      ) {
        dispatch("Loader/setStatus", false, { root: true });
        return true;
      }
    } catch (error) {
      dispatch("Loader/setStatus", false, { root: true });
      const { response } = error;
      if (response && response.data.error) {
        alert(response.data.message);
      } else {
        alert("Serviço indiponível no momento.");
      }
      return false;
    }
  },

  async deleteCity({ commit, dispatch }, id) {
    commit("RESET");
    dispatch("Loader/setStatus", true, { root: true });
    let response;
    try {
      response = await HttpConnection.connection.delete(`/cities/${id}`);
      if (
        response &&
        response.status === HTTP_OK &&
        response.data.code === HTTP_OK
      ) {
        dispatch("Loader/setStatus", false, { root: true });
        return true;
      }
    } catch (error) {
      dispatch("Loader/setStatus", false, { root: true });
      const { response } = error;
      if (response && response.data.error) {
        alert(response.data.message);
      } else {
        alert("Serviço indiponível no momento.");
      }
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
