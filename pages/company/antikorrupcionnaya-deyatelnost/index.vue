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
        h1.section-title.section-title_mrg-xl {{ title }}
        .masonry.masonry__wrap.masonry__wrap_mrg-sm.masonry_category.mb_xxl
          // .masonry__col.masonry__col_pad-mid
            // nuxt-link.catalog-item.catalog-item_long.catalog-item_l-blue(to="/company/antikorrupcionnaya-deyatelnost/antikorrupcionnaya-politika")
            // nuxt-link.catalog-item.catalog-item_long.catalog-item_l-blue(to="/in-dev")
              h2.catalog-item__name Антикоррупционная <br>политика
              span.catalog-item__btn Подробнее
          .masonry__col.masonry__col_pad-mid
            .masonry__row.masonry__row_mrg-mid
              nuxt-link.catalog-item.catalog-item_llll-blue(to="/company/antikorrupcionnaya-deyatelnost/normativnye-pravovye-i-inye-akty")
                h2.catalog-item__name Нормативные правовые <br>и&nbsp;иные акты в&nbsp;сфере <br>противодействия <br>коррупции
                span.catalog-item__btn Подробнее
            .masonry__row
              nuxt-link.catalog-item.catalog-item_ll-blue(to="/company/antikorrupcionnaya-deyatelnost/obratnaya-svyaz-dlya-soobshchenij-o-faktah-korrupcii")
                h2.catalog-item__name Обратная связь для&nbsp;сообщений <br>о&nbsp;фактах коррупции
                span.catalog-item__btn Подробнее
          // .masonry__col.masonry__col_pad-mid
            // nuxt-link.catalog-item.catalog-item_long.catalog-item_l-blue(to="/company/antikorrupcionnaya-deyatelnost/formy-dokumentov")
            // nuxt-link.catalog-item.catalog-item_long.catalog-item_l-blue(to="/in-dev")
              h2.catalog-item__name Формы документов, <br>связанных <br>с&nbsp;противодействием коррупции, <br>для&nbsp;заполнения
              span.catalog-item__btn Подробнее
    TheFooter
</template>

<script>
  import TheFooter from '../../../components/TheFooter';
  import TheHeader from '../../../components/TheHeader';
  import CompanyMenu from '../../../components/blocks/CompanyMenu';
  import Breadcrumbs from '../../../components/UI/Breadcrumbs';

  export default {
    name: 'Antikorrupcionnaya-deyatelnost',
    layout: 'empty',
    components: { Breadcrumbs, CompanyMenu, TheHeader, TheFooter },
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
