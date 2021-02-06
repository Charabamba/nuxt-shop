<template>
  <section class="site-banner">
    <VueSlickCarousel :arrows="true" :dots="true" :draggable="true">
      <div class="banner__image-wrapper">
        <p class="banner__text">Слайд 1</p>
        <img
          src="https://images.pexels.com/photos/1080722/pexels-photo-1080722.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
          draggable="false"
        />
      </div>
      <div class="banner__image-wrapper">
        <p class="banner__text">Слайд 2</p>
        <img
          src="https://images.pexels.com/photos/255419/pexels-photo-255419.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
          draggable="false"
        />
      </div>
      <div class="banner__image-wrapper">
        <p class="banner__text">Слайд 3</p>
        <img
          src="https://img2.fonwall.ru/o/pw/blur-color-gaussian-minimalistic.jpeg"
          alt=""
          draggable="false"
        />
      </div>
    </VueSlickCarousel>
  </section>
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

<style lang="scss">
.banner__image-wrapper {
  height: 300px;
  background-color: rgb(255, 255, 255);
  position: relative;
  display: flex;
  text-align: center;
  align-items: center;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  .banner__text {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
}
.slick-prev,
.slick-next {
  height: 30px;
  width: 30px;
  opacity: 0.1;
  transition: 0.15s;
}
.slick-prev {
  left: 5px;
  z-index: 1;
}
.slick-next {
  z-index: 1;
  right: 5px;
}
.slick-prev:before,
.slick-next:before {
  font-size: 30px;
}
.site-banner:hover {
  .slick-prev,
  .slick-next {
    opacity: 1;
  }
  .slick-prev {
    left: 25px;
  }
  .slick-next {
    right: 25px;
  }
}
</style>
