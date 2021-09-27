<template>
  <h2 class="page-title">圖表</h2>
  <div class="chart-wrap">
    <Vue3ChartJs
      ref="chart"
      :id="lineChart.id"
      :type="lineChart.type"
      :data="lineChart.data"
    ></Vue3ChartJs>
    <!-- @before-render="beforeRenderLogic" -->
  </div>
</template>

<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import { ref, reactive, computed, onMounted, onBeforeMount } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    Vue3ChartJs,
  },
  setup() {
    const store = useStore();
    const chart = ref(null);
    const dateData = computed(() => store.getters.dateData);
    const trainData = computed(() => store.getters.trainData);

    let lineChart = reactive({
      id: "line",
      type: "line",
      data: {
        labels: [1, 2, 3, 4],
        datasets: [
          {
            label: "健身紀錄",
            data: [1, 2, 3, 4],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });

    store.dispatch("getSquatData").then(() => {
      // console.log("子層取資料");
      lineChart.data.labels = dateData.value;
      lineChart.data.datasets[0].data = trainData.value;
      chart.value.update(250);
    });

    // onBeforeMount(() => {
    //   console.log("Chart beforeMount");
    // });

    // onMounted(() => {
    //   console.log("Chart mounted");
    //   chart.value.update(250);
    // });

    return {
      lineChart,
      chart,
    };
  },
  // beforeCreate() {
  //   console.log("Chart beforeCreate");
  // },
  // created() {
  //   console.log("Chart created");
  // },
};
</script>

<style></style>
