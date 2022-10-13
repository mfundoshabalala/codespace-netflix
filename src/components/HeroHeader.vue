<script lang="ts">
import SubscribeToMail from "./SubscribeToMail.vue";

export default {
  name: "HeroHeader",
  components: {
    SubscribeToMail: SubscribeToMail,
  },
};
</script>

<template>
  <div
    class="h-[80vh] flex items-center justify-center relative z-20 bg-transparent border-b-8 border-slate-600"
  >
    <header>
      <h1>Unlimited movies, TV shows, and more.</h1>
      <h2>Watch anywhere. Cancel anytime.</h2>
      <subscribe-to-mail
        label="Ready to watch? Enter your email to create or restart your membership."
      ></subscribe-to-mail>
    </header>
  </div>
</template>

<style scoped>
header {
  @apply flex flex-col items-center justify-center text-center gap-y-4;
}

h1 {
  @apply text-3xl sm:text-6xl font-semibold text-center max-w-[20ch];
}

h2 {
  @apply text-lg sm:text-3xl font-medium text-center;
}
</style>
