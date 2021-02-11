<template>
  <div class="container">
    <productsList :productsList="productsLoaded" :admin="true" />
  </div>
</template>

<script>
import productsList from "@/components/ProductsList.vue";

export default {
  components: {
    productsList,
  },
  layout: "admin",
  computed: {
    productsLoaded() {
      return this.$store.getters.getProductsLoaded;
    },
  },
};
</script>
