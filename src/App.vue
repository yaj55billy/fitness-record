<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<template>
  <Header />
  <main class="content">
    <div class="container">
      <router-view />
    </div>
  </main>
  <Footer />
</template>

<style lang="scss"></style>
