<template>
  <div
    class="
      flex
      items-start
      justify-between
      w-10
      min-h-10
      rounded-l-lg
      border border-[#E5E5E5]
      bg-white
      p-[3px]
    "
    @click="handleToggle"
  >
    <div class="flex flex-col">
      <div
        v-for="locale in locales"
        :key="locale.id"
        class="text-lg"
        :class="{ 'text-danger': locale.id === selectedLang && isOpened }"
      >
        <span v-if="isShow(locale.id)" @click="handleSelectLang(locale.id)">{{
          locale.name
        }}</span>
      </div>
    </div>
    <img class="mt-[10px]" src="/images/icons/arrow_down.svg" />
  </div>
</template>

<script>
import i18n from "../../i18n";
export default {
  data: function () {
    return {
      isOpened: false,
      selectedLang: "de",
      locales: [
        {
          id: "de",
          name: "DE",
        },
        {
          id: "fr",
          name: "FR",
        },
        {
          id: "it",
          name: "IT",
        },
      ],
    };
  },
  methods: {
    isShow: function (id) {
      return this.isOpened || this.selectedLang === id;
    },
    handleToggle: function () {
      this.isOpened = !this.isOpened;
    },
    handleSelectLang: function (lang) {
      this.selectedLang = lang;
      i18n.locale = lang;
    },
  },
};
</script>