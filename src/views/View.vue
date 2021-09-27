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

import { ref, onMounted, computed, onBeforeMount } from "vue";
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

    store.dispatch("isLoadingHandler");
    store.dispatch("getSquatData").then(() => {
      store.dispatch("isLoadingHandler");
    });

    // onBeforeMount(() => {
    //   console.log("View beforeMount");
    // });

    // onMounted(() => {
    //   console.log("View mounted");
    // });

    return {
      isLoading,
    };
  },
  // beforeCreate() {
  //   console.log("View beforeCreate");
  // },
  // created() {
  //   console.log("View created");
  // },
};
</script>

<style></style>
