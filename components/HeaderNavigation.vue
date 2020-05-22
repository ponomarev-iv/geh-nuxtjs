<template lang="pug">
  nav.main-nav
    nuxt-link.main-nav__link(to="/") Главная
    .main-nav__link-wrap
      nuxt-link.main-nav__link.main-nav__link_drop(
        to="/company/about"
        :class="{'is-active': activeClass === 'company'}") Компания
      .sub-menu
        nuxt-link.sub-menu__link(to="/company/about") О компании
        nuxt-link.sub-menu__link(to="/company/history" ) История
        nuxt-link.sub-menu__link(to="/company/structura" ) Структура компании
        nuxt-link.sub-menu__link(to="/company/filialy" ) Филиалы
        nuxt-link.sub-menu__link(to="/in-dev" ) Бизнес модель
        nuxt-link.sub-menu__link(to="/in-dev" ) Миссия и стратегия
        nuxt-link.sub-menu__link(to="/company/kadrovaya-politika" ) Кадровая политика
        nuxt-link.sub-menu__link(to="/in-dev" ) Политика в области качества
        nuxt-link.sub-menu__link(to="/company/importozameshchenie" ) Импортозамещение
        nuxt-link.sub-menu__link(to="/company/antikorrupcionnaya-deyatelnost" ) Антикоррупционная деятельность

    .main-nav__link-wrap
      nuxt-link.main-nav__link.main-nav__link_drop(to="/catalog") {{ catalogName }}
      .sub-menu
        nuxt-link.sub-menu__link(to="/catalog/elektricheskaya-set" ) Электрическая сеть
        nuxt-link.sub-menu__link(to="/catalog/gidroenergetika" ) Гидроэнергетика
        nuxt-link.sub-menu__link(to="/catalog/teplovaya-energetika" ) Тепловая энергетика
        nuxt-link.sub-menu__link(to="/catalog/nuclear-energy" ) Ядерная энергетика
        nuxt-link.sub-menu__link(to="/catalog/alternativnaya-energetika" ) Альтернативная энергетика

    .main-nav__link-wrap(v-if="!isSmall")
      nuxt-link.main-nav__link.main-nav__link_drop(to="/in-dev#pr-vo") Производство
      .sub-menu
        nuxt-link.sub-menu__link(to="/in-dev") О производстве
        nuxt-link.sub-menu__link(to="/in-dev") Преимущества
        nuxt-link.sub-menu__link(to="/in-dev") Продукция
        nuxt-link.sub-menu__link(to="/in-dev") Услуги
        nuxt-link.sub-menu__link(to="/in-dev") Сертификаты
        nuxt-link.sub-menu__link(to="/in-dev") Закупки

    .main-nav__link-wrap
      nuxt-link.main-nav__link.main-nav__link_drop(to="/in-dev#library") Библиотека
      .sub-menu
        nuxt-link.sub-menu__link(to="/in-dev") Российская электроэнергетика
        nuxt-link.sub-menu__link(to="/in-dev") ГОСТы
        nuxt-link.sub-menu__link(to="/in-dev") Типовые проекты
        nuxt-link.sub-menu__link(to="/in-dev") Справочная литература
        nuxt-link.sub-menu__link(to="/in-dev") Нормативно-правовоые акты<br> в&nbsp;сфере электроэнергетики

    .main-nav__link-wrap
      nuxt-link.main-nav__link.main-nav__link_drop(to="/in-dev#press") Пресс-центр
      .sub-menu
        nuxt-link.sub-menu__link(to="/in-dev") Новости энергетики
        nuxt-link.sub-menu__link(to="/in-dev") Электрическая сеть
        nuxt-link.sub-menu__link(to="/in-dev") Гидроэнергетика
        nuxt-link.sub-menu__link(to="/in-dev") Тепловая энергетика
        nuxt-link.sub-menu__link(to="/in-dev") Ядерная энергетика
        nuxt-link.sub-menu__link(to="/in-dev") Альтернативная энергетика
        nuxt-link.sub-menu__link(to="/in-dev") Новости компании

    nuxt-link.main-nav__link(to="/cabinet") Кабинет

    nuxt-link.main-nav__link(to="/in-dev#akcii") Акции

    nuxt-link.main-nav__link(to="/contacts") Контакты
</template>

<script>
  export default {
    name: 'HeaderNavigation',
    props: {
      isSmall: Boolean,
      activeClass: String
    },
    computed: {
      catalogName () {
        return (this.isSmall) ? 'Каталог' : 'Отраслевые направления'
      }
    }
  }
</script>
