<template>
  <section class="product">
    <div class="container">
      <AppTitle :title="product.title" />
    </div>
    <div class="container">
      <div class="product__image-container">
        <img :src="product.img" :alt="product.title" />
      </div>
      <p>Цена {{ product.price }}руб</p>
      <p>
        {{ product.description }}
      </p>
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
