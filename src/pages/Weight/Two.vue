<template>
  <Weight
    title="Bitte geben Sie ihr aktuelles Gewicht ein"
    value="21,50 kg"
    :list="['20', '21', '22', '23']"
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