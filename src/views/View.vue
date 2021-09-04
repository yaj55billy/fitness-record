<template>
  <ViewList />
  <br />
  <ViewChart />
</template>

<script>
import ViewList from "@/components/ViewList.vue";
import ViewChart from "@/components/ViewChart.vue";

import { computed } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    ViewList,
    ViewChart,
  },
  setup() {
    const store = useStore();
    const squatData = computed(() => store.getters.squatData);

    return {
      squatData,
    };
  },
};
</script>

<style></style>
