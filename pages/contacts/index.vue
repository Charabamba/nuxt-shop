<template>
  <div>
    <AppTitle title="Контакты" />
    <div class="container">
      <section class="contacts">
        <div class="contacts__map" style="position: relative; overflow: hidden">
          <a
            href="https://yandex.ru/maps/56/chelyabinsk/?utm_medium=mapframe&utm_source=maps"
            style="color: #eee; font-size: 12px; position: absolute; top: 0px"
            >Челябинск</a
          ><a
            href="https://yandex.ru/maps/56/chelyabinsk/?ll=61.334545%2C55.187149&mode=whatshere&utm_medium=mapframe&utm_source=maps&whatshere%5Bpoint%5D=61.331529%2C55.188651&whatshere%5Bzoom%5D=16.6&z=16"
            style="color: #eee; font-size: 12px; position: absolute; top: 14px"
            >проспект Победы</a
          ><iframe
            src="https://yandex.ru/map-widget/v1/-/CCUM5Ee1xA"
            width="100%"
            height="350"
            allowfullscreen="true"
            style="position: relative"
          ></iframe>
        </div>
        <div class="contacts__text">
          <p class="title title_small">Наши контакты:</p>
          <ul class="contacts__list">
            <li
              v-for="contact in contacts"
              :key="contact.title"
              class="contacts__item"
            >
              <p>{{ contact.title }}:</p>
              <a :href="contact.href"> {{ contact.value }}</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
    <div class="contacts__feedback">
      <div class="container">
        <form @submit.prevent="onSubmit">
          <p class="title title_smallddddddddd">Свяжитесь с нами!</p>
          <appInput label="Ваше имя" v-model="message.name" />
          <appInput label="Email" :isRequired="false" v-model="message.email" />
          <appTextarea label="Сообщение" v-model="message.text" />
          <button class="site-button site-button_middle site-button_top-margin">
            Отправить
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import appInput from "@/components/UI/Input.vue";
import appTextarea from "@/components/UI/Textarea.vue";

export default {
  components: {
    appInput,
    appTextarea,
  },
  data() {
    return {
      contacts: [
        {
          title: "Телефон",
          value: "+7(908)35-45-55",
          href: "tel:+7(908)35-45-55",
        },
        {
          title: "Email",
          value: "example@mail.ru",
          href: "mailto:example@mail.ru",
        },
        {
          title: "Адрес",
          value: "г Челябинск, пр-т Победы",
          href: "https://yandex.ru/maps/-/CCUMBAttWB",
        },
      ],
      message: {
        name: "",
        email: "",
        text: "",
      },
    };
  },
  methods: {
    onSubmit() {
      // console.log(
      //   `message is ${this.message.name} ${this.message.email} ${this.message.text}`
      // );
      this.message.name = "";
      this.message.email = "";
      this.message.text = "";

      this.showModal = false;
    },
  },
};
</script>

<style lang="scss">
.contacts {
  display: flex;
  // justify-content: space-between;
  .contacts__map {
    width: 100%;
    max-width: 900px;
  }
  .contacts__text {
    padding-left: 40px;
  }
  .contacts__item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    a {
      padding-left: 5px;
    }
  }
}
.contacts__feedback {
  text-align: center;
  margin-top: 40px;
  padding: 20px 0px;
  background-color: #f2f2f2;
  form {
    margin: 0 auto;
    max-width: 500px;
  }
}
</style>
