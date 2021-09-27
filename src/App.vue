import { default } from './components/HelloWorld.vue';
<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import "animate.css";
export default {
  name: "App",
  mounted() {
    const isDarkMode = this.$store.getters.isDarkMode;
    document.body.style.background = isDarkMode ? "#212c4f" : "#f0f3f5";
  },
};
</script>
<style lang="scss">
body {
  background: $dark-blue;
}
h1 {
  @include heading-1;
}
p {
  @include large-text-bold($purple);
}
#app {
  font-family: $system-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $white;
  background-color: $dark-blue;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $white;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

h4 {
  margin: 0;
  font-size: 24px;
  line-height: 34px;
  /* identical to box height */
  text-align: center;

  /* white */

  color: #ffffff;
}
input {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  height: 60px;
  font-size: 20px;
  font-weight: 600;
  color: white;
  padding-left: 20px;
  margin-top: 20px;
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}
button {
  /* teal */

  background: #56ccf2;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  width: 100%;
  height: 60px;
  font-size: 20px;
  color: white;
  border: none;
  margin-top: 20px;
  margin-top: 40px;
  cursor: pointer;
}
a {
  font-size: 16px;
  line-height: 25px;
  /* identical to box height */
  text-align: center;
  color: rgba(255, 255, 255, 0.3);

  text-decoration: none;
}
/* THEME */

.light-background {
  background-color: $light-gray;
}
.dark-backgroud {
  background-color: $dark-blue;
}
.dark-text {
  color: $white;
}
.light-text {
  color: $black;
}

.light-field {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}
.dark-field {
  background: rgba(198, 208, 235, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
}
</style>
