<template>
  <button
    @click="onClick()"
    class="w-full h-[50px] text-lg text-white rounded-[50px] bg-danger"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    onClick: Function,
  },
};
</script>