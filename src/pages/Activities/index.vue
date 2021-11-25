<template>
  <div class="bg-light min-h-screen px-6 py-10 pb-[88px]">
    <div class="flex justify-between mb-8">
      <div>
        <p class="text-base mb-2">Aktivitäten</p>
        <p class="text-xs text-dark font-bold">
          <a class="text-danger">Montag</a>, 23 Januar 2021
        </p>
      </div>
      <router-link to="/activities/overlay">
        <InfoButton />
      </router-link>
    </div>
    <div v-for="(item, index) in items" :key="index">
      <router-link :to="item.link">
        <div
          class="
            mb-[18px]
            bg-white
            shadow-card
            p-6
            pb-5
            rounded-[18px]
            flex
            items-center
          "
        >
          <img :src="item.icon" class="w-10 h-10 mr-5" alt=":( Not Found" />
          <div>
            <p class="text-lg text-danger mb-0.5">{{ item.name }}</p>
            <p class="text-sm">{{ item.content }}</p>
          </div>
        </div>
      </router-link>
    </div>
    <Layout active="activities" />
  </div>
</template>

<script>
import Layout from "../../layouts/Layout";
import InfoButton from "../../components/InfoButton";

export default {
  data: function () {
    return {
      items: [
        {
          name: "Meine Einnahmen",
          content: "Täglich 15:13 Uhr 6,6 ml",
          icon: "/images/pages/dashboard/drug_box.svg",
          link: "/activities/earning"
        },
        {
          name: "Mein Gewicht",
          content: "19,80kg 05.03.21",
          icon: "/images/pages/dashboard/health.svg",
          link: "/activities/weight"
        },
        {
          name: "Meine Bestellungen",
          content: "1 offene Lieferung 06.03.21",
          icon: "/images/pages/dashboard/time.svg",
          link: "/activities/order"
        },
      ],
    };
  },
  components: { Layout, InfoButton },
};
</script>