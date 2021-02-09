<template>
  <div>
    <AppTitle title="Каталог" />

    <div class="container">
      <productsList />
    </div>
  </div>
</template>


<script>
import productsList from "@/components/ProductsList.vue";

export default {
  components: {
    productsList,
  },
};
</script>
