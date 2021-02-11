<template>
  <nuxt-link :to="getLink">
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
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    getLink() {
      return this.admin
        ? `/admin/${this.product.id}`
        : `/catalog/${this.product.id}`;
    },
  },
};
</script>
