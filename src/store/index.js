import { createStore } from "vuex";
import { apiGetSquatData } from "@/api.js";
export default createStore({
  state: {
    squatData: [],
  },
  mutations: {
    setSquatData(state, payload) {
      state.squatData = payload;
    },
  },
  actions: {
    async getSquatData({ commit }) {
      try {
        const getData = await apiGetSquatData();
        commit("setSquatData", getData.data);
        // return getData.data;
      } catch (error) {
        console.log(error.response.data);
      }
    },
  },
  getters: {
    squatData(state) {
      return state.squatData;
    },
  },
});
