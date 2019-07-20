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
                h2.catalog-item__name Строительные<br> металлические<br> конструкции<br> ОРУ и&nbsp;ЗРУ
                span.catalog-item__btn Подробнее
            .masonry__row
              router-link.catalog-item.catalog-item_llll-blue(to="in-dev")
                h2.catalog-item__name Линейна <br>и&nbsp;спиральная<br> арматура
                span.catalog-item__btn Подробнее
          .masonry__col
            router-link.catalog-item.catalog-item_long.catalog-item_lll-blue(to="in-dev")
              h2.catalog-item__name Высоковольтные <br>металлические<br> решатчатые<br> и&nbsp;многоранные<br> опоры для&nbsp;ВЛ
              span.catalog-item__btn Подробнее
          .masonry__col_xl
            .masonry__row
              router-link.catalog-item.catalog-item_llll-blue(to="in-dev")
                h2.catalog-item__name Высоковольтное оборудование <br>различных классов напряжения
                span.catalog-item__btn Подробнее
            .masonry__row.masonry
              .masonry__col
                router-link.catalog-item.catalog-item_l-blue(to="in-dev")
                  h2.catalog-item__name Ошиновка<br> жетская для ОРУ
                  span.catalog-item__btn Подробнее
              .masonry__col
                router-link.catalog-item.catalog-item_ll-blue(to="in-dev")
                  h2.catalog-item__name Изоляторы
                  span.catalog-item__btn Подробнее

        .masonry.masonry__wrap.masonry_category
          .masonry__col
            .masonry__row
              router-link.catalog-item.catalog-item_ll-blue(to="in-dev")
                h2.catalog-item__name Арматура<br> для монтажа <br>и&nbsp;ремонта СИП
                span.catalog-item__btn Подробнее
            .masonry__row
              router-link.catalog-item.catalog-item_ll-blue(to="in-dev")
                h2.catalog-item__name Кабельная<br> арматура
                span.catalog-item__btn Подробнее
          .masonry__col.masonry__col_xl
            .masonry__row.masonry
              .masonry__col
                router-link.catalog-item.catalog-item_l-blue(to="in-dev")
                  h2.catalog-item__name Грозозащита
                  span.catalog-item__btn Подробнее
              .masonry__col
                router-link.catalog-item.catalog-item_ll-blue(to="in-dev")
                  h2.catalog-item__name Кабельно-<br>проводниковая<br> продукция
                  span.catalog-item__btn Подробнее
            .masonry__row
              router-link.catalog-item.catalog-item_llll-blue(to="in-dev")
                h2.catalog-item__name АСУ ТП&nbsp;для подстанций, магистральных<br> и&nbsp;распределительных сетей
                span.catalog-item__btn Подробнее
          .masonry__col
            router-link.catalog-item.catalog-item_long.catalog-item_lll-blue(to="in-dev")
              h2.catalog-item__name Металлические <br>гофрированные<br> конструкции
              span.catalog-item__btn Подробнее
        .masonry.masonry__wrap.masonry_category
          .masonry__col
            router-link.catalog-item.catalog-item_long.catalog-item_lll-blue(to="in-dev")
              h2.catalog-item__name Продукция для <br>волоконно-<br>оптических<br> магистральных <br>и&nbsp;городских&nbsp;ВЛ <br>(ВОЛС)
              span.catalog-item__btn Подробнее
          .masonry__col.masonry__col_xl
            .masonry__row.masonry
              .masonry__col
                router-link.catalog-item.catalog-item_l-blue(to="in-dev")
                  h2.catalog-item__name Винтовые сваи<br> для ВЛ
                  span.catalog-item__btn Подробнее
              .masonry__col
                router-link.catalog-item.catalog-item_ll-blue(to="in-dev")
                  h2.catalog-item__name Желазобетонные <br>изделия для<br> энргетики
                  span.catalog-item__btn Подробнее
            .masonry__row
              router-link.catalog-item.catalog-item_llll-blue(to="in-dev")
                h2.catalog-item__name Жесткие и&nbsp;гибкие <br>анкерные линии
                span.catalog-item__btn Подробнее
          .masonry__col
            .masonry__row
              router-link.catalog-item.catalog-item_ll-blue(to="in-dev")
                h2.catalog-item__name Металлические <br>изделия для <br>железобетонных <br>опор ЛЭП
                span.catalog-item__btn Подробнее
            .masonry__row
              router-link.catalog-item.catalog-item_ll-blue(to="in-dev")
                h2.catalog-item__name Решетчатый <br>настил
                span.catalog-item__btn Подробнее

</template>

<script>
  import Breadcrumbs from '../../components/UI/Breadcrumbs';
  export default {
    name: 'Elektricheskaya-set',
    components: { Breadcrumbs },
    head () {
      return {
        title: 'Электрическая сеть | ГлобалЭнергоХолдинг'
      }
    },
    data () {
      return {
        title: 'Электрическая сеть'
      }
    }
  }
</script>
