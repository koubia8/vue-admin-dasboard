<template>
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-backgroud': isDarkMode }"
  >
    <div class="request">
      <img src="@/assets/DCHQ-dark.svg" v-show="!isDarkMode" />
      <img src="@/assets/DCHQ.svg" v-show="isDarkMode" />
      <h4 :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }">
        Reqeust Account
      </h4>
      <form @submit.prevent="onSubmit">
        <input
          :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
          type="email"
          placeholder="Email"
          v-model="email"
          required
        />
        <button>Request Account</button>
      </form>

      <router-link
        to="/signin"
        :class="{ 'light-request': isDarkMode, 'dark-request': !isDarkMode }"
        >Already have an account? Sign in now.</router-link
      >
      <themeSwitch />
    </div>
  </div>
</template>

<script>
import ThemeSwitch from "@/components/ThemeSwitch.vue";

export default {
  name: "Request",
  components: {
    ThemeSwitch,
  },
  data() {
    return {
      email: "",
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
  methods: {
    onSubmit() {
      const email = this.email;
      // slack api logic
      let slackURL = new URL("https://slack.com/api/chat.postMessage");

      const data = {
        channel: "hq-vue",
        text: `${email}  has requested admin access to HQ. Please go to Netlify to invite them.`,
        pretty: 1,
      };

      slackURL.search = new URLSearchParams(data);
      var myInit = {
        method: "GET",
        headers: {
          Authorization:
            "Bearer xoxb-1537918929431-2548038005557-El9vF5hvFyw69vC4JM5Lrumk",
          "Content-Type": "application/json",
        },
      };
      fetch(slackURL, myInit);
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
}
.request {
  width: 400px;
  text-align: center;
}
</style>
