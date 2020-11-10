import Vue from "vue";
import Vuex from "vuex";

/* SYSTEM */
import MenuToggle from "./modules/system/MenuToggle";
import Loader from "./modules/system/Loader";

/* AUTH */
import Auth from "./modules/auth/Auth";

/* GEOGRAPHICAL */
import GeoStates from "./modules/geographical/GeoStates";
import Cities from "./modules/geographical/Cities";

import VuexPersistence from "vuex-persist";
const vuexLocal = new VuexPersistence({
  key: "LS_OPRTR_PRC",
  storage: window.localStorage,
  modules: ["Auth", "ModelLists"],
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    MenuToggle,
    Loader,
    Auth,
    GeoStates,
    Cities,
  },
  plugins: [vuexLocal.plugin],
  strict: process.env.NODE_ENV !== "production",
});
