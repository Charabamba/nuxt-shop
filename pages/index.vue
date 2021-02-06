<template>
  <div class="container">
    <AppTitle title="Главная страница" />
    <banner />
  </div>
</template>

<script>
import banner from "@/components/Banner.vue";
export default {
  components: {
    banner,
  },
};
</script>
