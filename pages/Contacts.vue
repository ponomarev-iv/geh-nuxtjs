<template lang="pug">
  div
    .header-wrap.header-wrap_contact
      .title-block
    main.main-block.contacts
      .c-wrap
        .flex-row
          article.main-block__txt
            Breadcrumbs(:current="title")
            h1.section-title {{ title }}
            vue-tabs(
              type="pills"
              active-tab-color="#0059b5"
              active-text-color="#ffffff"
            )
              v-tab(title="Головной офис" )
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
                p.ico-box__txt Если Вас не&nbsp;устраивает качество сервиса, Вы&nbsp;можете<br> обратиться по&nbsp;телефону горячей линии <a class="ico-box__txt_accent" href="tel:88005502259">8&nbsp;800&nbsp;550 22 59</a><br>
                  | Мы&nbsp;благодарны за&nbsp;Ваши обращения!
          FeedbackForm
      MapLeaflet
</template>

<script>
  import Breadcrumbs from '../components/UI/Breadcrumbs';
  import { VueTabs, VTab } from 'vue-nav-tabs'
  import FeedbackForm from '../components/blocks/FeedbackForm';
  import MapLeaflet from '../components/blocks/Contacts/MapLeaflet';

  export default {
    name: 'Contacts',
    components: { MapLeaflet, FeedbackForm, Breadcrumbs, VueTabs, VTab },
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
