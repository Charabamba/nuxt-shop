<template>
  <div>
    <AppTitle title="Главная страница" />
    <div class="container">
      <banner />
    </div>
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
