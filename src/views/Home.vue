<template>
  <div class="home">
    <Header />
    <div class="container">
      <div class="spread">
        <h1>Traffic Overview</h1>
        <div class="toggle">
          <div ref="days" class="days" @click="toggleDays">Days</div>
          <div ref="weeks" class="weeks" @click="toggleWeeks">Weeks</div>
          <div ref="months" class="months" @click="toggleMonths">Months</div>
        </div>
      </div>
      <apexchart
        class="chart-1"
        width="100%"
        height="500px"
        type="area"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import VueApexCharts from "vue-apexcharts";
import Header from "@/components/Header.vue";
export default {
  name: "Home",
  components: {
    Header,
    apexchart: VueApexCharts,
  },
  data() {
    return {
      chartOptions: {
        colors: ["#14f1d9", "#7b42f6"],
        legend: {
          labels: {
            colors: [this.$store.getters.isDarkMode ? "white" : "black"],
          },
          position: "top",
        },
        grid: {
          xaxis: {
            lines: {
              show: true,
            },
          },
          yaxis: {
            lines: {
              show: false,
            },
          },
        },

        chart: {
          id: "users",
        },
        xaxis: {
          type: "datetime",
        },
      },
      series: [
        {
          name: "active users",
          data: [
            [new Date("January 1, 2019"), 30],
            [new Date("January 5, 2019"), 40],
          ],
        },
        {
          name: "new users",
          data: [
            [new Date("January 1, 2019"), 80],
            [new Date("January 5, 2019"), 20],
          ],
        },
      ],
    };
  },
  methods: {
    toggleDays() {
      this.$refs.days.style.color = "white";
      this.$refs.days.style.background = "#56ccf2";
      this.$refs.days.style.borderRadius = "4px";

      this.$refs.weeks.style.color = "#5b6175";
      this.$refs.weeks.style.background = "none";
      this.$refs.weeks.style.borderRadius = "none";

      this.$refs.months.style.color = "#5b6175";
      this.$refs.months.style.background = "none";
      this.$refs.months.style.borderRadius = "none";
    },
    toggleWeeks() {
      this.$refs.weeks.style.color = "white";
      this.$refs.weeks.style.background = "#56ccf2";
      this.$refs.weeks.style.borderRadius = "4px";

      this.$refs.days.style.color = "#5b6175";
      this.$refs.days.style.background = "none";
      this.$refs.days.style.borderRadius = "none";

      this.$refs.months.style.color = "#5b6175";
      this.$refs.months.style.background = "none";
      this.$refs.months.style.borderRadius = "none";
    },
    toggleMonths() {
      this.$refs.months.style.color = "white";
      this.$refs.months.style.background = "#56ccf2";
      this.$refs.months.style.borderRadius = "4px";

      this.$refs.weeks.style.color = "#5b6175";
      this.$refs.weeks.style.background = "none";
      this.$refs.weeks.style.borderRadius = "none";

      this.$refs.days.style.color = "#5b6175";
      this.$refs.days.style.background = "none";
      this.$refs.days.style.borderRadius = "none";
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-left: 15%;
  padding-right: 15%;
}
.spread {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  width: 100;
}
h1 {
  @include heading-3;
}
.toggle {
  @include medium-text;
  color: $dark-gray;
  height: 50px;
  width: 240px;
  border-radius: 6px;
  padding: 5px;
  display: flex;
  flex-wrap: nowrap;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);

  animation-delay: 0.5s;

  &:hover {
    cursor: pointer;
  }
}

@mixin toggle-settings {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33.33%;
  height: 100%;
}

.days {
  @include toggle-settings;
  background: $teal;
  border-radius: 4px;
  color: $white;
}
.weeks {
  @include toggle-settings;
}
.months {
  @include toggle-settings;
}
</style>
