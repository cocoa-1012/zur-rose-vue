<template>
  <div class="px-[30px] py-[46px] relative min-h-screen">
    <div class="flex items-center mb-12" @click="back">
      <img src="/images/icons/arrow_left.svg" alt=":( Not Found" />
      <span class="text-base">zurück</span>
    </div>
    <p class="text-center text-[28px] mb-[30px]">Passwort vergessen</p>
    <p class="text-center text-sm text-[#333333] mb-[30px]">
      Ihnen wurde ein Link zum Zurücksetzen des Passwortes an Ihre E-Mail
      Adresse gesendet.
    </p>
    <p class="text-center text-sm mb-20">
      Vielen Dank<br />
      Ihr Zur Rose Team
    </p>
    <div class="flex justify-center">
      <img src="/images/icons/success.svg" alt=":( Not Found" />
    </div>
    <div class="absolute bottom-0 left-[30px] right-[30px] bottom-[46px]">
      <Button>Zurück</Button>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button";

export default {
  components: {
    Button,
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  }
};
</script>