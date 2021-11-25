<template>
  <div class="py-10 px-6">
    <div class="relative flex justify-center items-center mb-8">
      <img src="/images/logo.svg" />
      <div class="absolute right-0">
        <InfoButton />
      </div>
    </div>
    <div class="text-[28px] leading-[42px] mb-2.5">
      <p class="text-center">Registrierung für die</p>
      <p class="text-center text-danger">Zur Rose Care-App</p>
    </div>
    <p class="text-base text-secondary font-medium text-center mb-[38px]">
      Sie haben bereits ein Konto?
      <router-link to="/" class="font-bold text-danger">Anmelden</router-link>
    </p>
    <div v-if="step === 0">
      <TextField label="E - Mail - Adresse" />
      <TextField label="E-Mail-Adresse wiederholen" />
    </div>
    <div v-else>
      <TextField label="Benutzername" />
      <TextField type="password" label="Passwort" />
      <TextField type="password" label="Passwort wiederholen" />
    </div>
    <div class="flex justify-between items-start" v-if="step === 0">
      <div class="flex-shrink-0">
        <Checkbox />
      </div>
      <span class="font-poppins text-xs ml-2">
        Durch die Erstellung eines Kontos erklären Sie sich mit unseren
        <span class="text-danger">Datenschutzerklärungen</span> und
        <span class="text-danger">Nutzungsbedingungen</span> einverstanden.
      </span>
    </div>
    <div class="fixed left-6 right-6 bottom-10">
      <Button :onClick="handleRegister">
        <span v-if="step === 0">Registrieren</span>
        <span v-else>Profil aktivieren</span>
      </Button>
    </div>
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
  data: function () {
    return {
      step: 0,
    };
  },
  methods: {
    handleRegister() {
      if (this.step === 0) {
        this.step = 1;
      }
    },
  },
};
</script>