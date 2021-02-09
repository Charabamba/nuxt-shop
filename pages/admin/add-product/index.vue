<template>
  <section class="add-product">
    <div class="container">
      <AppTitle title="Форма добавления товара" />
    </div>
    <div class="container">
      <form @submit.prevent="onSubmit">
        <appInput label="Название" v-model="product.title" />
        <appInput label="Цена" :isRequired="false" v-model="product.price" />
        <appInput
          label="Изображение"
          :isRequired="false"
          v-model="product.img"
        />
        <appInput
          label="Краткое описание"
          :isRequired="false"
          v-model="product.announceText"
        />

        <appTextarea label="Описание" v-model="product.description" />
        <button class="site-button site-button_middle site-button_top-margin">
          Отправить
        </button>
      </form>
      {{ product }}
    </div>
  </section>
</template>


<script>
import appInput from "@/components/UI/Input.vue";
import appTextarea from "@/components/UI/Textarea.vue";

export default {
  components: {
    appInput,
    appTextarea,
  },
  layout: "admin",
  data() {
    return {
      product: {
        title: "",
        price: "",
        img: "",
        announceText: "",
        description: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("addProduct", this.product).then(() => {
        this.$router.push("/admin");
      });
    },
  },
};
</script>
