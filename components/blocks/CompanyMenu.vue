<template lang="pug">
  aside.main-block__menu
    nav.sec-menu
      router-link(to="about").sec-menu__link О компании
      router-link(to="history").sec-menu__link История
      router-link(to="structura").sec-menu__link Структура компании
      router-link(to="filialy").sec-menu__link Филиалы
      router-link(to="/in-dev").sec-menu__link Бизнес-модель
      router-link(to="/in-dev").sec-menu__link Миссия и стратегия
      router-link(to="/in-dev").sec-menu__link Кадровая политика
      router-link(to="/in-dev").sec-menu__link Политика в области качества
      router-link(to="/in-dev").sec-menu__link Импортозамещение
      router-link(to="/in-dev").sec-menu__link Антикоррупционная деятельность

</template>

<script>
  export default {
    name: 'CompanyMenu'
  }
</script>
