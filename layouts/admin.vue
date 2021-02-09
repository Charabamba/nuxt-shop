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
          title: "Главная",
          url: "/",
        },
        {
          title: "Список товаров",
          url: "/admin/products-list/",
          // sublinks: [
          //   {
          //     title: "Подпункт 1",
          //     url: "/catalog/category1",
          //   },
          //   {
          //     title: "Подпункт 2",
          //     url: "/catalog/category2",
          //   },
          // ],
        },
        {
          title: "Контакты",
          url: "/contacts/",
        },
      ],
    };
  },
};
</script>
