<template>
  <section>
    <article v-for="movie in movies" :key="movie.id">
      <header>
        <img :src="movie.image" :alt="movie.name" />
      </header>
      <main>
        <h3>{{ movie.name }}</h3>
        <p class="release-date">
          <span class="highlight">Release date:</span>
          <time :datetime="movie.release_date">{{ movie.release_date }}</time>
        </p>
        <p class="description">{{ movie.description }}</p>
      </main>
      <footer>
        <ul>
          <span class="highlight">Genre:</span>
          <li v-for="(genre, index) in movie.genres" :key="index">
            {{ genre.name }}
          </li>
        </ul>
        <ul>
          <span class="highlight">Cast:</span>
          <li v-for="(actor, index) in movie.actors" :key="index">
            {{ `${actor.first_name} ${actor.last_name}` }}
          </li>
        </ul>
      </footer>
    </article>
  </section>
</template>

<script lang="ts">
export interface Movie {
  id: string;
  name: string;
  image: string;
  release_date: string;
  description: string;
  genres: [{ name: string }];
  actors: [{ first_name: string; last_name: string }];
}

export interface Movies {
  movies: Movie[];
}

import { useRouter } from "vue-router";
import { auth } from "@/firebaseConfig";
import { onMounted, computed } from "vue";
import authStore from "@/stores/auth.store";
import { useMovieStore } from "../stores/movies.store";

export default {
  name: "HomeView",
  components: {},
  setup() {
    const movieStore = useMovieStore();
    const router = useRouter();

    auth.onAuthStateChanged((user: any) => {
      authStore.dispatch("fetchUser", user);
    });

    const user = computed(() => {
      return authStore.getters.user;
    });

    const signOut = async () => {
      await authStore.dispatch("logOut");
      router.push("/");
    };

    const movies = computed(() => {
      return movieStore.movies as Movie[];
    });

    onMounted(() => {
      movieStore.fetchMovies();
    });

    return { user, signOut, movies };
  },
};
</script>

<style lang="scss" scoped>
section {
  @apply flex flex-wrap container gap-4 py-10;
}

article {
  @apply max-w-xs font-thin border border-slate-900;

  span.highlight {
    @apply font-semibold text-slate-400;
  }

  header {
    @apply h-[400px] overflow-hidden cursor-pointer border-red-900 border-b border-opacity-30;

    img {
      @apply hover:scale-105 duration-500;
    }
  }

  main {
    @apply p-2 flex flex-col gap-1;

    h3 {
      @apply text-2xl truncate;
    }

    .release-date {
      @apply flex flex-wrap gap-x-1;
    }

    .description {
      @apply line-clamp-3 hover:line-clamp-none duration-500;
    }
  }

  footer {
    @apply p-2;

    ul {
      @apply flex flex-wrap gap-x-1;
    }
  }
}
</style>
