<template>
  <ul class="product__list">
    <li
      v-for="product of productsList"
      :key="product.title"
      class="product__item"
    >
      <productPreview :product="product" :admin="admin" />
    </li>
  </ul>
</template>


<script>
import productPreview from "@/components/ProductPreview.vue";

export default {
  components: {
    productPreview,
  },
  props: {
    productsList: {
      type: Array,
      required: true,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.product__list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  .product__item {
    border: 1px solid #333333;
    border-radius: 4px;
    text-align: center;
    padding: 10px;
  }
  .product__image-wrapper {
    height: 250px;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
@media (max-width: 1500px) {
  .product__list {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media (max-width: 1000px) {
  .product__list {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 700px) {
  .product__list {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
