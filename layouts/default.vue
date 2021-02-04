<template>
  <div class="site-wrapper">
    <Header />
    <div class="main-content">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/system/Header.vue";
import Footer from "~/components/system/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
