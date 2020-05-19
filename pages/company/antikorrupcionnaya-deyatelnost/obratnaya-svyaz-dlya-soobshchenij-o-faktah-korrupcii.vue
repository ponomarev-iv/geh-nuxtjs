<template lang="pug">
  div.wrapper
    TheHeader(:white="true" :activeClass="'company'")
    .second-menu
      .c-wrap
        CompanyMenu(:inHeader="true" :inSubMenu="true")
    .main-block.main-block_alone
      .c-wrap
        Breadcrumbs(
          :folder="breadCrumbsFolder"
          :current="title"
        )
        h1.section-title {{ title }}
        p.par
          | Если Вам стало известно о&nbsp;совершении (приготовлении) работниками Предприятия АО&nbsp;&laquo;ГлобалЭнергоХолдинг&raquo; коррупционных правонарушений или каких-либо действий, нарушающих имущественные и&nbsp;иные права и&nbsp;законные интересы Предприятия АО&nbsp;&laquo;ГлобалЭнергоХолдинг&raquo;, в&nbsp;том числе
          |
          | в&nbsp;области обеспечения качества, Вы&nbsp;можете сообщить об&nbsp;этом, воспользовавшись специализированными каналами связи горячей линии, включающими:
        ul.list
          li.list__item
            | Электронная почта:
            |
            a.list__link(href="mailto:help@globalenergoholding.ru") help@globalenergoholding.ru
          li.list__item
            | Телефон:
            |
            a.list__link.list__link_phone(href="tel:+78005502259")
              | +7(800)550-22-59
            span.list__notes
              |
              | (бесплатно из&nbsp;любой точки страны)
        .pp-info-block.pp-info-block_no-mrg
          h3.pp-info-block__title
            | Примечания:
          ul.list-num
            li.list-num__item(
              v-for="(item, idx) in iconArr"
              :key="idx"
              :class="{'list-num__item_cntr': item.toCenter}"
              )
              span.list-num__icon {{ item.num }}
              span.list-num__text(v-html="item.text")

    TheFooter
</template>

<script>
  import TheHeader from '../../../components/TheHeader';
  import CompanyMenu from '../../../components/blocks/CompanyMenu';
  import Breadcrumbs from '../../../components/UI/Breadcrumbs';
  import TheFooter from '../../../components/TheFooter';

  export default {
    name: 'Obratnaya-svyaz-dlya-soobshchenij-o-faktah-korrupcii',
    layout: 'empty',
    components: { TheFooter, Breadcrumbs, CompanyMenu, TheHeader },
    head () {
      return {
        title: 'Обратная связь для сообщений о фактах коррупции | ГлобалЭнергоХолдинг'
      }
    },
    data () {
      return {
        title: 'Обратная связь для сообщений о фактах коррупции',
        breadCrumbsFolder: [
          { id: 0, title: 'Компания', link: '/company/about' },
          { id: 1, title: 'Антикоррупционная деятельность', link: '/company/antikorrupcionnaya-deyatelnost' }
        ],
        iconArr: [
          {
            num: 1,
            text: 'Указанные каналы связи замыкаются исключительно на&nbsp;Департамент защиты активов Предприятия <br>' +
              'АО&nbsp;&laquo;ГлобалЭнергоХолдинг&raquo;.'
          },
          {
            num: 2,
            text: 'Заявителям гарантируется независимость рассмотрения любого сообщения, а&nbsp;также неразглашение источника сообщения.',
            toCenter: true
          },
          {
            num: 3,
            text: 'К&nbsp;правонарушениям коррупционной и&nbsp;иной направленности относятся дача взятки, получение взятки, злоупотребление\n' +
              'полномочиями, коммерческий подкуп, иное незаконное использование физическим лицом своего должностного положения\n' +
              'вопреки законным интересам общества и&nbsp;государства в&nbsp;целях получения выгоды в&nbsp;виде денег, ценностей, иного имущества\n' +
              'или услуг имущественного характера, иных имущественных прав для себя или для третьих лиц либо незаконное предоставление\n' +
              'такой выгоды указанному лицу другими физическими лицами, а&nbsp;также совершение указанных выше деяний от&nbsp;имени или\n' +
              'в&nbsp;интересах юридического лица и&nbsp;иные действия (бездействие) и/или решения должностных лиц, затрагивающие права и\n' +
              'законные интересы Предприятия АО&nbsp;&laquo;ГлобалЭнергоХолдинг&raquo;.'
          }
        ]
      }
    }
  }
</script>
