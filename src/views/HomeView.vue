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

<script lang="ts" setup>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const msg = ref("Welcome to my Vuex Store");

const movies = computed(() => {
  return store.state.movies;
});

onMounted(() => {
  store.dispatch("fetchMovies");
});
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
