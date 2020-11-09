<template lang="pug">
  footer.footer
    .c-wrap.flex-row
      .footer__col
        img.footer__logo(src="/img/footer-logo.png" alt="logo")
        .footer__par
          p.footer__lbl Бесплатный звонок по России
          a(href="tel:88005502259").footer__phone 8 800 550 22 59
        .footer__par
          p.footer__lbl Головной офис
          p.footer__adres 614002, г. Пермь, ул. Островского, д.&nbsp;59/1, 13&nbsp;этаж<br>
            a(href="tel:+73422008595").footer__phone-link +7 (342) 200 85 95
        //.footer__par
          p.footer__lbl Приволжский филиал
          p.footer__adres 614015, г. Пермь, ул. Екатерининская, д.&nbsp;120, 1&nbsp;этаж<br>
            a(href="tel:+73422008595").footer__phone-link +7 (342) 200 85 95
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
            a.footer__nav-link(href="mailto:info@globalenergoholding.ru") Оставить заявку
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
