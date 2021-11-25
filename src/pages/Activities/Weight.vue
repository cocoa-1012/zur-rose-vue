<template>
  <div class="px-6 py-[46px] relative min-h-screen">
    <div class="flex items-center mb-[60px]" @click="back">
      <img src="/images/icons/arrow_left.svg" alt=":( Not Found" />
      <span class="text-base">zurück</span>
    </div>
    <p class="text-2xl text-[#333333] text-center mb-8">Aktuelles Gewicht</p>
    <div class="flex justify-center relative z-20">
      <img src="/images/pages/activities/weight.svg" alt=":( Not Found" />
      <span class="text-danger text-2xl absolute top-10 mt-16  bg-white py-1 px-6 rounded-lg">19,80 kg</span>
    </div>
    <div class="w-full relative">
      <img
        src="/images/pages/activities/switcher.png"
        class="absolute left-1/2 transform -translate-x-1/2 -top-16 rotate-90"
        alt=":( Not Found"
      />
      <div class="flex items-center justify-between px-10 mt-5">
        <span class="text-[15px]">19,6</span>
        <span class="text-[15px] pr-8">19,7</span>
        <span class="text-[15px] pl-8">19,9</span>
        <span class="text-[15px]">20</span>
      </div>
    </div>
    <div class="fixed left-6 right-6 bottom-6">
      <router-link to="/injection/one">
        <Button>Gewicht speichern</Button>
      </router-link>
      <button class="
          w-full
          h-[50px]
          rounded-[50px]
          border border-danger
          text-danger
          mt-3
          text-lg
        "
      >
        Zurück zur Dosierung
      </button>
    </div>
  </div>
</template>

<script>
import Button from "../../components/Button";

export default {
  components: {
    Button,
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  }
};
</script>