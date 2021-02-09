<template>
  <div class="site-wrapper">
    <Header :navLinks="navLinks" :hideModal="true" />

    <AppTitle title="Админка" />
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
  // middleware: ["auth"],
  data() {
    return {
      navLinks: [
        {
          title: "Список товаров",
          url: "/admin/products-list/",
        },
        {
          title: "Добавить товар",
          url: "/admin/add-product/",
        },
      ],
    };
  },
};
</script>
