<template lang="pug">
  div.m-page
    .m-page__bg
    video(playsinline autoplay muted pip="false" data-play="0" loop)
      source#channel(src="/video/002.mp4" type="video/mp4")
    .fade-video.dark
    main.hero
      router-link.close-btn(to="/")
      .c-wrap.search
        form.search__form
          input.search__input(placeholder='Поиск по сайту' )
        section.site-map.flex-row
          .site-map__col
            router-link.site-map__title(to="/company/about") Компания
            router-link.site-map__link(to="/company/about") О компании
            router-link.site-map__link(to="/company/history") История
            router-link.site-map__link(to="/company/structura") Структкра компании
            // router-link.site-map__link(to="/company/filialy") Филиалы
            // router-link.site-map__link(to="in-dev") Бизнес-модель
            // router-link.site-map__link(to="in-dev") Миссия и статегия
            router-link.site-map__link(to="/company/kadrovaya-politika") Кадровая политика
            // router-link.site-map__link(to="in-dev") Политика в области качества
            router-link.site-map__link(to="/company/importozameshchenie") Ипортозамещение
            router-link.site-map__link(to="/company/antikorrupcionnaya-deyatelnost") Антикоррупционная деятельность
            router-link.site-map__link(to="/company/blagotvoritelnost") Благотворительность
          .site-map__col
            router-link.site-map__title(to="/catalog") Отраслевые направления
            router-link.site-map__link.site-map__link_drop(to="/catalog/elektricheskaya-set") Электрическая сеть
            router-link.site-map__link.site-map__link_drop(to="/catalog/gidroenergetika") Гидроэнергетика
            router-link.site-map__link.site-map__link_drop(to="/catalog/teplovaya-energetika") Тепловая энергетика
            router-link.site-map__link.site-map__link_drop(to="/catalog/nuclear-energy") Ядерная энергетика
            router-link.site-map__link.site-map__link_drop(to="/catalog/alternativnaya-energetika") Альтернативная энергетика
            router-link.site-map__title(to="/cabinet") Кабинет
          .site-map__col
            router-link.site-map__title(to="in-dev") Библиотека
            router-link.site-map__link(to="in-dev") Российская электроэнергетика
            router-link.site-map__link(to="in-dev") ГОСТы
            router-link.site-map__link(to="in-dev") Типовые проекты
            router-link.site-map__link(to="in-dev") Справочная литература
            router-link.site-map__link(to="in-dev") Нормативно-правовые акты в&nbsp;сфере электроэнергетики
            router-link.site-map__title(to="/contacts") Контакты
</template>

<script>
  export default {
    name: 'Search',
    layout: 'empty'
  }
</script>
