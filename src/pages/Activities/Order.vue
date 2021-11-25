<template>
  <div class="px-6 py-[46px] relative min-h-screen">
    <div class="flex items-center mb-2.5 relative">
      <img src="/images/icons/arrow_left.svg" alt=":( Not Found" @click="back" />
      <span class="text-base">Aktivitäten</span>
      <div class="absolute top-0 right-0">
        <router-link to="/activities/overlay">
          <InfoButton />
        </router-link>
      </div>
    </div>
    <p class="text-base font-bold mb-6">Meine Bestellungen</p>
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
    <div>
      <div v-for="(item, index) in items" :key="{ index }">
        <div
          class="bg-light rounded-[20px] p-6 pb-5 mb-6 relative"
          :class="item.disable ? 'opacity-40' : ''"
        >
          <div class="flex items-center justify-between mb-5">
            <div class="flex items-center">
              <img
                src="/images/icons/pending.svg"
                v-if="item.status === 'pending'"
              />
              <img src="/images/icons/check.svg" v-else />
              <span
                class="ml-3.5 text-lg"
                :class="
                  item.status === 'pending' ? 'text-warning' : 'text-success'
                "
                >{{ item.name }}</span
              >
            </div>
            <span class="text-sm">{{ item.time }}</span>
          </div>
          <div class="text-base">{{ item.description }}</div>
          <!-- <button
            v-if="item.active"
            class="
              absolute
              w-10
              h-10
              rounded-lg
              bg-danger
              flex
              items-center
              justify-center
              bottom-5
              right-[30px]
            "
          >
            <img src="/images/icons/shopping.svg" alt=":( Not Found" />
          </button> -->
        </div>
      </div>
    </div>
    <div class="fixed bottom-6 left-6 right-6">
      <Button>Neue Bestellung</Button>
    </div>
  </div>
</template>

<script>
import Button from "../../components/Button";
import InfoButton from "../../components/InfoButton";

export default {
  components: {
    Button,
    InfoButton,
  },
  data: function () {
    return {
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
    back (){
      this.$router.go(-1);
    }
  }
};
</script>