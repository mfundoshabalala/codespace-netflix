<template>
  <div class="form-container">
    <form action="">
      <h1>Sign in</h1>
      <form-input
        id="email"
        type="email"
        label="email"
        v-model="email"
        placeholder="Email or phone number"
      />
      <form-input
        id="password"
        type="password"
        label="password"
        v-model="password"
        placeholder="Password"
      />
      <button>Sign in</button>
      <div class="flex justify-between">
        <div class="flex items-center gap-x-2">
          <input type="checkbox" name="remember" id="remember" />
          <label for="remember">Remember me?</label>
        </div>
        <router-link to="">Need help?</router-link>
      </div>
      <div class="text-slate-400 h-24 flex items-center text-lg">
        New to Netflix?
        <router-link to="{ name: 'landing' }" class="text-white pl-1"
          >Sign up now</router-link
        >.
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import FormInput from "@/components/shared/FormInput.vue";

export default {
  name: "LoginView",
  components: { FormInput },
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>

<style lang="scss" scoped>
div.form-container {
  @apply w-full max-w-md flex flex-col justify-center items-center h-screen mx-auto -mt-16;

  form {
    @apply flex flex-col w-full rounded px-6 h-4/5 -mb-16 py-16;

    h1 {
      @apply text-4xl font-bold capitalize w-full mb-8;
    }

    button {
      @apply bg-red-600 text-white capitalize rounded shadow py-3 w-full font-semibold text-lg mt-8 mb-2;
    }

    // > div {
    //   @apply flex justify-between;
    // }
  }
}
</style>
