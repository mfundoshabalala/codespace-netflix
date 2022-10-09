<template>
  <form>
    <h3>{{ label }}</h3>
    <div class="form-control">
      <input type="email" placeholder="Email address" />
      <button>Get Started <i class="fa fa-chevron-right"></i></button>
    </div>
  </form>
</template>

<style scoped>
form {
  @apply flex flex-col gap-y-4;
}

form > h3 {
  @apply text-base sm:text-xl sm:font-normal max-w-xs sm:max-w-full text-center mx-auto leading-5;
}

form > .form-control {
  @apply flex justify-center;
}

form > .form-control input {
  @apply px-3 py-5 placeholder:text-lg text-lg flex-1 border border-red-600 outline-none;
}

form > .form-control button {
  @apply px-4 py-4 bg-red-600 text-xl font-medium;
}
</style>

<script lang="ts">
export default {
  props: {
    label: { required: true, type: String },
  },
};
</script>
