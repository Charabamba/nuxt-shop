<template>
  <div class="container">
    <AppTitle title="Контакты" />
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
          height="400"
          allowfullscreen="true"
          style="position: relative"
        ></iframe>
      </div>
      <div class="contacts__text">
        <p>Наши контакты</p>
        <p>Email: test@test.ru</p>
        <p>Телефон: +7(908)38-48-58</p>
        <p>Адрес: г Челябинск, пр-т Победы</p>
      </div>
    </section>
  </div>
</template>


<style lang="scss">
.contacts {
  display: flex;
  // justify-content: space-between;
  .contacts__map {
    width: 100%;
    max-width: 50vw;
  }
  .contacts__text {
    padding-left: 40px;
  }
}
</style>
