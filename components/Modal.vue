<template>
  <div class="site-modal">
    <div class="site-modal__wrapper">
      <h2>Мы вам перезвоним!</h2>
      <form>
        <label>
          Телефон
          <input type="text" />
        </label>
        <label>
          Ваше имя
          <input type="text" />
        </label>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
.site-modal {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(48, 48, 48, 0.301);
  display: flex;
  align-items: center;
  .site-modal__wrapper {
    padding: 40px 20px;
    background-color: #ffffff;
    margin: 0 auto;
  }
}
</style>
