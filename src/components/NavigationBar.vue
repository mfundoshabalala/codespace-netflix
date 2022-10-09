<template>
  <nav>
    <a>
      <img src="../assets/netflix-logo.svg" alt="Netflix" />
    </a>
    <button>Sign In</button>
  </nav>
</template>

<style scoped>
nav {
  @apply flex justify-between px-6 w-full items-center pt-4;
}

img {
  @apply sm:w-52 max-h-16;
}

button {
  @apply bg-red-600 px-4 py-1.5 rounded-sm;
}
</style>

<script lang="ts">
export default {
  name: "NavigationBar",
};
</script>
