<template lang="pug">
  article.hero
    .hero__bg.hero__bg_coming-soon
    section.dev
      img.dev__img(src="/img/ico-develop.svg")
      h1.dev__title данный Раздел находится в разработке<br>
      p.dev__txt Пожалуйста, посетите его позже
</template>

<script>
  export default {
    name: 'In-dev',
    head () {
      return {
        title: 'Страница в разработке | ГлобалЭнергоХолдинг'
      }
    }
  }
</script>
<style scoped>
  .hero{
    height: auto;
    flex-grow: 1;
  }
</style>
