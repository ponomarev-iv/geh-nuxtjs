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
                h2.catalog-item__name Циклоны пылевые
                span.catalog-item__btn Подробнее
            .masonry__row
              router-link.catalog-item.catalog-item_llll-blue(to="in-dev")
                h2.catalog-item__name Система<br> мазутоподготовки
                span.catalog-item__btn Подробнее
          .masonry__col
            router-link.catalog-item.catalog-item_long.catalog-item_lll-blue(to="in-dev")
              h2.catalog-item__name Паровые турбины и&nbsp;комплектующие для тепловой энергетики
              span.catalog-item__btn Подробнее
          .masonry__col_xl
            .masonry__row
              router-link.catalog-item.catalog-item_llll-blue(to="in-dev")
                h2.catalog-item__name Строительные металлические конструкции зданий и&nbsp;сооружений<br> для тепловой энергетики
                span.catalog-item__btn Подробнее
            .masonry__row.masonry
              .masonry__col
                router-link.catalog-item.catalog-item_l-blue(to="in-dev")
                  h2.catalog-item__name Сепараторы для тепловой энергетики
                  span.catalog-item__btn Подробнее
              .masonry__col
                router-link.catalog-item.catalog-item_ll-blue(to="in-dev")
                  h2.catalog-item__name Мельницы для тепловой энергетики
                  span.catalog-item__btn Подробнее

        .masonry.masonry__wrap.masonry_category
          .masonry__col.masonry__col_xxl
            .masonry__row.masonry
              .masonry__col
                router-link.catalog-item.catalog-item_ll-blue(to="in-dev")
                  h2.catalog-item__name Трубы дымовые для тепловой энергетики
                  span.catalog-item__btn Подробнее
              .masonry__col
                router-link.catalog-item.catalog-item_llll-blue(to="in-dev")
                  h2.catalog-item__name Питатели для тепловой энергетики
                  span.catalog-item__btn Подробнее
              .masonry__col
                router-link.catalog-item.catalog-item_llll-blue(to="in-dev")
                  h2.catalog-item__name Сушилки и&nbsp;паровые панели
                  span.catalog-item__btn Подробнее

            .masonry__row.masonry
              .masonry__col
                router-link.catalog-item.catalog-item_lll-blue(to="in-dev")
                  h2.catalog-item__name АСУ ТП для тепловых электростанций
                  span.catalog-item__btn Подробнее
              .masonry__col.masonry__col_xl
                router-link.catalog-item.catalog-item_l-blue(to="in-dev")
                  h2.catalog-item__name Котельные установки<br> Котельное оборудование<br> Тепловые пункты
                  span.catalog-item__btn Подробнее
          .masonry__col
            router-link.catalog-item.catalog-item_long.catalog-item_lll-blue(to="in-dev")
              h2.catalog-item__name Теплообменники и&nbsp;водонагреватели для тепловой энергетики
              span.catalog-item__btn Подробнее
        .masonry.masonry__wrap.masonry_category
          .masonry__col
            router-link.catalog-item.catalog-item_long.catalog-item_llll-blue(to="in-dev")
              h2.catalog-item__name Жесткие и гибкие<br> анкерные подогреватели для тепловой энергетики
              span.catalog-item__btn Подробнее
          .masonry__col.masonry__col_xl
            .masonry__row.masonry
              .masonry__col
                router-link.catalog-item.catalog-item_long.catalog-item_l-blue(to="in-dev")
                  h2.catalog-item__name Системы водоподготовки для тепловой энергетики
                  span.catalog-item__btn Подробнее
              .masonry__col
                router-link.catalog-item.catalog-item_lll-blue(to="in-dev")
                  h2.catalog-item__name Подогреватели<br>
                    | -&nbsp;низкого давления<br>
                    | -&nbsp;сетевой воды
                  span.catalog-item__btn Подробнее
            .masonry__row
              .masonry__col
                router-link.catalog-item.catalog-item_ll-blue(to="in-dev")
                  h2.catalog-item__name Конвейры и конвеерно-отвальные комплексы
                  span.catalog-item__btn Подробнее

          .masonry__col
            .masonry__row
              router-link.catalog-item.catalog-item_ll-blue(to="in-dev")
                h2.catalog-item__name Решетчатый настил для тепловой энергетики
                span.catalog-item__btn Подробнее
            .masonry__row
              router-link.catalog-item.catalog-item_l-blue(to="in-dev")
                h2.catalog-item__name Баки-аккумуляторы <br>горячей воды
                span.catalog-item__btn Подробнее
</template>

<script>
  import Breadcrumbs from '../../components/UI/Breadcrumbs';
  export default {
    name: 'Teplovaya-energetika',
    components: { Breadcrumbs },
    head () {
      return {
        title: 'Тепловая энергетика | ГлобалЭнергоХолдинг'
      }
    },
    data () {
      return {
        title: 'Тепловая энергетика'
      }
    }
  }
</script>
