<template>
  <div class="w-full max-w-[768px] mx-auto">
    <transition
        name="fade"
        mode="out-in"
      >
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
