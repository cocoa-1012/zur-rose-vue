<template>
  <div class="px-6 py-[46px] relative min-h-screen">
    <div class="flex items-center mb-6" @click="back">
      <img src="/images/icons/arrow_left.svg" alt=":( Not Found" />
      <span class="text-base">zurück</span>
    </div>
    <div class="flex flex-col items-center">
      <p class="text-2xl text-[#333] text-center">
        Bitte die <span class="text-danger">{{ this.dose[0] }}</span> Spritze
        mit einer Dosis von
        <span class="text-danger">{{ this.dose[1] }}</span> verwenden
      </p>
      <div class="relative w-full flex justify-center mb-10">
        <span
          class="
            top-[75px]
            absolute
            text-xs text-danger
            px-2
            mt-6
            left-1/2
            transform
            -translate-x-1/2
            h-5
            bg-white
            rounded-md
          "
        >
          {{ this.dose[0] }}
        </span>
        <span
          class="
            absolute
            -bottom-2
            left-1/2
            transform
            -translate-x-1/2
            text-base
            font-semibold
            text-danger
          "
        >
          Dosis: {{ this.dose[1] }}
        </span>
        <img src="/images/pages/injection/injector.svg" class="h-70"/>
      </div>
      <div class="w-full">
        <div
          class="
            w-full
            rounded-[12px]
            shadow-card
            mb-3
            bg-white
            h-[75px]
            px-5
            py-1
          "
        >
          <div class="flex justify-between items-center">
            <span class="text-xs">Uhrzeit</span>
            <span class="text-xs text-danger underline">ändern</span>
          </div>
          <div class="text-[28px]">
            <span>{{ this.time }}</span>
            <span class="text-[#85858A]">Uhr</span>
          </div>
        </div>
        <div
          class="
            w-full
            rounded-[12px]
            shadow-card
            mb-3
            bg-white
            h-[75px]
            px-5
            py-1
          "
        >
          <div class="flex justify-between items-center">
            <span class="text-xs">Aktuelles Gewicht</span>
            <span class="text-xs text-danger underline">ändern</span>
          </div>
          <div class="text-[28px]">
            <span>{{ this.weight }}</span>
            <span class="text-[#85858A]">kg</span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <router-link to="/administrate">
        <Button>Weiter zur Verabreichung</Button>
      </router-link>
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
    time: String,
    weight: String,
    dose: Array,
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  }
};
</script>