<template lang="pug">
  div.wrapper
    TheHeader(:white="true")
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
              router-link.catalog-item.catalog-item_ll-blue(to="/in-dev")
                h2.catalog-item__name Блочные<br> турбогенераторы<br> для ГеоЭС
                span.catalog-item__btn Подробнее
            .masonry__row
              router-link.catalog-item.catalog-item_llll-blue(to="/in-dev")
                h2.catalog-item__name Модульные <br>турбогенераторы<br> для ГеоЭС
                span.catalog-item__btn Подробнее
          .masonry__col
            router-link.catalog-item.catalog-item_long.catalog-item_lll-blue(to="/in-dev")
              h2.catalog-item__name(style="font-size: 1.4rem") Солнечные модули<br>
                | -&nbsp;монокристаллические
                | -&nbsp;мультикристаллические
                | -&nbsp;аморфного кремния
              span.catalog-item__btn Подробнее
          .masonry__col_xl
            .masonry__row
              router-link.catalog-item.catalog-item_llll-blue(to="/in-dev")
                h2.catalog-item__name Ветрогенераторы и&nbsp;ветроустановки от 0,5&nbsp;КВт&nbsp;- 2МВт<br>(вертикально осевые)
                span.catalog-item__btn Подробнее
            .masonry__row.masonry
              .masonry__col
                router-link.catalog-item.catalog-item_l-blue(to="/in-dev")
                  h2.catalog-item__name Солнечные коллекторы<br>
                    | -&nbsp;плоские<br>
                    | -&nbsp;вакуумные<br>
                    | -&nbsp;воздушные
                  span.catalog-item__btn Подробнее
              .masonry__col
                router-link.catalog-item.catalog-item_ll-blue(to="/in-dev")
                  h2.catalog-item__name Геотермальные электростанции (Гео ТЭС)
                  span.catalog-item__btn Подробнее

        .masonry.masonry__wrap.masonry_category
          .masonry__col.masonry__col_xxl
            .masonry__row.masonry
              .masonry__col
                router-link.catalog-item.catalog-item_ll-blue(to="/in-dev")
                  h2.catalog-item__name Паротурбинные установки и&nbsp;паровые турбины
                  span.catalog-item__btn Подробнее
              .masonry__col
                router-link.catalog-item.catalog-item_llll-blue(to="/in-dev")
                  h2.catalog-item__name Турбины с&nbsp;противодавлением<br> для ГеоЭС
                  span.catalog-item__btn Подробнее
              .masonry__col
                router-link.catalog-item.catalog-item_llll-blue(to="/in-dev")
                  h2.catalog-item__name Солнечные трекеры
                  span.catalog-item__btn Подробнее

            .masonry__row.masonry
              .masonry__col
                router-link.catalog-item.catalog-item_lll-blue(to="/in-dev")
                  h2.catalog-item__name Геотермальная <br>вентиляция для промышленности
                  span.catalog-item__btn Подробнее
              .masonry__col.masonry__col_xl
                router-link.catalog-item.catalog-item_l-blue(to="/in-dev")
                  h2.catalog-item__name АСУ ТП для солнечных ветряных и&nbsp;геотермальных источников энергии
                  span.catalog-item__btn Подробнее
          .masonry__col
            router-link.catalog-item.catalog-item_long.catalog-item_lll-blue(to="/in-dev")
              h2.catalog-item__name Аккумульторы для возобновляемых источников энергии
              span.catalog-item__btn Подробнее
        .masonry.masonry__wrap.masonry_category
          .masonry__col
            router-link.catalog-item.catalog-item_long.catalog-item_llll-blue(to="/in-dev")
              h2.catalog-item__name Реновированные станции<br> 0,75&nbsp;-&nbsp;3МВт
              span.catalog-item__btn Подробнее
          .masonry__col.masonry__col_xl
            .masonry__row.masonry
              .masonry__col
                router-link.catalog-item.catalog-item_long.catalog-item_l-blue(to="/in-dev")
                  h2.catalog-item__name Комплектующие для солнечной энергетики
                  span.catalog-item__btn Подробнее
              .masonry__col
                router-link.catalog-item.catalog-item_lll-blue(to="/in-dev")
                  h2.catalog-item__name Комплектующие для ветроэнергетики
                  span.catalog-item__btn Подробнее
            .masonry__row
              .masonry__col
                router-link.catalog-item.catalog-item_ll-blue(to="/in-dev")
                  h2.catalog-item__name Жестки и&nbsp;гибкие анкерные линии<br> для ветрогенераторов и&nbsp;ветроустановок
                  span.catalog-item__btn Подробнее

          .masonry__col
            .masonry__row
              router-link.catalog-item.catalog-item_ll-blue(to="/in-dev")
                h2.catalog-item__name Комплектующие для геотермальной энергетики
                span.catalog-item__btn Подробнее
            .masonry__row
              router-link.catalog-item.catalog-item_l-blue(to="/in-dev")
                h2.catalog-item__name Ветровые и&nbsp;солнечные светильники улчиного и&nbsp;внутреннего освещения
                span.catalog-item__btn Подробнее
    TheFooter
</template>

<script>
  import Breadcrumbs from '../../components/UI/Breadcrumbs';
  import TheFooter from '../../components/TheFooter';
  import TheHeader from '../../components/TheHeader';
  export default {
    name: 'Alternativnaya-energetika',
    layout: 'empty',
    components: { TheHeader, TheFooter, Breadcrumbs },
    head () {
      return {
        title: 'Альтернативная энергетика | ГлобалЭнергоХолдинг'
      }
    },
    data () {
      return {
        title: 'Альтернативная энергетика'
      }
    }
  }
</script>
