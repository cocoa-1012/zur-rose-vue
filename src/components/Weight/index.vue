<template>
  <div class="px-6 py-[46px] relative min-h-screen">
    <div class="flex items-center mb-6" @click="back">
      <img src="/images/icons/arrow_left.svg" alt=":( Not Found" />
      <span class="text-base">zurück</span>
    </div>
    <div class="flex flex-col items-center">
      <p class="text-2xl text-[#333] mb-10 text-center">{{ this.title }}</p>
      <div
        class="
          w-[275px]
          h-[275px]
          border-[12px] border-[#F7F7F7]
          bg-[#E8E8E8]
          rounded-full
          flex
          justify-center
          items-center
          relative
          z-10
        "
      >
        <div
          class="
            w-[187px]
            h-12
            bg-white
            rounded-[10px]
            text-danger text-2xl
            flex
            items-center
            justify-center
          "
        >
          {{ this.value }}
        </div>
      </div>
      <div
        class="w-full flex justify-between mt-10 mb-32 text-base relative px-5"
      >
        <span>{{ this.list[0] }}</span>
        <span class="mr-6">{{ this.list[1] }}</span>
        <span class="ml-6">{{ this.list[2] }}</span>
        <span>{{ this.list[3] }}</span>
        <img
          src="/images/pages/activities/switcher.png"
          class="
            absolute
            top-0
            left-1/2
            transform
            rotate-90
            -translate-y-10 -translate-x-1/2
          "
        />
      </div>
    </div>
    <div>
      <Button>Gewicht speichern</Button>
      <button
        class="
          w-full
          h-[50px]
          bg-white
          border border-danger
          text-danger
          rounded-[50px]
          text-lg
          mt-3
        "
      >
        Abbrechen
      </button>
    </div>
  </div>
</template>

<script>
import Button from "../Button";

export default {
  components: {
    Button,
  },
  props: {
    title: String,
    value: String,
    list: Array,
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  }
};
</script>