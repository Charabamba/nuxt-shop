<template>
  <div class="container">
    <AppTitle title="Главная страница" />
    Главная страница

    <slider />
  </div>
</template>

<script>
import slider from "@/components/Slider.vue";
export default {
  components: {
    slider,
  },
};
</script>
