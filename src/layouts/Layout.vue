<template>
  <div
    class="
      fixed
      left-0
      bottom-0
      w-full
      bg-white
      pt-6
      pb-5
      px-3.5
      flex
      items-center
      justify-between
      shadow-footer
    "
  >
    <router-link :to="route.link" v-for="route in routes" :key="route.id">
      <div class="flex flex-col items-center">
        <img
          v-if="active === route.id"
          :src="route.activeImage"
          alt=":( Not Found"
        />
        <img v-else :src="route.normalImage" alt=":( Not Found" />
        <span
          :class="active === route.id ? 'text-danger' : 'text-dark'"
          class="mt-1 text-xs"
          >{{ route.name }}</span
        >
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      routes: [
        {
          id: "dashboard",
          name: "Dashboard",
          link: "/dashboard",
          activeImage: "/images/icons/dashboard_active.svg",
          normalImage: "/images/icons/dashboard_normal.svg",
        },
        {
          id: "messages",
          name: "Nachrichten",
          link: "/messages",
          activeImage: "/images/icons/news_active.svg",
          normalImage: "/images/icons/news_normal.svg",
        },
        {
          id: "activities",
          name: "Aktivitäten",
          link: "/activities",
          activeImage: "/images/icons/activities_active.svg",
          normalImage: "/images/icons/activities_normal.svg",
        },
        {
          id: "account",
          name: "Mein Konto",
          link: "/account",
          activeImage: "/images/icons/account_active_new.svg",
          normalImage: "/images/icons/account_normal.svg",
        },
      ],
    };
  },
  props: {
    active: {
      type: String,
      default: "dashboard",
    },
  },
};
</script>

