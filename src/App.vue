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

export default {
  components: {
    Header,
    Footer,
  },
  setup() {
    // const isLoading = computed(() => store.getters.isLoading);
  },
};
</script>

<style lang="scss"></style>
