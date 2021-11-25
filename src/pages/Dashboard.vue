<template>
  <div class="bg-light px-6 py-1 pb-[88px]">
    <div
      class="
        w-full
        px-3
        py-[18px]
        bg-white
        rounded-[18px]
        min-h-[420px]
        relative
        overflow-hidden
        mb-6
      "
    >
      <p class="font-bold text-xl text-danger mb-3">Hallo Martina Schauer!</p>
      <p class="text-base text-[#616161] leading-8 mb-6">
        Amet minim mollit non deserunt ullamco es t sit aliqua dolor do amet
        sint. Exercitation veniam consequat sunt nostrud amet.
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
    <p class="text-lg mb-3">Heute, 23.01.2021 15:13 Uhr</p>
    <div
      class="
        bg-white
        rounded-[20px]
        px-6
        py-3
        flex
        justify-between
        items-center
        mb-3
      "
    >
      <router-link to="/injection/one">
        <div class="flex items-center">
          <img src="/images/pages/dashboard/drug_box.svg" alt=":( Not Found" />
          <div class="ml-[18px] flex flex-col">
            <span class="text-base mb-0.5">Evrysdi einnehmen</span>
            <span class="text-xs text-dark">Dosis: 6,6 ml</span>
          </div>
        </div>
      </router-link>
      <img src="/images/pages/dashboard/arrow_right.svg" alt=":( Not Found" />
    </div>
    <p class="text-lg mb-3 mt-1.5">Diese Woche:</p>
    <div
      class="
        bg-white
        rounded-[20px]
        px-6
        py-3
        flex
        justify-between
        items-center
        mb-3
      "
    >
      <div class="flex items-center">
        <img src="/images/pages/dashboard/plus.svg" class="h-9" alt=":( Not Found" />
        <div class="ml-[18px] flex flex-col">
          <span class="text-base mb-0.5">Rezept läuft ab</span>
          <span class="text-xs text-danger">morgen</span>
        </div>
      </div>
      <img src="/images/pages/dashboard/arrow_right.svg" alt=":( Not Found" />
    </div>
    <div
      class="
        bg-white
        rounded-[20px]
        px-6
        py-3
        flex
        justify-between
        items-center
        mb-3
      "
    >
      <div class="flex items-center">
        <img src="/images/pages/dashboard/calendar.svg" class="h-9" alt=":( Not Found" />
        <div class="ml-[18px] flex flex-col">
          <span class="text-base mb-0.5">Haltbarkeit überprüfen</span>
          <span class="text-xs text-danger">bis morgen</span>
        </div>
      </div>
      <img src="/images/pages/dashboard/arrow_right.svg" alt=":( Not Found" />
    </div>
    <div
      class="
        bg-white
        rounded-[20px]
        px-6
        py-3
        flex
        justify-between
        items-center
        mb-3
      "
    >
      <div class="flex items-center">
        <img src="/images/pages/dashboard/time.svg" alt=":( Not Found" />
        <div class="ml-[18px] flex flex-col">
          <span class="text-base mb-0.5">Zeit, nachzubestellen!</span>
          <span class="text-xs text-danger">bis morgen</span>
        </div>
      </div>
      <img src="/images/pages/dashboard/arrow_right.svg" alt=":( Not Found" />
    </div>
    <button
      class="
        fixed
        right-6
        bottom-24
        w-12
        h-12
        bg-danger
        rounded-full
        flex
        justify-center
        items-center
      "
    >
      <img src="/images/icons/chat.svg" />
    </button>
    <Layout />
  </div>
</template>

<script>
import Layout from "../layouts/Layout.vue";
export default {
  components: {
    Layout,
  },
  transition: 'home',
};
</script>