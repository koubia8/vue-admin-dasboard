<template>
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-backgroud': isDarkMode }"
  >
    <RequestAccount />
    <div class="request">
      <img src="@/assets/DCHQ-dark.svg" v-show="!isDarkMode" />
      <img src="@/assets/DCHQ.svg" v-show="isDarkMode" />
      <h4 :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }">
        Recover Account
      </h4>
      <form @submit.prevent="onSubmit">
        <input
          :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
          type="email"
          placeholder="Email"
          v-model="email"
          required
        />
        <button>Send Email</button>
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
import RequestAccount from "@/components/RequestAccount.vue";
import { auth } from "@/main";

export default {
  name: "Recover",
  components: {
    ThemeSwitch,
    RequestAccount,
  },
  data() {
    return {
      email: null,
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
      auth
        .requestPasswordRecovery(email)
        .then(() => {
          this.$router.push({
            name: "signin",
            params: {
              userRecoveredAccount: true,
              email: email,
            },
          });
        })
        .catch((error) => {
          alert("Error: " + error);
        });
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
