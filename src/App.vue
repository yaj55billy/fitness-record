<template>
  <Header />
  <main class="content">
    <div class="container">
      <router-view />
    </div>
  </main>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { onMounted, ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    Header,
    Footer,
  },
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch("getSquatData"); // init
    });
  },
};
</script>

<style lang="scss"></style>
