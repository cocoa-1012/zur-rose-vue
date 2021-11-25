<template>
  <div class="px-6 py-[46px] relative min-h-screen">
    <div class="flex items-center mb-6" @click="back">
      <img src="/images/icons/arrow_left.svg" alt=":( Not Found" />
      <span class="text-base">zurück</span>
    </div>
    <div class="flex flex-col items-center">
      <p class="text-2xl text-[#333] text-center">
        Das Medikamnet ...
      </p>
    </div>
    <div>
      <div>
        wurde verabreicht
      </div>
      <div>
        wurde verabreicht
      </div>
    </div>
    <div>
      <Button>Speichern</Button>
      <button class=" w-full h-[50px] bg-white border border-danger text-danger rounded-[50px] text-lg mt-3 ">
        Abbrechen
      </button>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button";

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