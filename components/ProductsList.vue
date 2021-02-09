<template>
  <ul class="product__list">
    <li
      v-for="product of productsList"
      :key="product.title"
      class="product__item"
    >
      <nuxt-link :to="/catalog/ + product.id">
        <div class="product__image-wrapper">
          <img :src="product.img" :alt="product.title" />
        </div>
        <p>
          {{ product.title }}
        </p>
        <p>
          {{ product.announceText }}
        </p>
        <p>Цена: {{ product.price }}руб</p>
      </nuxt-link>
    </li>
  </ul>
</template>


<script>
export default {
  props: {
    productsList: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.product__list {
  .product__item {
    border: 1px solid #333333;
    border-radius: 4px;
    text-align: center;
    padding: 10px;
  }

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
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
</style>
