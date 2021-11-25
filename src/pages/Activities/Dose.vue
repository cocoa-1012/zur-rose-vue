<template>
  <div class="px-6 py-[46px] relative min-h-screen">
    <div class="flex items-center mb-[60px]" @click="back">
      <img src="/images/icons/arrow_left.svg" alt=":( Not Found" />
      <span class="text-base">zurück</span>
    </div>
    <p class="text-2xl text-[#333333] text-center mb-8">
      Wieviel wurde <br />
      eingenommen?
    </p>
    <div class="border-b-[3px] border-[#00000005] flex items-center">
      <div class="relative">
        <img src="/images/pages/activities/box.png" alt=":( Not Found" />
        <span
          class="
            w-full
            absolute
            text-center
            top-1/2
            left-1/2
            text-2xl text-danger
            flex-shrink-0
            transform
            -translate-x-1/2
          "
          >6,6 ml</span
        >
      </div>
      <div class="relative">
        <div class="absolute flex flex-col left-20 -top-10">
          <span class="text-[15px] mb-2.5">6,8 ml</span>
          <span class="text-[15px] mb-[30px]">6,7 ml</span>
          <span class="text-[15px] mb-2.5">6,5 ml</span>
          <span class="text-[15px] mb-2.5">6,4 ml</span>
        </div>
        <img src="/images/pages/activities/switcher.png" alt=":( Not Found" />
      </div>
    </div>
    <div class="flex items-start justify-between">
      <div class="flex flex-col items-center">
        <p class="text-[28px] m-0">
          <span>19,80</span><span class="text-[#85858A] ml-3">kg</span>
        </p>
        <span class="text-xs text-danger underline">ändern</span>
      </div>
      <span class="text-danger text-lg mt-1">Aktuelles Gewicht</span>
    </div>
    <div class="fixed left-6 right-6 bottom-6">
      <Button>Weiter zur Verabreichung</Button>
      <button
        class="
          w-full
          h-[50px]
          rounded-[50px]
          border border-danger
          text-danger
          mt-3
          text-lg
        "
      >
        Abbrechen
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