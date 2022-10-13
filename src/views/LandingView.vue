<script lang="ts">
import HeroHeader from "../components/HeroHeader.vue";
import StoryCard from "../components/StoryCard.vue";
export default {
  name: "LandingView",
  components: { HeroHeader, StoryCard },
};
</script>

<template>
  <main>
    <HeroHeader />
    <StoryCard
      heading="Enjoy on your TV."
      subheading="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
    />
    <StoryCard
      heading="Download your shows to watch offline."
      subheading="Save your favorites easily and always have something to watch."
    />
    <StoryCard
      heading="Watch everywhere."
      subheading="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
    />
    <StoryCard
      heading="Create profiles for kids."
      subheading="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
    />
  </main>
</template>
