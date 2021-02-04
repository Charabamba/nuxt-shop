<template>
  <header>
    <div class="container">
      <nav class="site-nav">
        <ul class="site-nav__list">
          <li v-for="navLink in navLinks" :key="navLink.title">
            <nuxt-link :to="navLink.url">
              {{ navLink.title }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
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

<style lang="scss">
</style>
