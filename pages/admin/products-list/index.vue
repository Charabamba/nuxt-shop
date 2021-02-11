<template>
  <div class="container">
    <Title title="Страница со списком товаров" />
    <table>
      <tr>
        <th>Наименование</th>
        <th>Цена</th>
        <!-- <th>Картинка</th> -->
        <th>Краткое описание</th>
        <th>Полное описание</th>
      </tr>
      <tr v-for="product in productsLoaded" :key="product.id">
        <td>
          {{ product.title }}
        </td>
        <td>
          {{ product.price }}
        </td>
        <!-- <td>
          {{ product.img }}
        </td> -->
        <td>
          {{ product.announceText }}
        </td>
        <td>
          {{ product.description }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  layout: "admin",
  computed: {
    productsLoaded() {
      return this.$store.getters.getProductsLoaded;
    },
  },
};
</script>
