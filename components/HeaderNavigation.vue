<template lang="pug">
  nav.main-nav
    a.main-nav__link(href="/") Главная
    .main-nav__link-wrap
      a.main-nav__link.main-nav__link_drop(href="/about.html") Компания
      .sub-menu
        a.sub-menu__link(href="/about.html") О компании
        a.sub-menu__link(href="/history.html" ) История
        a.sub-menu__link(href="/structura.html" ) Структура компании
        a.sub-menu__link(href="/filialy.html" ) Филиалы
        a.sub-menu__link(href="/coming-soon.html" ) Бизнес модель
        a.sub-menu__link(href="/coming-soon.html" ) Миссия и стратегия
        a.sub-menu__link(href="/coming-soon.html" ) Кадровая политика
        a.sub-menu__link(href="/coming-soon.html" ) Политика в области качества
        a.sub-menu__link(href="/coming-soon.html" ) Импортозамещение
        a.sub-menu__link(href="/coming-soon.html" ) Антикоррупционная деятельность

    .main-nav__link-wrap
      a.main-nav__link.main-nav__link_drop(href="/catalog.html") Отраслевые направления
      .sub-menu
        a.sub-menu__link(href="/ehlektricheskaya-set.html" ) Электрическая сеть
        a.sub-menu__link(href="/gidroehnergetika.html" ) Гидроэнергетика
        a.sub-menu__link(href="/teplovaya-energetika.html" ) Тепловая энергетика
        a.sub-menu__link(href="/nuclear-energy.html" ) Ядерная энергетика
        a.sub-menu__link(href="/alternativnaya-energetika.html" ) Альтернативная энергетика

    .main-nav__link-wrap
      a.main-nav__link.main-nav__link_drop(href="/coming-soon.html") Производство
      .sub-menu
        a.sub-menu__link(href="/coming-soon.html") О производстве
        a.sub-menu__link(href="/coming-soon.html") Преимущества
        a.sub-menu__link(href="/coming-soon.html") Продукция
        a.sub-menu__link(href="/coming-soon.html") Услуги
        a.sub-menu__link(href="/coming-soon.html") Сертификаты
        a.sub-menu__link(href="/coming-soon.html") Закупки

    .main-nav__link-wrap
      a.main-nav__link.main-nav__link_drop(href="/coming-soon.html") Библиотека
      .sub-menu
        a.sub-menu__link(href="/coming-soon.html") Российская электроэнергетика
        a.sub-menu__link(href="/coming-soon.html") ГОСТы
        a.sub-menu__link(href="/coming-soon.html") Типовые проекты
        a.sub-menu__link(href="/coming-soon.html") Справочная литература
        a.sub-menu__link(href="/coming-soon.html") Нормативно-правовоые акты<br> в&nbsp;сфере электроэнергетики

    .main-nav__link-wrap
      a.main-nav__link.main-nav__link_drop(href="/coming-soon.html") Пресс-центр
      .sub-menu
        a.sub-menu__link(href="/coming-soon.html") Новости энергетики
        a.sub-menu__link(href="/coming-soon.html") Электрическая сеть
        a.sub-menu__link(href="/coming-soon.html") Гидроэнергетика
        a.sub-menu__link(href="/coming-soon.html") Тепловая энергетика
        a.sub-menu__link(href="/coming-soon.html") Ядерная энергетика
        a.sub-menu__link(href="/coming-soon.html") Альтернативная энергетика
        a.sub-menu__link(href="/coming-soon.html") Новости компании

    a.main-nav__link(href="/cabinet.html#login") Кабинет

    a.main-nav__link(href="/coming-soon.html") Акции

    a.main-nav__link(href="/contacts.html") Контакты
</template>

<script>
  export default {
    name: 'HeaderNavigation'
  }
</script>
