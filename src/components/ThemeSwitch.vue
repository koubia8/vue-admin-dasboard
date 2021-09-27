<template>
  <div
    @click="toogleDarkMode"
    class="toggle"
    :class="{ 'light-toggle': !isDarkMode, 'dark-toggle': isDarkMode }"
  >
    <div
      class="toggle-switch"
      :class="{ 'toggle-left': !isDarkMode, 'toggle-right': isDarkMode }"
    >
      <img v-if="!isDarkMode" src="@/assets/sum.svg" />
      <img v-if="isDarkMode" src="@/assets/moom.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ThemeSwitch",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
  methods: {
    toogleDarkMode() {
      this.$store.commit("toogleDarkMode");
    },
  },
};
</script>

<style lang="scss" scoped>
.toggle {
  width: 175px;
  border-radius: 10px;
  box-sizing: border-box;
  margin: 50px auto;
  cursor: pointer;
  display: flex;
}
.light-toggle {
  background: linear-gradient(328.85deg, #f7fcfc 0%, #fafcfa 100%);
  box-shadow: inset 0px 5px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.04);
}
.dark-toggle {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: inset 0px 5px 10px rgba(255, 255, 255, 0.1);
}
.toggle-switch {
  margin: 2px;
  border-radius: 8px;
  padding: 15px 35px;
}
.toggle-left {
  transform: translateX(0);
  transition-duration: 0.5s;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
.toggle-right {
  transform: translateX(90%);
  transition-duration: 0.5s;
  background: #1b233f;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
