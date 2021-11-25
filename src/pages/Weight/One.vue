<template>
  <Weight
    title="Bitte aktuelles Gewicht eingeben"
    value="7,80 kg"
    :list="['19,6', '19,7', '19,9', '20']"
  />
</template>

<script>
import Weight from "../../components/Weight";
export default {
  components: {
    Weight,
  },
};
</script>