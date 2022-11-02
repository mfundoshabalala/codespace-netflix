import axios from "axios";
import { defineStore } from "pinia";
//
import type { Movie } from "@/views/HomeView.vue";

export const useMovieStore = defineStore("movie", {
  state: () => ({
    movies: [] as Movie[],
  }),
  getters: {
    getMovies(state) {
      return state.movies;
    },
  },
  actions: {
    async fetchMovies(): Promise<void> {
      try {
        const { data } = await axios.get(`https:/netflix-cs-api.netlify.app/`);
        this.movies = data.data as Movie[];
      } catch (error) {
        alert(error);
        console.error(error);
      }
    },
  },
});
