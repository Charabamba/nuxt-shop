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
        <p>Цена: {{ product.price }}руб</p>
      </nuxt-link>
    </li>
  </ul>
</template>


<script>
export default {
  data() {
    return {
      productsList: [
        {
          id: 1,
          title: "Товар 1",
          img: "https://rarog.pro/pictures/product/big/28989_big.jpg",
          price: "200",
        },
        {
          id: 2,
          title: "Товар 2",
          img:
            "https://static-sl.insales.ru/images/products/1/2975/321538975/кроссовки-бутекс-скиф-олива1.jpg",
          price: "300",
        },
        {
          id: 3,
          title: "Товар 3",
          img:
            "https://спецодежда-стиль.рф/wp-content/uploads/2018/09/Kobra-m.12031.jpg",
          price: "400",
        },
        {
          id: 4,
          title: "Товар 4",
          img: "https://rarog.pro/pictures/product/big/28989_big.jpg",
          price: "200",
        },
        {
          id: 5,
          title: "Товар 5",
          img:
            "https://static-sl.insales.ru/images/products/1/2975/321538975/кроссовки-бутекс-скиф-олива1.jpg",
          price: "300",
        },
        {
          id: 6,
          title: "Товар 6",
          img:
            "https://спецодежда-стиль.рф/wp-content/uploads/2018/09/Kobra-m.12031.jpg",
          price: "400",
        },
      ],
    };
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
