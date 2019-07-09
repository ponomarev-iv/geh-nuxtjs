<template lang="pug">
  .hero__info(:class="{'is-show': isShow}")
    section.hero__info-block
      .flex-row
        article.info-item
          img.info-item__icon(src="/img/info-1.svg")
          p.info-item__txt Серийное производство металлоконструкций разного назначения
        article.info-item
          img.info-item__icon(src="/img/info-2.svg")
          p.info-item__txt Информирование клиента на&nbsp;всех этапах работы
        article.info-item
          img.info-item__icon(src="/img/info-5.svg")
          p.info-item__txt Оптимальные сроки выполнения заказов
        article.info-item
          img.info-item__icon(src="/img/info-4.svg")
          p.info-item__txt Ассортимент реализуемой нами продукции более 30&nbsp;000 наименований
        article.info-item
          img.info-item__icon(src="/img/info-6.svg")
          p.info-item__txt Аттестация и&nbsp;аккредитация поставляемой продукции в&nbsp;ПАО &laquo;Россети&raquo;, ПАО &laquo;Газпром&raquo; и&nbsp;др.
        article.info-item
          img.info-item__icon(src="/img/info-7.svg")
          p.info-item__txt Эффективная система логистики
        article.info-item
          img.info-item__icon(src="/img/info-3.svg")
          p.info-item__txt Возможность выполнить комплектацию объектов любой сложности под ключ
        article.info-item
          img.info-item__icon(src="/img/info-8.svg")
          p.info-item__txt Выгодные условия оплаты (отсрочка, факторинг)
    section.hero__tile-block
      .flex-row
        a(href="#").hero__tile
          h3 Кабеленесущие <br>системы
          .hero__tile-btn Подробнее
        a(href="#").hero__tile
          h3 Вышки и&nbsp;опоры <br>сотовой связи
          span.hero__tile-btn Подробнее
        a(href="#").hero__tile
          h3 Мачты освещения <br>и&nbsp;молниеотводы
          span.hero__tile-btn Подробнее
        a(href="#").hero__tile
          h3 Закладные детали <br>фундаментов
          span.hero__tile-btn Подробнее
      .flex-row.hide-min-h
        a(href="#").hero__tile
          h3 Плазменная резка <br>металла и&nbsp;труб
          span.hero__tile-btn Подробнее
        a(href="#").hero__tile
          h3 Изготовление <br>КМД чертежей
          span.hero__tile-btn Подробнее
        a(href="#").hero__tile
          h3 Погрузочно-<br>разгрузочные работы
          span.hero__tile-btn Подробнее
        a(href="#").hero__tile
          h3 Складские <br>услуги
          span.hero__tile-btn Подробнее
      a.hero__more-link(href="coming-soon.html") Смотреть все продукты и услуги
</template>

<script>
  export default {
    name: 'MainInfo',
    props: {
      isShow: Boolean
    }
  }
</script>
