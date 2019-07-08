<template lang="pug">
  .header__first-line
    CompanyLogo
      img(src="/img/logo.png" alt="ГлобалЭнергоХолдинг")
    .header__phone
      a.header__phone-num(href="tel:+78005502259") 8 (800) 550 22 59
      span.header__phone-txt для звонков по Российской Федерации

    .header__right-col
      a.search(href="search.html")
        svg.icon-search(xmlns='http://www.w3.org/2000/svg', width='100%', height='100%')
          use(xlink:href='img/svg-lib.svg#ico-search')
      a.header__btn(href="/cabinet.html#login") Склад
      .land-switch
        a.land-switch__item.is-active(href="/coming-soon.html") Рус
        a.land-switch__item(href="/coming-soon.html") En
      a.header__m-btn(href="search.html")
</template>

<script>
  import CompanyLogo from './CompanyLogo';

  export default {
    name: 'TheHeader',
    components: { CompanyLogo }
  }
</script>
