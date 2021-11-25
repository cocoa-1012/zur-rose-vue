<template>
  <div
    @click="handleToggle"
    class="w-[44px] h-6 p-0.5 rounded-2xl relative"
    :class="isChecked ? 'bg-danger' : 'bg-[#E8E8E8]'"
  >
    <div
      class="w-5 h-5 rounded-full bg-white absolute"
      :class="isChecked ? 'left-[22px]' : 'left-0.5'"
      style="transition: 0.1s"
    ></div>
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