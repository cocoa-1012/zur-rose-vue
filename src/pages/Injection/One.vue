<template>
  <Injection :dose="['12 ml', '6,6 ml']" time="15:13" weight="21,50" />
</template>

<script>
import Injection from "../../components/Injection";
export default {
  components: {
    Injection,
  },
};
</script>