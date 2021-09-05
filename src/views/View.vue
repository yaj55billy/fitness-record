<template>
  <ViewList />
  <br />
  <ViewChart />
  <loading v-model:active="isLoading" :is-full-page="true" />
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

import ViewList from "@/components/ViewList.vue";
import ViewChart from "@/components/ViewChart.vue";

import { onMounted, computed } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    Loading,
    ViewList,
    ViewChart,
  },
  setup() {
    const store = useStore();
    const isLoading = computed(() => store.getters.isLoading);

    onMounted(() => {
      store.dispatch("isLoadingHandler");
      store.dispatch("getSquatData").then(() => {
        store.dispatch("isLoadingHandler");
      });
    });

    return {
      isLoading,
    };
  },
};
</script>

<style></style>
