<template>
  <div>
    <h2>Team</h2>
    <div class="cards">
      <transition
        appear
        appear-active-class="animate__animated animate__flipInX"
      >
        <a
          class="card card-1"
          :class="{ 'dark-card': isDarkMode, 'light-card': !isDarkMode }"
        >
          <img
            src="@/assets/slack.png"
            class="card-header"
            :class="{ 'light-header': !isDarkMode, 'dark-header': isDarkMode }"
          />
          <h3>Slack</h3>
          <p :class="{ 'dark-text': isDarkMode, 'light-text': !isDarkMode }">
            Messaging app for all team communication
          </p>
        </a>
      </transition>
      <transition
        appear
        appear-active-class="animate__animated animate__flipInX"
      >
        <a
          class="card card-2"
          :class="{ 'dark-card': isDarkMode, 'light-card': !isDarkMode }"
        >
          <img
            src="@/assets/contentful.png"
            class="card-header"
            :class="{ 'light-header': !isDarkMode, 'dark-header': isDarkMode }"
          />
          <h3>ContentFul</h3>
          <p :class="{ 'dark-text': isDarkMode, 'light-text': !isDarkMode }">
            Content management system.
          </p>
        </a>
      </transition>
      <transition
        appear
        appear-active-class="animate__animated animate__flipInX"
      >
        <a
          class="card card-3"
          :class="{ 'dark-card': isDarkMode, 'light-card': !isDarkMode }"
        >
          <img
            src="@/assets/dropbox.png"
            class="card-header"
            :class="{ 'light-header': !isDarkMode, 'dark-header': isDarkMode }"
          />
          <h3>Dropbox</h3>
          <p :class="{ 'dark-text': isDarkMode, 'light-text': !isDarkMode }">
            Storage space in the cloude
          </p>
        </a>
      </transition>
      <transition
        appear
        appear-active-class="animate__animated animate__flipInX"
      >
        <a
          class="card card-4"
          :class="{ 'dark-card': isDarkMode, 'light-card': !isDarkMode }"
        >
          <img
            src="@/assets/figma.png"
            class="card-header"
            :class="{ 'light-header': !isDarkMode, 'dark-header': isDarkMode }"
          />
          <h3>Figma</h3>
          <p :class="{ 'dark-text': isDarkMode, 'light-text': !isDarkMode }">
            Collaborative design tool
          </p>
        </a>
      </transition>
      <transition
        appear
        appear-active-class="animate__animated animate__flipInX"
      >
        <a
          class="card card-5"
          :class="{ 'dark-card': isDarkMode, 'light-card': !isDarkMode }"
        >
          <img
            src="@/assets/notion.png"
            class="card-header"
            :class="{ 'light-header': !isDarkMode, 'dark-header': isDarkMode }"
          />
          <h3>Notion</h3>
          <p :class="{ 'dark-text': isDarkMode, 'light-text': !isDarkMode }">
            All in on workspace
          </p>
        </a>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Team",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-left: 25px;
}
h2 {
  @include heading-2;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: space-evenly;
}
.card-header {
  width: 100%;
  border-radius: 10px 10px 0 0;
}
.light-header {
  background: $light-gray;
}
.dark-header {
  background: #283049;
}
.card {
  width: 100%;
  max-width: 300px;
  height: 400px;
  border-radius: 10px;
  margin: 20px;
}

h3 {
  @include heading-3;
  margin-bottom: 15px;
}

p {
  font-size: 15px;
  line-height: 24px;
  text-align: left;
  margin-left: 16px;
  margin-top: 0;
}
.card-1 {
  animation-delay: 0s;
}
.card-2 {
  animation-delay: 0.5s;
}
.card-3 {
  animation-delay: 1s;
}
.card-4 {
  animation-delay: 1.5s;
}
.card-5 {
  animation-delay: 2s;
}
.light-card {
  background: $white;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  &:hover {
    box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.35);
  }
}
.dark-card {
  background: $super-dark-blue;
  box-shadow: 0px 20px 40px rgba(255, 255, 255, 0.15);
  &:hover {
    box-shadow: 0px 30px 60px rgba(255, 255, 255, 0.35);
  }
}
</style>
