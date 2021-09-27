<template>
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-backgroud': isDarkMode }"
  >
    <request-account />
    <div class="login">
      <img src="@/assets/DCHQ-dark.svg" v-show="!isDarkMode" />
      <img src="@/assets/DCHQ.svg" v-show="isDarkMode" />
      <h4 :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }">
        Sign int Design+Code HQ
      </h4>
      <input
        :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
        type="email"
        placeholder="Your email"
      />
      <input
        :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
        type="password"
        placeholder="Your password"
      />
      <button>Sign In</button>
      <router-link
        to="/recover"
        :class="{ 'light-request': isDarkMode, 'dark-request': !isDarkMode }"
        >Forgot your password ?</router-link
      >
      <themeSwitch />
    </div>
  </div>
</template>

<script>
import RequestAccount from "@/components/RequestAccount.vue";
import ThemeSwitch from "@/components/ThemeSwitch.vue";
export default {
  name: "SignIn",
  components: {
    RequestAccount,
    ThemeSwitch,
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
}
.login {
  width: 400px;
}
</style>
