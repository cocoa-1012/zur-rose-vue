<template>
  <div @click="handleToggle" class="cursor-pointer">
    <img src="/images/icons/checkbox-active.svg" v-if="isChecked" />
    <img src="/images/icons/checkbox-normal.svg" v-else />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isChecked: this.checked,
    };
  },
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleToggle() {
      this.isChecked = !this.isChecked;
    },
  },
};
</script>
