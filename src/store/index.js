import { createStore } from "vuex";
import { apiGetSquatData } from "@/api.js";
export default createStore({
  state: {
    squatData: [],
    isLoading: false,
  },
  mutations: {
    setSquatData(state, payload) {
      state.squatData = payload;
    },
    isLoadingChange(state) {
      state.isLoading = !state.isLoading;
    },
  },
  actions: {
    async getSquatData({ commit }) {
      try {
        const getData = await apiGetSquatData();
        commit("setSquatData", getData.data);
        return getData.data;
      } catch (error) {
        console.log(error.response.data);
      }
    },
    isLoadingHandler({ commit }) {
      commit("isLoadingChange");
    },
  },
  getters: {
    squatData(state) {
      return state.squatData;
    },
    isLoading(state) {
      return state.isLoading;
    },
  },
});
