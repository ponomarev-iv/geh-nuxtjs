<template lang="pug">
  footer.footer
    .c-wrap.flex-row
      .footer__col
        img.footer__logo(src="/img/logo-footer-white.svg" alt="logo")
        // img.footer__logo(src="/img/logo-geh-white.svg" alt="logo")
        .footer__par
          p.footer__lbl Бесплатный звонок по России
          a(href="tel:+78004443940").footer__phone +7(800) 444-39-40
        .footer__par
          p.footer__lbl Головной офис
          p.footer__adres 614007, г. Пермь, ул. Николая Островского, д.&nbsp;59/1, строение БЦ &laquo;Парус&raquo;, 13&nbsp;этаж<br>
            a(href="tel:+73422482444").footer__phone-link +7(342) 248-24-44
      .footer__col.footer__col_right
        nav.footer__nav
          .footer__nav-col
            router-link.footer__nav-link(to="/") Главная
            router-link.footer__nav-link(to="/company/about") Компания
            router-link.footer__nav-link(to="/catalog") Отраслевые направления
            router-link.footer__nav-link(to="/in-dev#library") Библиотека
          .footer__nav-col
            router-link.footer__nav-link(to="/in-dev#press") Пресс-центр
            router-link.footer__nav-link(to="/in-dev#akcii") Акции
            router-link.footer__nav-link(to="/in-dev") Помощь
            router-link.footer__nav-link(to="/contacts") Контакты
          .footer__nav-col
            router-link.footer__nav-link(to="/cabinet") Кабинет
            a.footer__nav-link(href="mailto:sale@globalenergoholding.com") Оставить заявку
            // a.footer__nav-link(href="/doc/referens-list-ao-globalehnergoholding.pdf") Референс-лист
            // a.footer__nav-link(href="/doc/kp-ao-globalehnergoholding.pdf") Презентация

        .footer__social-block.soc-link
          .soc-link__item.soc-link__item_vk
          .soc-link__item.soc-link__item_fb
          .soc-link__item.soc-link__item_insta
          .soc-link__item.soc-link__item_youtube
          .soc-link__item.soc-link__item_classmate
</template>

<script>
  export default {
    name: 'TheFooter'
  }
</script>
