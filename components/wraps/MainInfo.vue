<template lang="pug">
  .hero__info(:class="{'is-show': isShow}")
    section.hero__info-block
      .flex-row
        InfoItem(
          v-for="item in advantage"
          :key="item.id"
          :info="item"
          )
    section.hero__tile-block
      .flex-row
        HeroTile(
          v-for="(item, index) in direction"
          v-if="index < 4"
          :key="item.id"
          :info="item"
        )
      a.hero__more-link(href="/") Смотреть все продукты и&nbsp;услуги
</template>

<script>
  import InfoItem from '../blocks/InfoItem';
  import HeroTile from '../blocks/HeroTile';
  const arrInfo = [
    { id: 1, text: 'Серийное производство металлоконструкций разного назначения', img: '/img/info-1.svg' },
    { id: 2, text: 'Информирование клиента на&nbsp;всех этапах работы', img: '/img/info-2.svg' },
    { id: 3, text: 'Оптимальные сроки выполнения заказов', img: '/img/info-5.svg' },
    { id: 4, text: 'Ассортимент реализуемой нами продукции более 30&nbsp;000 наименований', img: '/img/info-4.svg' },
    { id: 5, text: 'Аттестация и&nbsp;аккредитация поставляемой продукции в&nbsp;ПАО «Россети», ПАО «Газпром» и&nbsp;др.', img: '/img/info-6.svg' },
    { id: 6, text: 'Эффективная система логистики', img: '/img/info-7.svg' },
    { id: 7, text: 'Возможность выполнить комплектацию объектов любой сложности под ключ', img: '/img/info-3.svg' },
    { id: 8, text: 'Выгодные условия оплаты (отсрочка, факторинг)', img: '/img/info-8.svg' }
  ];
  const arrDirection = [
    { id: 1, text: 'Кабеленесущие <br />системы', src: '/' },
    { id: 2, text: 'Вышки и&nbsp;опоры сотовой связи', src: '/' },
    { id: 3, text: 'Мачты освещения и&nbsp;молниеотводы', src: '/' },
    { id: 4, text: 'Закладные детали фундаментов', src: '/' },
    { id: 5, text: 'Плазменная резка металла и&nbsp;труб', src: '/' },
    { id: 6, text: 'Изготовление <br />КМД чертежей', src: '/' },
    { id: 7, text: 'Погрузочно-<br />разгрузочные работы', src: '/' },
    { id: 8, text: 'Складские <br />услуги', src: '/' }
  ];

  export default {
    name: 'MainInfo',
    components: { HeroTile, InfoItem },
    props: {
      isShow: Boolean
    },
    data () {
      return {
        advantage: arrInfo,
        direction: arrDirection
      }
    }
  }
</script>
