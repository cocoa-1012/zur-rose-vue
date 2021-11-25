<template>
  <div class="px-6 pt-[46px] relative min-h-screen">
    <div class="flex items-center mb-6" @click="back">
      <img src="/images/icons/arrow_left.svg" alt=":( Not Found" />
      <span class="text-base">zurück</span>
    </div>
    <div class="mb-10">
      <div v-for="item in items" :key="item.id">
        <div class="flex flex-col items-center" v-if="item.id === active">
          <span
            class="
              w-16
              h-16
              bg-danger
              text-white
              rounded-full
              text-[60px]
              flex
              justify-center
              items-center
            "
          >
            {{ item.id }}
          </span>
          <img
            class="w-[190px] h-[190px] rounded-full mb-20"
            :src="'/images/pages/info/' + item.id + '.png'"
            alt=":( Not Found"
          />
          <p class="text-sm font-bold text-center">{{ item.text }}</p>
        </div>
      </div>
    </div>
    <div class="">
      <div class="flex items-center justify-center my-5">
        <div v-for="index in items.length" :key="index">
          <div
            class="w-[9px] h-[9px] rounded-md mx-0.5"
            :class="active === index ? 'bg-danger' : 'bg-[#C4C4C4]'"
          ></div>
        </div>
      </div>
      <Button :onClick="() => handleNext()">Weiter</Button>
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
        :class="active === 1 ? 'opacity-0' : 'opacity-100'"
      >
        Zurück
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
  data() {
    return {
      active: 1,
      items: [
        {
          id: 1,
          text: "Entfernen Sie die kindersichere Verschlusskappe, indem Sie diese herunterdrücken und dabei nach links drehen. Werfen Sie die Kappe nicht weg.",
        },
        {
          id: 2,
          text: "Drücken Sie den Injectionkolben bis zum Anschlag in die Spritze hinein, um alle Luft aus der Spritze zu entfernen.",
        },
        {
          id: 3,
          text: "Stellen Sie die Flasche aufrecht auf eine ebene Fläche, z. B. einen Tisch. Führen Sie die Spitze der Spritze in den Flaschenadapter ein",
        },
        {
          id: 4,
          text: "Drehen Sie die Flasche vorsichtig auf den Kopf. Dabei muss die Spitze der Spritze fest im Flaschenadapter sitzen.",
        },
        {
          id: 5,
          text: "Ziehen Sie nun den Kolben langsam zurück, um die verord- nete Dosis aufzuziehen. Die Oberseite des schwarzen Kolbenstopfens muss mit der ml-Markierung übereinstim- men, die der verordneten Dosis entspricht.",
        },
        {
          id: 6,
          text: "Halten Sie den Kolben weiterhin fest, damit er nicht ver- rutscht. Drehen Sie dann die Flasche wieder in die auf- rechte Position, ohne die Spritze aus dem Flaschenadapter herauszunehmen. Stellen Sie die Flasche wieder auf die ebene Oberfläche und ziehen Sie die Spritze vorsichtig aus der Flasche, indem Sie diese gerade nach oben ziehen.",
        },
        {
          id: 7,
          text: "Halten Sie die Spritze mit der Spitze nach oben und schauen Sie, ob sich Luftblasen im Medikament befinden. Wenn Luftblasen vorhanden sind (vor allem grössere), haben Sie möglicherweise nicht die korrekte Medikamentenmenge aufgezogen. Falls Luftblasen sichtbar sind, setzen Sie die Spitze der Spritze wieder fest in den Flaschenadapter und drücken Sie das Medikament mit dem Kolben zurück in die Flasche. Wiederholen Sie dann die Schritte 4 bis 7.",
        },
        {
          id: 8,
          text: "Setzen Sie die Verschlusskappe wieder auf die Flasche und drehen Sie die Kappe nach rechts. Vergewisseren Sie sich, dass diese fest zugeschraubt ist, bevor Sie die Flasche wieder in den Kühlschrank stellen.",
        },
      ],
    };
  },
  methods: {
    handleNext() {
      if (this.active === this.items.length) {
        this.active = 1;
      } else {
        this.active += 1;
      }
    },
    back() {
      this.$router.go(-1);
    },
  },
};
</script>