<template lang="pug">
  div
    TheHeader(:white="true" :activeClass="'company'")
    .second-menu
      .c-wrap
        CompanyMenu(:inHeader="true" :inSubMenu="true")
    main.main-block.structura
      .c-wrap
        Breadcrumbs(
          :folder="[{id: 0, title: 'Компания', link: '/company/about'}]"
          :current="title"
        )
        h1.section-title {{ title }}
        .masonry.masonry__wrap.masonry__wrap_mrg-sm.masonry_category.mb_xxl
          .masonry__col.masonry__col_half
            .masonry__row.masonry__row_mrg-mid
              nuxt-link.catalog-item.catalog-item_ll-blue.catalog-item_violet.catalog-item_height-mid(to="/in-dev")
                h2.catalog-item__name.catalog-item__name_xl Антикоррупционная <br>политика
                span.catalog-item__btn Подробнее
            .masonry__row
              nuxt-link.catalog-item.catalog-item_llll-blue.catalog-item_blue.catalog-item_height-mid(to="/in-dev")
                h2.catalog-item__name.catalog-item__name_xl Формы документов, <br>связанных <br>с&nbsp;противодействием коррупции, <br>для&nbsp;заполнения
                span.catalog-item__btn Подробнее
          .masonry__col.masonry__col_half
            .masonry__row.masonry__row_mrg-mid
              nuxt-link.catalog-item.catalog-item_l-blue.catalog-item_green.catalog-item_height-mid(to="/in-dev")
                h2.catalog-item__name.catalog-item__name_xl Нормативные правовые <br>и&nbsp;иные акты в&nbsp;сфере <br>противодействия коррупции
                span.catalog-item__btn Подробнее
            .masonry__row
              nuxt-link.catalog-item.catalog-item_ll-blue.catalog-item_violet.catalog-item_height-mid(to="/in-dev")
                h2.catalog-item__name.catalog-item__name_xl Обратная связь для&nbsp;сообщений <br>о&nbsp;фактах коррупции
                span.catalog-item__btn Подробнее
    TheFooter
</template>

<script>
  import Breadcrumbs from '../../components/UI/Breadcrumbs';
  import TheHeader from '../../components/TheHeader';
  import CompanyMenu from '../../components/blocks/CompanyMenu';
  import IconBlock from '../../components/wraps/IconBlock';
  import TheFooter from '../../components/TheFooter';
  import Input from '../../components/UI/Input';
  import Upload from '../../components/UI/Upload';

  export default {
    name: 'Antikorrupcionnaya-deyatelnost',
    layout: 'empty',
    components: { Upload, Input, TheFooter, IconBlock, CompanyMenu, TheHeader, Breadcrumbs },
    head () {
      return {
        title: 'Антикоррупционная деятельность | ГлобалЭнергоХолдинг'
      }
    },
    data () {
      return {
        title: 'Антикоррупционная деятельность'
      }
    }
  }
</script>
