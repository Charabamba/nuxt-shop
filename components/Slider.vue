<template>
  <div>
    <VueSlickCarousel :arrows="true" :dots="true">
      <div>
        <img
          src="https://images.pexels.com/photos/1080722/pexels-photo-1080722.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/1080722/pexels-photo-1080722.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/1080722/pexels-photo-1080722.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "MyComponent",
  components: { VueSlickCarousel },
};
</script>
