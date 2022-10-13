<template>
  <nav>
    <router-link to="/">
      <img src="../assets/netflix-logo.svg" alt="Netflix" />
    </router-link>
    <router-link to="/login" class="button"> Sign In </router-link>
  </nav>
</template>

<style scoped>
nav {
  @apply flex justify-between px-6 w-full items-center pt-4;
}

img {
  @apply sm:w-52 max-h-16;
}

.button {
  @apply bg-red-600 px-4 py-1.5 rounded-sm mx-4;
}
</style>

<script lang="ts">
export default {
  name: "NavigationBar",
};
</script>
