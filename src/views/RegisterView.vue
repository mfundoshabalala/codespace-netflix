<template>
  <div class="form-container">
    <form action="" @submit.prevent="Register">
      <h1>Welcome back! Joining Netflix is easy.</h1>
      <h2>Enter your password and you'll be watching in no time.</h2>
      <form-input
        required
        autofocus
        id="name"
        type="text"
        label="name"
        v-model="name"
        placeholder="Email or phone number"
      />
      <form-input
        required
        autofocus
        id="email"
        type="email"
        label="email"
        v-model="email"
        placeholder="Email or phone number"
      />
      <form-input
        required
        id="password"
        type="password"
        label="password"
        v-model="password"
        placeholder="Password"
      />
      <button type="submit">Sign up</button>
      <div class="flex items-center h-24 text-lg text-slate-400">
        Already have an account?
        <router-link to="/login" class="pl-1 text-white">Sign in</router-link>.
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import FormInput from "@/components/shared/FormInput.vue";
import authStore from "@/stores/auth.store";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "RegisterView",
  components: { FormInput },
  setup() {
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const error = ref(null);
    const router = useRouter();

    const Register = async () => {
      try {
        await authStore.dispatch("register", {
          name: name.value,
          email: email.value,
          password: password.value,
        });
        router.push("/");
      } catch (err) {
        // error.value = err.message;
      }
    };

    return { Register, name, email, password, error };
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
