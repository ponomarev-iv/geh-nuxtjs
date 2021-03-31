<template lang="pug">
  div.wrapper
    TheHeader(:white="true" :activeClass="'company'")
    .second-menu
      .c-wrap
        CompanyMenu(:inSubMenu="true" :inHeader="true")
    .main-block.structura
      .c-wrap
        Breadcrumbs(
          :folder="[{id: 0, title: 'Компания', link: '/company/about'}]"
          :current="title"
        )
        h1.section-title.section-title_mrg-xl {{ title }}
      .pp
        .c-wrap
          .pp__wrap
            article.pp__content
              p.pp__par
                | В&nbsp;настоящее время в&nbsp;&laquo;ГЛОБАЛЭНЕРГОХОЛДИНГ&raquo; организована работа по&nbsp;привлечению промышленного потенциала регионов Российской Федерации к&nbsp;решению задач, направленных на&nbsp;импортозамещение продукции, применяемой или планируемой к&nbsp;применению в&nbsp;производственной деятельности &laquo;ГЛОБАЛЭНЕРГОХОЛДИНГ&raquo;.
              .pp-info-block.mt_xl
                h2.pp-info-block__title
                  | Задачи, решаемые в&nbsp;рамках реализации программы импортозамещения &laquo;ГЛОБАЛЭНЕРГОХОЛДИНГ&raquo;:
                IconBlock(
                  v-for="(item, idx) in iconSet"
                  :item="item"
                  :iconClass="'ico-block__icon_top'"
                  :key="idx"
                  )
          Picture(
            :img="'parks-in-logistics'"
            :imgClass="'pp__img'"
            :imgStyle="'max-width: 39vw;'"
            :isRetina="true"
          )
          p.pp__par
            | С&nbsp;целью оптимизации взаимодействия предприятий-изготовителей технологического оборудования и&nbsp;материалов с&nbsp;&laquo;ГЛОБАЛЭНЕРГОХОЛДИНГ&raquo; и&nbsp;сопровождения разработки и&nbsp;освоения импортозамещающей продукции подготовлена форма опросного листа. Заполненный предприятием- изготовителем опросный лист вместе с&nbsp;сопроводительным письмом следует направлять в&nbsp;адрес Департамента материально-технического обеспечения &laquo;ГЛОБАЛЭНЕРГОХОЛДИНГ&raquo;.
      .mb_xl
        .c-wrap
          h3.pp__title.pp__title_mrg-mid
            | Ниже предоставлены документы для&nbsp;заполнения
          LinkDonwload(v-for="(item, idx) in docDownload" :link="item" :key="idx")
    .c-section.c-section_gray
      .c-wrap
        h3.c-section__title
          | Нормативные правовые и&nbsp;иные акты в&nbsp;сфере импортозамещения
        ul.link-list
          li.link-list__item(v-for="(item, idx) in linkArr.slice(0, 5)" :key="idx")
            a.link-list__link(:href="item.url" v-html="item.text" target="_blank")
        .accordion(:class="{'accordion_show': showAllLinks}" :style="`max-height: ${maxHeight}px;`")
          ul.link-list.mt_mid(ref="acc")
            li.link-list__item(v-for="(item, idx) in linkArr.slice(5)" :key="idx")
              a.link-list__link(:href="item.url" v-html="item.text" target="_blank")
        button.btn.btn_more.mt_mid(type="button" @click.prevent="handlerClick") {{ btnText }}
    TheFooter
</template>

<script>
  import TheHeader from '../../components/TheHeader';
  import CompanyMenu from '../../components/blocks/CompanyMenu';
  import Breadcrumbs from '../../components/UI/Breadcrumbs';
  import TheFooter from '../../components/TheFooter';
  import IconBlock from '../../components/wraps/iconBlock/IconBlock';
  import Picture from '../../components/UI/Picture';
  import LinkDonwload from '../../components/UI/linkDonload/LinkDonwload';
  export default {
    name: 'Importozameshchenie',
    layout: 'empty',
    components: { LinkDonwload, Picture, IconBlock, TheFooter, Breadcrumbs, CompanyMenu, TheHeader },
    head () {
      return {
        title: 'ГлобалЭнергоХолдинг | Импортозамещение'
      }
    },
    data () {
      return {
        accordionHeight: '',
        showAllLinks: false,
        title: 'Импортозамещение',
        iconSet: [
          {
            icon: '/img/ico-graf-down.svg',
            txt: 'Снижение фактической зависимости от&nbsp;продукции импортного производства, а&nbsp;также от&nbsp;предприятий производящих данную продукцию'
          },
          {
            icon: '/img/ico-safe.svg',
            txt: 'Полное исключение, либо минимизация ситуаций отсутствия необходимых для реализации проектов, реализуемых &laquo;ГЛОБАЛЭНЕРГОХОЛДИНГ&raquo; товаров и&nbsp;оборудования или необоснованного увеличения их&nbsp;стоимости, вызванного политическими рисками, резким повышением спроса, задержками в&nbsp;доставке и&nbsp;таможенном оформлении и&nbsp;т.д.'
          },
          {
            icon: '/img/ico-settings.svg',
            txt: 'Полное исключение, либо минимизация ситуаций простоя оборудования или необоснованно высоких затрат на&nbsp;ремонт ввиду отсутствия запасных частей и&nbsp;сервисной базы оборудования на&nbsp;территории Российской Федерации'
          },
          {
            icon: '/img/ico-logistic.svg',
            txt: 'Оптимизация стоимости производства и&nbsp;сервиса продукции за&nbsp;счет исключения транспортных расходов за&nbsp;пределами страны, таможенных пошлин'
          },
          {
            icon: '/img/ico-calendar.svg',
            txt: 'Повышение контроля сроков изготовления и&nbsp;поставки продукции'
          }
        ],
        docDownload: [
          {
            text: 'Форма опросного листа',
            notes: 'xlsx, 56 Кб',
            url: 'forma-oprosnogo-lista1.xlsx'
          }
          // {
          //   text: 'Форма письма о предоставлении Опросного листа предприятия',
          //   notes: 'docx, 12 Кб',
          //   url: 'forma-pisma-o-predostavlenii-oprosnogo-lista-predpriyatiya.docx'
          // }
        ],
        linkArr: [
          {
            text: 'Концепция долгосрочного социально-экономического развития Российской Федерации на&nbsp;период до&nbsp;2020 года (утв. Распоряжением Правительства РФ&nbsp;от&nbsp;17.11.2008 &#8470;&nbsp;1662-р).',
            url: 'http://old.economy.gov.ru/minec/activity/sections/fcp/rasp_2008_N1662_red_08.08.2009'
          },
          {
            text: 'Энергетическая стратегия России на&nbsp;период 2030 года (утв. Распоряжением Правительства РФ&nbsp;от&nbsp;13.11.2009 &#8470;&nbsp;1715-р).',
            url: 'http://base.garant.ru/196681/'
          },
          {
            text: 'Стратегия развития энергомашиностроения Российской Федерации на&nbsp;2010&nbsp;&mdash; 2020 годы и&nbsp;на&nbsp;перспективу до&nbsp;2030 года (утв. Приказом Минпромторга России от&nbsp;22.02.2011 &#8470;&nbsp;206).',
            url: 'https://www.economy.gov.ru/material/file/eb8fe06031f48f50686912b8b05b2445/14062019to.pdf'
          },
          {
            text: 'Протокол заседания Комиссии при Президенте Российской Федерации по&nbsp;вопросам стратегии развития топливно-энергетического комплекса и&nbsp;экологической безопасности от&nbsp;04.06.2014 &#8470; А4-26-368.',
            url: 'http://pravo.gov.ru/proxy/ips/?docbody=&prevDoc=102415903&backlink=1&&nd=102157825'
          },
          {
            text: 'Стратегия развития энергомашиностроения Российской Федерации на&nbsp;2010&nbsp;&mdash; 2020 годы и&nbsp;на&nbsp;перспективу до&nbsp;2030 года (Докипедия: Стратегия развития энергомашиностроения Российской Федерации на&nbsp;2010&nbsp;&mdash; 2020 годы и&nbsp;на&nbsp;перспективу до&nbsp;2030&nbsp;года).',
            url: 'http://base.garant.ru/70379444/'
          },
          {
            text: 'Перечень поручений Председателя Правительства Российской Федерации по&nbsp;итогам встречи с&nbsp;членами Экспертного совета при Правительстве Российской Федерации и&nbsp;представителями экспертного сообщества по&nbsp;вопросу развития инноваций от&nbsp;25.07.2014 (резолюция от&nbsp;09.08.2014 &#8470; ДМ-П36-6057).',
            url: 'http://government.ru/orders/selection/401/14277/'
          },
          {
            text: 'Распоряжение Правительства Российской Федерации об&nbsp;утверждении плана мероприятий (&laquo;дорожной карты&raquo;) &laquo;Расширение доступа субъектов малого и&nbsp;среднего предпринимательства к&nbsp;закупкам инфраструктурных монополий и&nbsp;компаний с&nbsp;государственным участием&raquo; от&nbsp;29.05.2013 &#8470;&nbsp;867-р.',
            url: 'http://government.ru/docs/2239/'
          },
          {
            text: 'Распоряжение Правительства Российской Федерации об&nbsp;утверждении плана мероприятий (&laquo;дорожной карты&raquo;) &laquo;Внедрение инновационных технологий и&nbsp;современных материалов в&nbsp;отраслях топливно-энергетического комплекса&raquo; на&nbsp;период до&nbsp;2018 года от&nbsp;03.07.2014 &#8470;&nbsp;1217-р.',
            url: 'http://static.government.ru/media/files/41d4eeb21a3d62bbd063.pdf'
          }
        ]
      }
    },
    computed: {
      btnText () {
        return (this.showAllLinks)
          ? 'Скрыть часть документов'
          : 'Показать все документы'
      },
      maxHeight () {
        return (this.showAllLinks)
          ? this.accordionHeight
          : '0'
      }
    },
    mounted () {
      this.accordionHeight = this.$refs['acc'].offsetHeight;
    },
    methods: {
      handlerClick () {
        this.showAllLinks = !this.showAllLinks
      }
    }
  }
</script>
