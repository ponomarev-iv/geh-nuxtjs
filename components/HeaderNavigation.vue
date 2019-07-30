<template lang="pug">
  nav.main-nav
    router-link.main-nav__link(to="/") Главная
    .main-nav__link-wrap
      router-link.main-nav__link.main-nav__link_drop(to="/company/about") Компания
      .sub-menu
        router-link.sub-menu__link(to="/company/about") О компании
        router-link.sub-menu__link(to="/company/history" ) История
        router-link.sub-menu__link(to="/company/structura" ) Структура компании
        router-link.sub-menu__link(to="/company/filialy" ) Филиалы
        router-link.sub-menu__link(to="in-dev" ) Бизнес модель
        router-link.sub-menu__link(to="in-dev" ) Миссия и стратегия
        router-link.sub-menu__link(to="in-dev" ) Кадровая политика
        router-link.sub-menu__link(to="in-dev" ) Политика в области качества
        router-link.sub-menu__link(to="in-dev" ) Импортозамещение
        router-link.sub-menu__link(to="in-dev" ) Антикоррупционная деятельность

    .main-nav__link-wrap
      router-link.main-nav__link.main-nav__link_drop(to="/catalog") Отраслевые направления
      .sub-menu
        router-link.sub-menu__link(to="/catalog/elektricheskaya-set" ) Электрическая сеть
        router-link.sub-menu__link(to="/catalog/gidroenergetika" ) Гидроэнергетика
        router-link.sub-menu__link(to="/catalog/teplovaya-energetika" ) Тепловая энергетика
        router-link.sub-menu__link(to="/catalog/nuclear-energy" ) Ядерная энергетика
        router-link.sub-menu__link(to="/catalog/alternativnaya-energetika" ) Альтернативная энергетика

    .main-nav__link-wrap
      router-link.main-nav__link.main-nav__link_drop(to="in-dev") Производство
      .sub-menu
        router-link.sub-menu__link(to="in-dev") О производстве
        router-link.sub-menu__link(to="in-dev") Преимущества
        router-link.sub-menu__link(to="in-dev") Продукция
        router-link.sub-menu__link(to="in-dev") Услуги
        router-link.sub-menu__link(to="in-dev") Сертификаты
        router-link.sub-menu__link(to="in-dev") Закупки

    .main-nav__link-wrap
      router-link.main-nav__link.main-nav__link_drop(to="in-dev") Библиотека
      .sub-menu
        router-link.sub-menu__link(to="in-dev") Российская электроэнергетика
        router-link.sub-menu__link(to="in-dev") ГОСТы
        router-link.sub-menu__link(to="in-dev") Типовые проекты
        router-link.sub-menu__link(to="in-dev") Справочная литература
        router-link.sub-menu__link(to="in-dev") Нормативно-правовоые акты<br> в&nbsp;сфере электроэнергетики

    .main-nav__link-wrap
      router-link.main-nav__link.main-nav__link_drop(to="in-dev") Пресс-центр
      .sub-menu
        router-link.sub-menu__link(to="in-dev") Новости энергетики
        router-link.sub-menu__link(to="in-dev") Электрическая сеть
        router-link.sub-menu__link(to="in-dev") Гидроэнергетика
        router-link.sub-menu__link(to="in-dev") Тепловая энергетика
        router-link.sub-menu__link(to="in-dev") Ядерная энергетика
        router-link.sub-menu__link(to="in-dev") Альтернативная энергетика
        router-link.sub-menu__link(to="in-dev") Новости компании

    router-link.main-nav__link(to="/cabinet") Кабинет

    router-link.main-nav__link(to="in-dev") Акции

    router-link.main-nav__link(to="/contacts") Контакты
</template>

<script>
  export default {
    name: 'HeaderNavigation'
  }
</script>
