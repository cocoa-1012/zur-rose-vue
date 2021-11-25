<template>
  <div class="bg-light min-h-screen px-6 py-10 pb-[88px]">
    <div class="flex justify-between mb-8">
      <div>
        <p class="text-base mb-2">Nachrichten</p>
        <p class="text-xs text-dark font-bold">
          <a class="text-danger">Montag</a>, 08 November 2021
        </p>
      </div>
      <router-link to="/activities/overlay">
        <InfoButton />
      </router-link>
    </div>
    <Button>
      Neue Nachricht erstellen
    </Button>
    <div class="w-full bg-white py-6 px-6 mt-6 text-xs text-secondary">
      <span class="font-bold">Inbox:</span> HEUTE
    </div>
    <div class="bg-lightred px-6 py-6 flex justify-between items-center">
      <div class="flex items-center">
        <img src="/images/pages/messages/userimage.png" alt=":( Not Found" />
        <div class="ml-[18px] flex flex-col">
          <span class="text-xs mb-0.5">Fanny Chapman</span>
          <span class="text-base  font-bold">Rezept-Erneuerung</span>
        </div>
      </div>
      <span class="text-base  font-bold">8:56 Uhr</span>
      <img src="/images/icons/reddot.svg" alt=":( Not Found" />
    </div>
    <div class="bg-lightred px-6 py-6 flex justify-between items-center">
      <span class="ml-12 text-xs text-black opacity-60">Das Rezept läuft bald ab. Über die Rezept-Verwaltung können Sie die ... </span>
    </div>    
    <div class="bg-white px-6 py-6 flex justify-between items-center">
      <div class="flex items-center">
        <img src="/images/pages/messages/userimage.png" alt=":( Not Found" />
        <div class="ml-[18px] flex flex-col">
          <span class="text-xs mb-0.5">Fanny Chapman</span>
          <span class="text-base  font-bold">Zustelleung heute</span>
        </div>
      </div>
      <span class="text-base  font-bold">10:49 Uhr</span>
    </div>
    <div class="bg-white px-6 py-6 flex justify-between items-center">
      <span class="ml-12 text-xs text-black opacity-60">Die Bestellung trifft heute zwischen 09:00 und 09:30 ein und ... </span>
    </div>    
    <div class="w-full bg-white py-6 px-6 text-xs text-secondary border">
      GESTERN
    </div>
    <div class="bg-white px-6 py-6 flex justify-between items-center">
      <div class="flex items-center">
        <img src="/images/pages/messages/userimage.png" alt=":( Not Found" />
        <div class="ml-[18px] flex flex-col">
          <span class="text-xs mb-0.5">Fanny Chapman</span>
          <span class="text-base  font-bold">Rezept-Erneuerung</span>
        </div>
      </div>
      <span class="text-base  font-bold">8:56 Uhr</span>
    </div>
    <div class="bg-white px-6 py-6 flex justify-between items-center">
      <span class="ml-12 text-xs text-black opacity-60">Das Rezept läuft bald ab. Über die Rezept-Verwaltung können Sie die ... </span>
    </div>   
    <Layout active="messages" />
  </div>
</template>

<script>
import Layout from "../layouts/Layout";
import Button from "../components/Button";
import InfoButton from "../components/InfoButton";

export default {
  data: function () {
    return {
      items: [
      ],
    };
  },
  components: { Layout, Button, InfoButton},
};
</script>