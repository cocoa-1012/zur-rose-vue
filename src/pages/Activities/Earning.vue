<template>
  <div class="px-6 py-[46px] relative min-h-screen">
    <div class="flex items-center mb-2.5 relative" >
      <img src="/images/icons/arrow_left.svg" alt=":( Not Found" @click="back" />
      <span class="text-base">Aktivitäten</span>
      <div class="absolute top-0 right-0">
        <router-link to="/activities/overlay">
          <InfoButton />
        </router-link>
      </div>
    </div>
    <p class="text-base font-bold mb-6">Meine Einnahmen</p>
    <div class="flex items-center mb-6">
      <select class="w-full h-10 bg-light rounded-xl px-3">
        <option class="text-sm font-medium opacity-60">
          Zeiteinheit Monat
        </option>
      </select>
      <div class="flex flex-shrink-0">
        <button
          class="
            w-10
            h-10
            rounded-lg
            flex
            justify-center
            items-center
            ml-3
            bg-danger
          "
        >
          <img src="/images/icons/barchart.svg" alt=":( Not Found" />
        </button>
        <button
          class="
            w-10
            h-10
            rounded-lg
            flex
            justify-center
            items-center
            ml-3
            bg-white
            border border-danger
          "
        >
          <img src="/images/icons/bell.svg" alt=":( Not Found" />
        </button>
      </div>
    </div>
    <div class="mb-9">
      <Calendar :attributes="attributes" class="w-full border-none" />
    </div>
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <img src="/images/icons/dark_bell.svg" alt=":( Not Found" />
        <span class="text-[17px] ml-4">Erinnerung</span>
      </div>
      <Toggle />
    </div>
    <div class="fixed bottom-6 left-6 right-6">
      <router-link to="/activities/weight">
        <Button>Neue Einnahme dokumentieren</Button>
      </router-link>
    </div>
  </div>
</template>

<script>
import Calendar from "v-calendar/lib/components/calendar.umd";
import Button from "../../components/Button";
import Toggle from "../../components/Toggle";
import InfoButton from "../../components/InfoButton";

export default {
  components: {
    Button,
    Calendar,
    Toggle,
    InfoButton,
  },
  computed: {
    dates() {
      return this.days.map((day) => day.date);
    },
    attributes() {
      return this.dates.map((date) => ({
        highlight: true,
        dates: date,
      }));
    },
  },
  data: function () {
    return {
      days: [],
      items: [
        {
          name: "3 Flaschen",
          time: "05.03.21",
          description: "Birkenweg 4, 8000 Zürich",
          status: "pending",
          disable: false,
          active: false,
        },
        {
          name: "3 Flaschen",
          time: "05.01.21",
          description: "Birkenweg 4, 8000 Zürich",
          status: "success",
          disable: false,
          active: true,
        },
        {
          name: "3 Flaschen",
          time: "05.12.20",
          description: "Bungalowgasse 8A, 8000 Zürich",
          status: "success",
          disable: false,
          active: false,
        },
        {
          name: "3 Flaschen",
          time: "05.11.20",
          description: "Birkenweg 4, 8000 Zürich",
          status: "success",
          disable: true,
          active: false,
        },
      ],
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  }
};
</script>