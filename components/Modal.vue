<template>
  <div class="site-modal" @click="$emit('close')">
    <div class="site-modal__wrapper" @click.stop="">
      <div class="site-modal__header">
        <h2>
          {{ title }}
        </h2>
        <span @click="$emit('close')"> ✕ </span>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },

  mounted() {
    document.body.addEventListener("keyup", (e) => {
      if (e.keyCode === 27) {
        this.$emit("close");
      }
    });
  },
};
</script>

<style lang="scss">
.site-modal {
  position: fixed;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(48, 48, 48, 0.699);
  display: flex;
  align-items: center;
  .site-modal__wrapper {
    padding: 40px 20px;
    background-color: #ffffff;
    margin: 0 auto;
  }
  .site-modal__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
