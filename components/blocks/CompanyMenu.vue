<template lang="pug">
  nav.sec-menu(:class="{'sec-menu_inline': inHeader}")
    nuxt-link(to="about").sec-menu__link О компании
    nuxt-link(to="history").sec-menu__link История
    nuxt-link(to="structura").sec-menu__link Структура компании
    nuxt-link(to="filialy").sec-menu__link Филиалы
    nuxt-link(to="/in-dev").sec-menu__link Бизнес-модель
    nuxt-link(to="/in-dev").sec-menu__link Миссия и стратегия
    nuxt-link(to="kadrovaya-politika").sec-menu__link Кадровая политика
    nuxt-link(to="/in-dev").sec-menu__link
      | Политика&nbsp;
      span(v-show="!inHeader") в&nbsp;области&nbsp;
      | качества
    template(v-if="inHeader")
      .sec-menu__wrap
        span.sec-menu__link.sec-menu__link_more(:class="{'is-active': inSubMenu}") Ещё
        .sub-menu
          nuxt-link(to="/in-dev").sec-menu__link Импортозамещение
          nuxt-link(to="antikorrupcionnaya-deyatelnost").sec-menu__link Антикоррупционная деятельность
    template(v-else)
      nuxt-link(to="/in-dev").sec-menu__link Импортозамещение
      nuxt-link(to="antikorrupcionnaya-deyatelnost").sec-menu__link Антикоррупционная деятельность

</template>

<script>
  export default {
    name: 'CompanyMenu',
    props: {
      inHeader: {
        type: Boolean,
        default: false
      },
      inSubMenu: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
