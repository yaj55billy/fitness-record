<template>
  <Header />
  <main class="content">
    <div class="container">
      <router-view />
    </div>
  </main>
  <Footer />
  <loading v-model:active="isLoading" :is-full-page="true" />
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { onMounted, ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    Loading,
    Header,
    Footer,
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

<style lang="scss"></style>
