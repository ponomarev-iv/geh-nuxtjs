<template lang="pug">
  div.wrapper
    TheHeader(:white="true")
    main.main-block
      .c-wrap
        Breadcrumbs(
          :current="title"
        )
        h1.section-title {{ title }}
        .masonry.masonry__wrap
          .masonry__col
            .masonry__row
              router-link.catalog-item.catalog-item_electric-net(to="/catalog/elektricheskaya-set")
                h2.catalog-item__name Электрическая<br> сеть
                span.catalog-item__btn Подробнее
            .masonry__row
              router-link.catalog-item.catalog-item_thermal(to="/catalog/teplovaya-energetika")
                h2.catalog-item__name Теплования<br> энергетика
                span.catalog-item__btn Подробнее
          .masonry__col
            router-link.catalog-item.catalog-item_long.catalog-item_hydropower(to="/catalog/gidroenergetika")
              h2.catalog-item__name Гидроэнергетика
              span.catalog-item__btn Подробнее
          .masonry__col_xl
            .masonry__row
              router-link.catalog-item.catalog-item_nuclear(to="/catalog/nuclear-energy")
                h2.catalog-item__name Ядерная<br> энергетика
                span.catalog-item__btn Подробнее
            .masonry__row
              router-link.catalog-item.catalog-item_alternative(to="/catalog/alternativnaya-energetika")
                h2.catalog-item__name Альтернативная<br> энергетика
                span.catalog-item__btn Подробнее
    TheFooter
</template>

<script>
  import Breadcrumbs from '../../components/UI/Breadcrumbs';
  import TheHeader from '../../components/TheHeader';
  import TheFooter from '../../components/TheFooter';
  export default {
    name: 'index',
    layout: 'empty',
    components: { TheFooter, TheHeader, Breadcrumbs },
    head () {
      return {
        title: 'ГлобалЭнергоХолдинг | Каталог'
      }
    },
    data () {
      return {
        title: 'Каталог'
      }
    }
  }
</script>
