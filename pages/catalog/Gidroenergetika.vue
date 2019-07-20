<template lang="pug">
  div
    .header-wrap.header-wrap_nuclear
      .title-block
    main.main-block
      .c-wrap
        Breadcrumbs(
          :folder="[{id: 0, title: 'Каталог', link: '/catalog'}]"
          :current="title"
        )
        h1.section-title {{ title }}
        .masonry.masonry__wrap.masonry_category
          .masonry__col
            .masonry__row
              router-link.catalog-item.catalog-item_ll-blue(to="in-dev")
                h2.catalog-item__name Дисковые предтурбинные затворы
                span.catalog-item__btn Подробнее
            .masonry__row
              router-link.catalog-item.catalog-item_llll-blue(to="in-dev")
                h2.catalog-item__name Тепловое электрооборудование
                span.catalog-item__btn Подробнее
          .masonry__col
            router-link.catalog-item.catalog-item_long.catalog-item_lll-blue(to="in-dev")
              h2.catalog-item__name Электродвигатели<br>
                | -&nbsp;асинхронные
                | -&nbsp;синхронные
                | -&nbsp;специальные
                | -&nbsp;взрывозащищенные
              span.catalog-item__btn Подробнее
          .masonry__col_xl
            .masonry__row
              router-link.catalog-item.catalog-item_llll-blue(to="in-dev")
                h2.catalog-item__name Системы возбуждения и&nbsp;управления генераторов и&nbsp;пусковых установок
                span.catalog-item__btn Подробнее
            .masonry__row.masonry
              .masonry__col
                router-link.catalog-item.catalog-item_l-blue(to="in-dev")
                  h2.catalog-item__name Турбины
                  span.catalog-item__btn Подробнее
              .masonry__col
                router-link.catalog-item.catalog-item_ll-blue(to="in-dev")
                  h2.catalog-item__name Гидротурбины
                  span.catalog-item__btn Подробнее

        .masonry.masonry__wrap.masonry_category
          .masonry__col.masonry__col_xxl
            .masonry__row.masonry
              .masonry__col
                router-link.catalog-item.catalog-item_ll-blue(to="in-dev")
                  h2.catalog-item__name Гидроагрегаты
                  span.catalog-item__btn Подробнее
              .masonry__col
                router-link.catalog-item.catalog-item_long.catalog-item_llll-blue(to="in-dev")
                  h2.catalog-item__name Генераторы
                  span.catalog-item__btn Подробнее
              .masonry__col
                router-link.catalog-item.catalog-item_long.catalog-item_llll-blue(to="in-dev")
                  h2.catalog-item__name Гидрогенераторы
                  span.catalog-item__btn Подробнее

            .masonry__row.masonry
              .masonry__col
                router-link.catalog-item.catalog-item_lll-blue(to="in-dev")
                  h2.catalog-item__name Спиральные камеры (турбин)
                  span.catalog-item__btn Подробнее
              .masonry__col.masonry__col_xl
                router-link.catalog-item.catalog-item_l-blue(to="in-dev")
                  h2.catalog-item__name АСУ ТП для гидротехнических сооружения
                  span.catalog-item__btn Подробнее
          .masonry__col
            router-link.catalog-item.catalog-item_long.catalog-item_lll-blue(to="in-dev")
              h2.catalog-item__name Системы жизниобеспечения <br>для турбогенераторов
              span.catalog-item__btn Подробнее
        .masonry.masonry__wrap.masonry_category
          .masonry__col
            router-link.catalog-item.catalog-item_long.catalog-item_llll-blue(to="in-dev")
              h2.catalog-item__name Решетчатый настил для гидросооружений
              span.catalog-item__btn Подробнее
          .masonry__col.masonry__col_xl
            .masonry__row.masonry
              .masonry__col
                router-link.catalog-item.catalog-item_long.catalog-item_l-blue(to="in-dev")
                  h2.catalog-item__name Трубопроводная арматура
                  span.catalog-item__btn Подробнее
              .masonry__col
                router-link.catalog-item.catalog-item_lll-blue(to="in-dev")
                  h2.catalog-item__name Гибромеханическое оборудование
                  span.catalog-item__btn Подробнее
            .masonry__row
              .masonry__col
                router-link.catalog-item.catalog-item_ll-blue(to="in-dev")
                  h2.catalog-item__name Жесткие и гибкие анкерные линии <br>для гидросооружений
                  span.catalog-item__btn Подробнее

          .masonry__col
            .masonry__row
              router-link.catalog-item.catalog-item_ll-blue(to="in-dev")
                h2.catalog-item__name Гидроэнергетическое оборудование
                span.catalog-item__btn Подробнее
            .masonry__row
              router-link.catalog-item.catalog-item_l-blue(to="in-dev")
                h2.catalog-item__name Турбогенераторы<br>
                  | -&nbsp;синхронные
                  | -&nbsp;асинхронные
                span.catalog-item__btn Подробнее

</template>

<script>
  import Breadcrumbs from '../../components/UI/Breadcrumbs';
  export default {
    name: 'Gidroenergetika',
    components: { Breadcrumbs },
    head () {
      return {
        title: 'Гидроэнергетика | ГлобалЭнергоХолдинг'
      }
    },
    data () {
      return {
        title: 'Гидроэнергетика'
      }
    }
  }
</script>
