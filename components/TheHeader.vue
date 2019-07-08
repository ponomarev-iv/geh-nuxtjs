<template lang="pug">
  header.header
    .header__first-line
      a.header__logo(href="/")
        img(src="/img/logo.png" alt="ГлобалЭнергоХолдинг")
      .header__phone
        a.header__phone-num(href="tel:+78005502259") 8 (800) 550 22 59
        span.header__phone-txt для звонков по Российской Федерации

      .header__right-col
        a.search(href="search.html")
          //+svg-use('ico-search', 'icon-search')
        a.header__btn(href="/cabinet.html#login") Склад
        .land-switch
          a.land-switch__item.is-active(href="/coming-soon.html") Рус
          a.land-switch__item(href="/coming-soon.html") En
        a.header__m-btn(href="search.html")
</template>

<script>
  export default {
    name: "TheHeader"
  }
</script>
