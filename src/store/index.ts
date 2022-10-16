import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  actions: {
    async fetchMovies({ commit }) {
      try {
        const { data } = await axios.get(`https:/netflix-cs-api.netlify.app/`);
        commit("SET_MOVIES", data.data);
        console.log(data.data);
      } catch (error) {
        // TODO: change this to a toaster message
        alert(error);
        console.log(error);
      }
    },
  },
  getters: {
    getMovies: (state) => state.movies,
  },
  mutations: {
    SET_MOVIES(state, movies) {
      state.movies = movies;
    },
  },
  state: {
    movies: [],
  },
});
