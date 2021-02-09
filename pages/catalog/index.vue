<template>
  <div>
    <AppTitle title="Каталог" />

    <div class="container">
      <productsList :productsList="productsLoaded" />
    </div>
  </div>
</template>


<script>
import productsList from "@/components/ProductsList.vue";

export default {
  components: {
    productsList,
  },
  computed: {
    productsLoaded() {
      return this.$store.getters.getProductsLoaded;
    },
  },
};
</script>
