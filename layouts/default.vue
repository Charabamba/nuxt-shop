<template>
  <div class="site-wrapper">
    <Header :navLinks="navLinks" />
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
  data() {
    return {
      navLinks: [
        {
          title: "Главная",
          url: "/",
        },
        {
          title: "Каталог",
          url: "/catalog/",
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
        {
          title: "Админка",
          url: "/admin/",
        },
      ],
    };
  },
};
</script>
