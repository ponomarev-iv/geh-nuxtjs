<template lang="pug">
  div.wrapper
    TheHeader(:white="true" :activeClass="'company'")
    .second-menu
      .c-wrap
        CompanyMenu(:inHeader="true")
    main.main-block.structura
      .c-wrap
        .flex-row
          article.main-block__txt
            Breadcrumbs(
              :folder="[{id: 0, title: 'Компания', link: '/company/about'}]"
              :current="title"
            )
            h1.section-title {{ title }}
          aside.main-block__menu
    article.c-block.structura
      .c-wrap
        .img-no-resp-wrap
          img(src="/img/structura.jpg" loading="lazy")
    TheFooter
</template>

<script>
  import CompanyMenu from '../../components/blocks/CompanyMenu';
  import Breadcrumbs from '../../components/UI/Breadcrumbs';
  import TheFooter from '../../components/TheFooter';
  import TheHeader from '../../components/TheHeader';
  export default {
    name: 'Structura',
    layout: 'empty',
    components: { TheHeader, TheFooter, Breadcrumbs, CompanyMenu },
    head () {
      return {
        title: 'ГлобалЭнергоХолдинг | Структура компании'
      }
    },
    data () {
      return {
        title: 'Структура компании'
      }
    }
  }
</script>
