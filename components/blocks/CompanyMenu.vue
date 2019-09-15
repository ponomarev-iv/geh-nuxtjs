<template lang="pug">
  nav.sec-menu(:class="{'sec-menu_inline': inHeader}")
    router-link(to="about").sec-menu__link О компании
    router-link(to="history").sec-menu__link История
    router-link(to="structura").sec-menu__link Структура компании
    router-link(to="filialy").sec-menu__link Филиалы
    router-link(to="/in-dev").sec-menu__link Бизнес-модель
    router-link(to="/in-dev").sec-menu__link Миссия и стратегия
    router-link(to="kadrovaya-politika").sec-menu__link Кадровая политика
    router-link(to="/in-dev").sec-menu__link
      | Политика&nbsp;
      span(v-show="!inHeader") в&nbsp;области&nbsp;
      | качества
    template(v-if="inHeader")
      span.sec-menu__link.sec-menu__link_more Ещё
    template(v-else)
      router-link(to="/in-dev").sec-menu__link Импортозамещение
      router-link(to="/in-dev").sec-menu__link Антикоррупционная деятельность

</template>

<script>
  export default {
    name: 'CompanyMenu',
    props: {
      activeClass: String,
      inHeader: Boolean
    }
  }
</script>
