<template lang="pug">
  .filialy
    .filialy__item.js-filial(
      @mouseover="hover('privolg')"
      @mouseleave="hover('')"
      )
      span Приволжский федеральный округ
    .filialy__item.js-filial(
      @mouseover="hover('sibir')"
      @mouseleave="hover('')"
      )
      span Сибирский федеральный округ
    .filialy__item.js-filial(
      @mouseover="hover('ural')"
      @mouseleave="hover('')"
      )
      span Уральский федеральный округ
    .filialy__item.js-filial(
      @mouseover="hover('dv')"
      @mouseleave="hover('')"
      )
      span Дальневосточный федеральный округ
</template>

<script>
  export default {
    name: 'FilialyItem',
    methods: {
      hover (el) {
        this.$store.dispatch('setFilial', el)
      }
    }
  }
</script>
