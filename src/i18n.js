import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "de",
  messages: {
    de: {
      welcome: "Willkommen in der ",
      dontHaveAccount: "Noch keinen Konto?",
      toRegister: "Registrieren",
      username: "Benutzername, Kundennr. oder E-Mail-Adresse",
      password: "Password",
      remember: "Angemeldet bleiben",
      forgotPassword: "Passwort vergessen",
      register: "Anmelden",
    },
    fr: {
      welcome: "Bienvenue à ",
      dontHaveAccount: "Pas encore de compte?",
      toRegister: "Enregistrer",
      username: "Nom d'utilisateur, numéro de client ou e-mail",
      password: "Mot de passe",
      remember: "rester connecté",
      forgotPassword: "Mot de passe oublié",
      register: "Se connecter",
    },
    it: {
      welcome: "Welcome IT",
    },
  },
});

export default i18n;
