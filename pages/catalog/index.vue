<template>
  <div>
    <AppTitle title="Каталог" />
    <div class="container">
      <appInput class="filter" label="Фильтр" v-model="filter" />
    </div>
    <div class="container">
      <productsList :productsList="productsLoaded" />
    </div>
  </div>
</template>


<script>
import productsList from "@/components/ProductsList.vue";
import appInput from "@/components/UI/Input.vue";

export default {
  components: {
    productsList,
    appInput,
  },
  data() {
    return {
      filter: "",
    };
  },
  computed: {
    productsLoaded() {
      let result =
        this.filter.length > 2
          ? this.$store.getters.getProductsLoaded.filter((product) => {
              return product.title.includes(this.filter);
            })
          : this.$store.getters.getProductsLoaded;

      return result;
    },
  },
};
</script>

<style lang="scss">
.filter {
  margin-bottom: 20px;
  max-width: 300px;
}
</style>
