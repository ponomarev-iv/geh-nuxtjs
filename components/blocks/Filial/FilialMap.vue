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
