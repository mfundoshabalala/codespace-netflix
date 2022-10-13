<script setup lang="ts">
import { RouterView } from "vue-router";
import NavigationBar from "./components/NavigationBar.vue";
import FooterBar from "./components/FooterBar.vue";
</script>

<template>
  <navigation-bar />
  <router-view />
  <footer-bar />
</template>
