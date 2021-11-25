<template>
  <div class="py-10 px-6">
    <div class="relative flex justify-center items-center mb-8">
      <img src="/images/logo.svg" />
      <div class="absolute right-0">
        <InfoButton />
      </div>
    </div>
    <div class="text-[28px] leading-[42px] mb-2.5">
      <p class="text-center">{{ $t("welcome") }}</p>
      <p class="text-center text-danger">Zur Rose Care-App</p>
    </div>
    <p class="text-base text-secondary font-medium text-center mb-[38px]">
      {{ $t("dontHaveAccount") }}
      <router-link to="/signup" class="font-bold text-danger">{{
        $t("toRegister")
      }}</router-link>
    </p>
    <div>
      <TextField :label="$t('username')" />
      <TextField type="password" :label="$t('Passwort')" />
    </div>
    <div class="flex justify-between items-center">
      <div class="flex items-center">
        <Checkbox />
        <span class="font-poppins text-xs ml-2">{{ $t("remember") }}</span>
      </div>
      <span class="text-xs text-danger cursor-pointer">{{
        $t("forgotPassword")
      }}</span>
    </div>
    <router-link to="/dashboard"><div class="fixed left-6 right-6 bottom-10">
      <Button :onClick="handleLogin">
        {{ $t("register") }}
      </Button>
    </div>
    </router-link>
  </div>
</template>

<script>
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import TextField from "../components/TextField";
import InfoButton from "../components/InfoButton";

export default {
  components: {
    Button,
    Checkbox,
    TextField,
    InfoButton,
  },
  methods: {
    handleLogin() {
      console.log("Successfully logined!!!");
    },
  },
};
</script>