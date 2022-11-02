<template>
  <nav>
    <!-- site branding -->
    <router-link to="/landing">
      <img src="../assets/images/netflix-logo.svg" alt="Netflix" />
    </router-link>
    <div v-if="isLoggedIn">
      <ul>
        <li><router-link to="/">Home</router-link></li>
      </ul>
    </div>
    <!-- site auth link -->
    <div v-if="isLoggedIn">
      <router-link to="/login" class="button">Sign in</router-link>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink, useRouter } from "vue-router";

const router = useRouter();
let currentPath = router.options.history.state.current;
let isLoggedIn = currentPath !== "/login";
</script>

<style lang="scss" scoped>
nav {
  // nav wrapper styling
  @apply shadow-sm bg-transparent z-50 py-2 px-8;
  @apply flex flex-row justify-between items-center;
  // brand styling
  a img {
    @apply sm:w-52 max-h-16;
  }
  // auth button styling
  a.button {
    @apply bg-red-600 px-4 py-1.5 rounded-sm mx-4;
  }

  ul {
    @apply flex items-center flex-1;
  }
}
</style>
