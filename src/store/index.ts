import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    users: [],
  },
  getters: {
    getUsers(state) {
      return state.users;
    },
  },
  mutations: {
    setUsers(state, val) {
      state.users = val;
    },
  },
  actions: {
    async getRandomUsers(context) {
      try {
        const { data } = await axios(
          "https://api.randomdatatools.ru/?count=20&unescaped=true&params=Login,YearsOld"
        );
        // console.log(data);
        context.commit("setUsers", data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  modules: {},
});
