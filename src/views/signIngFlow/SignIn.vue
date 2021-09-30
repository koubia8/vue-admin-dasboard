<template>
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-backgroud': isDarkMode }"
  >
    <Notification v-if="hasText" :text="text" />
    <request-account />
    <div class="login">
      <img src="@/assets/DCHQ-dark.svg" v-show="!isDarkMode" />
      <img src="@/assets/DCHQ.svg" v-show="isDarkMode" />
      <h4 :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }">
        Sign int Design+Code HQ
      </h4>
      <form @submit.prevent="onSubmit">
        <input
          :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
          type="email"
          placeholder="Your email"
          v-model="email"
          required
        />
        <input
          :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
          type="password"
          placeholder="Your password"
          v-model="password"
          required
        />
        <button>Sign In</button>
      </form>

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
import { auth } from "@/main";
import Notification from "@/components/Notification.vue";
export default {
  name: "SignIn",
  components: {
    RequestAccount,
    ThemeSwitch,
    Notification,
  },
  data() {
    return {
      email: "",
      password: "",
      hasText: false,
      text: "",
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
      const password = this.password;
      auth
        .login(email, password, true)
        .then(() => {
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    const params = this.$route.params;

    if (params.userLoggedOut) {
      this.hasText = true;
      this.text = "You have logged out !";
    } else if (params.userRecoveredAccount) {
      this.hasText =
        this.text = `A recovery email has been sent to ${params.email}`;
    }
  },
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
