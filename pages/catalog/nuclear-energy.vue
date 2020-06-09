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
                h2.catalog-item__name Гидроемкости
                span.catalog-item__btn Подробнее
            .masonry__row
              router-link.catalog-item.catalog-item_llll-blue(to="/in-dev")
                h2.catalog-item__name Парогенераторы
                span.catalog-item__btn Подробнее
          .masonry__col
            router-link.catalog-item.catalog-item_long.catalog-item_lll-blue(to="/in-dev")
              h2.catalog-item__name Оборудование шахты реактора и&nbsp;транспортные шлюзы
              span.catalog-item__btn Подробнее
          .masonry__col_xl
            .masonry__row
              router-link.catalog-item.catalog-item_llll-blue(to="/in-dev")
                h2.catalog-item__name Вентиляционное оборудование и&nbsp;комплексы холодоснабжения для атомных станций
                span.catalog-item__btn Подробнее
            .masonry__row.masonry
              .masonry__col
                router-link.catalog-item.catalog-item_l-blue(to="/in-dev")
                  h2.catalog-item__name Барботеры
                  span.catalog-item__btn Подробнее
              .masonry__col
                router-link.catalog-item.catalog-item_ll-blue(to="/in-dev")
                  h2.catalog-item__name Гидроамортизаторы
                  span.catalog-item__btn Подробнее

        .masonry.masonry__wrap.masonry_category
          .masonry__col.masonry__col_xxl
            .masonry__row.masonry
              .masonry__col
                router-link.catalog-item.catalog-item_ll-blue(to="/in-dev")
                  h2.catalog-item__name Камерное <br>оборудование
                  span.catalog-item__btn Подробнее
              .masonry__col
                router-link.catalog-item.catalog-item_long.catalog-item_llll-blue(to="/in-dev")
                  h2.catalog-item__name Компенсаторы давления
                  span.catalog-item__btn Подробнее
              .masonry__col
                router-link.catalog-item.catalog-item_long.catalog-item_llll-blue(to="/in-dev")
                  h2.catalog-item__name Решетчатый настил для атомной энергетики
                  span.catalog-item__btn Подробнее

            .masonry__row.masonry
              .masonry__col
                router-link.catalog-item.catalog-item_lll-blue(to="/in-dev")
                  h2.catalog-item__name Теплообменное <br>оборудование
                  span.catalog-item__btn Подробнее
              .masonry__col.masonry__col_xl
                router-link.catalog-item.catalog-item_l-blue(to="/in-dev")
                  h2.catalog-item__name Плавные циркулирующие насосы (ГЦН) и&nbsp;насосное оборудование
                  span.catalog-item__btn Подробнее
          .masonry__col
            router-link.catalog-item.catalog-item_long.catalog-item_lll-blue(to="/in-dev")
              h2.catalog-item__name Оборудование энергетических <br>реакторных утсановок
              span.catalog-item__btn Подробнее
        .masonry.masonry__wrap.masonry_category
          .masonry__col
            router-link.catalog-item.catalog-item_long.catalog-item_llll-blue(to="/in-dev")
              h2.catalog-item__name Устройства локализации <br>расплава активной зоны
              span.catalog-item__btn Подробнее
          .masonry__col.masonry__col_xl
            .masonry__row.masonry
              .masonry__col
                router-link.catalog-item.catalog-item_long.catalog-item_l-blue(to="/in-dev")
                  h2.catalog-item__name Аппаратные и&nbsp;выпарные<br> установки
                  span.catalog-item__btn Подробнее
              .masonry__col
                router-link.catalog-item.catalog-item_lll-blue(to="/in-dev")
                  h2.catalog-item__name АСУ ТП для атомных эдектростанций
                  span.catalog-item__btn Подробнее
            .masonry__row
              .masonry__col
                router-link.catalog-item.catalog-item_ll-blue(to="/in-dev")
                  h2.catalog-item__name Жесткие и гибкие анкерные линии<br> для атомных электростанций
                  span.catalog-item__btn Подробнее

          .masonry__col
            .masonry__row
              router-link.catalog-item.catalog-item_ll-blue(to="/in-dev")
                h2.catalog-item__name Сепараторы и&nbsp;пароперегреватели
                span.catalog-item__btn Подробнее
            .masonry__row
              router-link.catalog-item.catalog-item_l-blue(to="/in-dev")
                h2.catalog-item__name Подогреватели выского давления
                span.catalog-item__btn Подробнее
    TheFooter
</template>

<script>
  import Breadcrumbs from '../../components/UI/Breadcrumbs';
  import TheHeader from '../../components/TheHeader';
  import TheFooter from '../../components/TheFooter';
  export default {
    name: 'Nuclear-energy',
    layout: 'empty',
    components: { TheFooter, TheHeader, Breadcrumbs },
    head () {
      return {
        title: 'Ядерная энергетика | Каталог'
      }
    },
    data () {
      return {
        title: 'Ядерная энергетика'
      }
    }
  }
</script>
