<template>
  <div>
    <input type="checkbox" role="checkbox" :name="id" :id="id" @input="" />
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script lang="ts">
export default {
  name: "FormCheckBox",
  props: {
    id: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
