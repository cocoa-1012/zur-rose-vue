<template>
  <Injection :dose="['6 ml', '2,1 ml']" time="15:13" weight="7,80" />
</template>

<script>
import Injection from "../../components/Injection";
export default {
  components: {
    Injection,
  },
};
</script>