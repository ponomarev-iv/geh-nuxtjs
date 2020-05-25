<template lang="pug">
  .lbl-block
    h3.lbl-block__label {{ item.label }}
    p.lbl-block__text(v-html="item.text")
</template>

<script>
  export default {
    name: 'LblBlock',
    props: {
      item: {
        type: Object,
        default: () => {}
      }
    }
  }
</script>

<style lang="scss" src="./assets/_lbl-block.scss"></style>
