<template>
  <h2 class="page-title">圖表</h2>
  <div class="chart" ref="chart" style="width: 100%; height:400px"></div>
</template>

<script>
import useChart from "@/composition/useChart.js";
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const chart = ref(null);
    const store = useStore();

    const squatData = computed(() => store.getters.squatData);

    console.log(squatData);
    const dateT = ref([]);
    const trainT = ref([]);
    squatData.value.forEach((item) => {
      dateT.value.push(item.date);
      trainT.value.push(item.totalTrain);
      // console.log(dateT.value);
      // console.log(trainT.value);
    });

    onMounted(() => {
      const { setOption, resize } = useChart(chart.value);
      setOption({
        xAxis: {
          type: "category",
          data: dateT.value,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: trainT.value,
            type: "line",
          },
        ],
      });

      window.addEventListener("resize", () => {
        resize();
      });
    });

    return {
      chart,
    };
  },
};
</script>

<style></style>
