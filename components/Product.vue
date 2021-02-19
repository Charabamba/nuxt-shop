<template>
  <section>
    <div class="container">
      <AppTitle :title="product.title" />
    </div>
    <div class="container product">
      <div class="product__image-container">
        <img :src="product.img" :alt="product.title" />
      </div>
      <div class="product__info">
        <p>Цена {{ product.price }}руб</p>
        <p>
          {{ product.description }}
        </p>
      </div>
    </div>
    <div class="container">
      <nuxt-link class="back-link" to="/catalog/">
        Вернуться к каталогу
      </nuxt-link>
    </div>
  </section>
</template>


<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  flex-wrap: wrap;
  .product__image-container {
    height: 300px;
    img {
      object-fit: contain;
      height: 100%;
    }
  }
  .product__info {
    max-width: 300px;
  }
}
.back-link {
  margin-top: 40px;
}
</style>
