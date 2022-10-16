<template>
  <div>
    <label :for="id">{{ label }}</label>
    <input
      :type="type"
      :name="id"
      :id="id"
      :placeholder="placeholder"
      :value="modelValue"
      @input="updateInput"
    />
    <!-- <span>{{ error }}</span> -->
  </div>
</template>

<script lang="ts">
export default {
  name: "FormInput",
  props: {
    id: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
  },
  methods: {
    updateInput(event: Event) {
      this.$emit(
        "update:modelValue",
        (event?.target as HTMLInputElement)?.value
      );
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  @apply flex flex-col h-fit mb-2;

  input:not([type="checkbox"]) {
    @apply rounded text-slate-900 border-transparent;
  }

  label {
    @apply w-full font-semibold capitalize;
  }

  span {
    @apply w-full;
  }
}
</style>
