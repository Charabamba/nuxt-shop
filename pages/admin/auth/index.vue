<template>
  <div class="container">
    <AppTitle title="Авторизация" />

    <div class="auth-form__container">
      <form @submit.prevent="onSubmit" class="auth__form">
        <appInput label="Email" v-model="user.email" type="email" />
        <appInput label="Пароль" v-model="user.password" type="password" />
        <div class="controls">
          <button class="site-button site-button_top-margin">Login</button>
        </div>
      </form>
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
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("authUser", this.user)
        .then((res) => {
          this.$router.push("/admin");
        })
        .catch((e) => {
          this.user.email = "";
          this.user.password = "";
          console.log(e);
        });
    },
  },
};
</script>

<style lang="scss">
.auth-form__container {
  max-width: 300px;
}
</style>
