import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// Initial state

// if (window.matchMedia("(prefers-color-scheme: dark)").matches === true) {
//   window.localStorage.setItem("isDarkMode", "true");
// }
const userSelectedDarkMode =
  window.localStorage.getItem("isDarkMode") === "true";

const state = {
  isDarkMode: userSelectedDarkMode,
};

// getters
const getters = {
  isDarkMode(state) {
    return state.isDarkMode;
  },
};

// mutations
const mutations = {
  toogleDarkMode(state) {
    if (state.isDarkMode === true) {
      state.isDarkMode = false;

      document.body.style.background = "#f0f3f5";
      window.localStorage.setItem("isDarkMode", "false");
    } else {
      state.isDarkMode = true;
      document.body.style.background = "#212c4f";
      window.localStorage.setItem("isDarkMode", "true");
    }
  },
};

// Actions
const actions = {
  triggerDarkMode(context) {
    context.commit("toogleDarkMode");
  },
};
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
