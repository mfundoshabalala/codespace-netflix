<script lang="ts">
export default {
  props: {
    heading: { required: true, type: String },
    subheading: { type: String },
  },
};
</script>

<template>
  <section>
    <div>
      <h1>{{ heading }}</h1>
      <h2>{{ subheading }}</h2>
    </div>
    <div>
      <img src="../assets/images/placeholder.jpg" alt="placeholder" />
    </div>
  </section>
</template>

<style>
section {
  @apply flex justify-center border-b-8 border-slate-600 w-full container;
}

section:nth-of-type(2n) {
  @apply flex-row-reverse;
}

section > div {
  @apply flex-1 max-w-2xl px-8;
}

section > div:last-child {
  @apply h-80;
}

section img {
  @apply h-full w-full mix-blend-lighten;
}

section > div:first-child {
  @apply flex flex-col justify-center items-center gap-2;
}

section > div h1 {
  @apply text-3xl sm:text-5xl font-bold text-center max-w-[20ch] mx-auto;
}

section > div h2 {
  @apply text-lg sm:text-xl font-normal text-center px-2;
}
</style>
