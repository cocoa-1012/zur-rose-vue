<template>
  <div class="px-[30px] py-[46px] relative min-h-screen">
    <div class="flex items-center mb-[30px]" @click="back">
      <img src="/images/icons/arrow_left.svg" alt=":( Not Found" />
      <span class="text-base">zurück</span>
    </div>
    <div
      class="
        bg-white
        border border-[#DADADA]
        rounded-[18px]
        px-3
        py-[18px]
        relative
        min-h-[440px]
      "
    >
      <p class="font-bold text-xl text-danger mb-3">Aktivitäten</p>
      <p class="text-base text-[#616161] leading-8 mb-6">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat.
      </p>
      <button
        class="h-[50px] bg-danger px-[18px] rounded-[50px] text-lg text-white"
      >
        Mehr
      </button>
      <img
        src="/images/pages/dashboard/woman.png"
        class="absolute bottom-0 right-0 h-72 mr-10 mt-0 mb-0"
        alt=":( Not Found"
      />
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>