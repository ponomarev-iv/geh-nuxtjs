<template lang="pug">
  div
    .header-wrap.header-wrap_company
      .title-block
    main.main-block
      .c-wrap
        .flex-row
          article.main-block__txt
            Breadcrumbs(
              :folder="[{id: 0, title: 'Компания', link: '/company/about'}]"
              :current="title"
            )
            h1.section-title {{ title }}
            h2.section-title.section-title_subtitle Приволжский филиал
            section.content-block
              InfoBlock
            section.content-block.content-block_brd-bot
              h3.content-title Образован в&nbsp;целях:
              .ico-box.ico-box_col-3
                .ico-box__item
                  img.ico-box__icon(src="/img/improving-efficiency.svg")
                  span.ico-box__txt Повышения эффективности и&nbsp;качества обслуживания клиентов
                .ico-box__item
                  img.ico-box__icon(src="/img/cost-optimization.svg")
                  span.ico-box__txt Оптимизации сроков<br> доставки и&nbsp;стоимости<br> продукции
                .ico-box__item
                  img.ico-box__icon(src="/img/delivery.svg")
                  span.ico-box__txt Удобства взаимодействия с&nbsp;ключевыми поставщиками и&nbsp;перевозчиками

            section.content-block.content-block_brd-bot
              h3.content-title Масштаб
              .ico-box.ico-box_col-3
                .ico-box__item.ico-box__item_vertical
                  .ico-box__info-num
                    .ico-box__info-prefix более
                    | 250
                    span.units &nbsp;м<sup>2</sup>
                  span.ico-box__info-txt Площадь офиса
                .ico-box__item.ico-box__item_vertical
                  .ico-box__info-num
                    .ico-box__info-prefix более
                    | 2000
                    span.units &nbsp;м<sup>2</sup>
                  span.ico-box__info-txt Площадь склада
                .ico-box__item.ico-box__item_vertical
                  .ico-box__info-num
                    .ico-box__info-prefix более
                    | 1500
                    span.units &nbsp;м<sup>2</sup>
                  span.ico-box__info-txt Производственные площади

            section.content-block
              h3.content-title Территория обслуживания
              FilialyItem
          CompanyMenu
        FilialMap
</template>

<script>
  import CompanyMenu from '../../components/blocks/CompanyMenu';
  import Breadcrumbs from '../../components/UI/Breadcrumbs';
  import InfoBlock from '../../components/blocks/InfoBlock';
  import FilialMap from '../../components/blocks/Filial/FilialMap';
  import FilialyItem from '../../components/blocks/Filial/FilialyItem';

  export default {
    name: 'Filialy',
    components: { FilialyItem, FilialMap, InfoBlock, Breadcrumbs, CompanyMenu },
    head () {
      return {
        title: 'ГлобалЭнергоХолдинг | Филиалы'
      }
    },
    data () {
      return {
        title: 'Филиалы'
      }
    }
  }
</script>
