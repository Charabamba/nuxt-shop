<template>
  <div>
    <AppTitle title="Редактирование товара" />

    <div class="container">
      <form @submit.prevent="onSubmit">
        <appInput v-model="product.title" label="Название" />
        <appInput v-model="product.price" label="Цена" />
        <appInput v-model="product.img" label="Изображение" />
        <appInput v-model="product.announceText" label="Краткое описание" />
        <appInput v-model="product.description" label="Описание" />
        <button class="site-button site-button_top-margin">Изменить</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import appInput from "@/components/UI/Input.vue";
import appTextarea from "@/components/UI/Textarea.vue";

export default {
  components: {
    axios,
    appInput,
    appTextarea,
  },
  layout: "admin",
  async asyncData(context) {
    let product = await axios.get(
      `https://nuxt-shop-275d6-default-rtdb.europe-west1.firebasedatabase.app/products/${context.params.id}.json`
    );

    return {
      product: { ...product.data, id: context.params.id },
    };
  },
  methods: {
    onSubmit() {
      // console.log(this.product);
      this.$store.dispatch("editProduct", this.product).then(() => {
        this.$router.push("/admin");
      });
    },
  },
};
</script>
