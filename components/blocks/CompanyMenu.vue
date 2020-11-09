<template lang="pug">
  nav.sec-menu(:class="{'sec-menu_inline': inHeader}")
    nuxt-link(to="/company/about").sec-menu__link О компании
    nuxt-link(to="/company/history").sec-menu__link История
    nuxt-link(to="/company/structura").sec-menu__link Структура компании
    nuxt-link(to="/in-dev").sec-menu__link Филиалы
    nuxt-link(to="/in-dev").sec-menu__link Бизнес-модель
    nuxt-link(to="/in-dev").sec-menu__link Миссия и стратегия
    nuxt-link(to="/company/kadrovaya-politika").sec-menu__link Кадровая политика
    nuxt-link(to="/in-dev").sec-menu__link
      | Политика&nbsp;
      span(v-show="!inHeader") в&nbsp;области&nbsp;
      | качества
    template(v-if="inHeader")
      .sec-menu__wrap
        span.sec-menu__link.sec-menu__link_more(:class="{'is-active': inSubMenu}") Ещё
        .sub-menu
          nuxt-link(to="/company/importozameshchenie").sec-menu__link Импортозамещение
          nuxt-link(to="/company/antikorrupcionnaya-deyatelnost").sec-menu__link Антикоррупционная деятельность
          nuxt-link(to="/company/blagotvoritelnost").sec-menu__link Благотворительность
    template(v-else)
      nuxt-link(to="/company/importozameshchenie").sec-menu__link Импортозамещение
      nuxt-link(to="/company/antikorrupcionnaya-deyatelnost").sec-menu__link Антикоррупционная деятельность
      nuxt-link(to="/company/blagotvoritelnost").sec-menu__link Благотворительность

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
