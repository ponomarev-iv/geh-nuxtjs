<template lang="pug">
  .filialy-map
    .filialy-map__all(id="filial-all")
    .filialy-map__filial.filialy-map__filial_privolg(:class="{'is-view': filialActive === 'privolg'}")
      span Приволжский федеральный округ
    .filialy-map__filial.filialy-map__filial_ural(:class="{'is-view': filialActive === 'ural'}")
      span Уральский федеральный округ
    .filialy-map__filial.filialy-map__filial_vost(:class="{'is-view': filialActive === 'vost'}")
      span Дальневосточный федеральный округ
    .filialy-map__filial.filialy-map__filial_sibir(:class="{'is-view': filialActive === 'sibir'}")
      span Сибирский федеральный округ
</template>

<script>
  export default {
    name: 'FilialMap',
    computed: {
      filialActive () {
        return this.$store.state.filialActive
      }
    }
  }
</script>
<style scoped lang="scss">
  .filialy-map{
    &__filial_sibir{
      right: 27.32%;
      top: 23.2%;
    }

    &__filial_vost{
      right: 1%;
    }

    &__filial_ural{
      left: 24.4%;
    }

    &__filial_privolg{
      left: 13.85%;
    }
  }
</style>
