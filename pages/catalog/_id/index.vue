<template>
  <div>
    <product :product="product" />
  </div>
</template>

<script>
import axios from "axios";
import product from "@/components/Product.vue";
export default {
  components: {
    product,
  },
  async asyncData(context) {
    let product = await axios.get(
      `https://nuxt-shop-275d6-default-rtdb.europe-west1.firebasedatabase.app/products/${context.params.id}.json`
    );

    return {
      product: product.data,
    };
  },
};
</script>
