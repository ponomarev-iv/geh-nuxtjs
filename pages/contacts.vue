<template lang="pug">
  div.wrapper
    TheHeader(:white="true")
    main.main-block.contacts
      .c-wrap
        .flex-row(style="margin-bottom:40px;")
          article.main-block__txt
            Breadcrumbs(:current="title")
            h1.section-title {{ title }}
            .content-block
              p.adres
                span Адрес:&nbsp;
                | 614007, г. Пермь, ул.  Николая Островского, д.&nbsp;59/1, строение БЦ &laquo;Парус&raquo;, 13&nbsp;этаж
              p.adres
                span Телефон/факс:&nbsp;
                a(href="tel:+73422482444") +7&nbsp;(342)&nbsp;248&nbsp;24&nbsp;44
              p.adres
                span Для звонков по Российской Федерации:&nbsp;
                a(href="tel:+78004443940") 8&nbsp;(800)&nbsp;444&nbsp;39&nbsp;40
              p.adres
                span Email:&nbsp;
                a(href="mailto:office@globalenergoholding.ru") office@globalenergoholding.ru
            //
              vue-tabs(
                type="pills"
                active-tab-color="#0059b5"
                active-text-color="#ffffff"
              )
                v-tab(title="Головной офис")
                  h2.section-title.section-title_subtitle Головной офис
                  .content-block
                    p.adres
                      span Адрес:&nbsp;
                      | 192019, г. Санкт-Петербург, ул. Глиняная, д.&nbsp;17, литер Н, 3&nbsp;этаж
                    p.adres
                      span Телефон/факс:&nbsp;
                      a(href="tel:+78125096070") +7&nbsp;(812)&nbsp;509&nbsp;60&nbsp;70
                    p.adres
                      span Для звонков по Российской Федерации:&nbsp;
                      a(href="tel:+78005502259") 8&nbsp;(800)&nbsp;550&nbsp;22&nbsp;59
                    p.adres
                      span Email:&nbsp;
                      a(href="mailto:office@globalenergoholding.ru") office@globalenergoholding.ru
                v-tab(title="Приволжский филиал")
                  h2.section-title.section-title_subtitle Приволжский филиал
                  .content-block
                    p.adres
                      span Адрес:&nbsp;
                      | 614015, г. Пермь, ул. Екатерининская, д.&nbsp;120, 1&nbsp;этаж
                    p.adres
                      span Телефон/факс:&nbsp;
                      a(href="tel:+73428008595") +7&nbsp;(342)&nbsp;200&nbsp;85&nbsp;95
                    p.adres
                      span Для звонков по Российской Федерации:&nbsp;
                      a(href="tel:+78005502259") 8&nbsp;(800)&nbsp;550&nbsp;22&nbsp;59
                    p.adres
                      span Email:&nbsp;
                      a(href="mailto:info@globalenergoholding.ru") info@globalenergoholding.ru
            .content-block.info-block
              .ico-box
                img.ico-box__icon(src="/img/ico-callback.svg")
                p.ico-box__txt Если Вас не&nbsp;устраивает качество сервиса, Вы&nbsp;можете<br> обратиться по&nbsp;телефону горячей линии <a class="ico-box__txt_accent" href="tel:88004443940">8&nbsp;800&nbsp;444 39 40</a><br>
                  | Мы&nbsp;благодарны за&nbsp;Ваши обращения!
          FeedbackForm
    TheFooter
</template>

<script>
  import Breadcrumbs from '../components/UI/Breadcrumbs';
  import { VueTabs, VTab } from 'vue-nav-tabs'
  import FeedbackForm from '../components/blocks/FeedbackForm';
  import TheHeader from '../components/TheHeader';
  import TheFooter from '../components/TheFooter';

  export default {
    name: 'Contacts',
    layout: 'empty',
    components: { TheFooter, TheHeader, FeedbackForm, Breadcrumbs, VueTabs, VTab },
    head () {
      return {
        title: 'ГлобалЭнергоХолдинг | Контакты'
      }
    },
    data () {
      return {
        title: 'Контакты'
      }
    }
  }
</script>
