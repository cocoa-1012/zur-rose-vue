<template>
  <div class="mb-6">
    <label v-if="label" class="font-poppins text-sm opacity-60 mb-1">{{
      label
    }}</label>
    <input
      :type="type"
      :placeholder="placeholder"
      class="
        w-full
        px-0
        py-3
        text-base
        font-medium
        outline-none
        border-b border-[#E0E0E0]
      "
    />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    label: String,
    placeholder: String,
  },
};
</script>