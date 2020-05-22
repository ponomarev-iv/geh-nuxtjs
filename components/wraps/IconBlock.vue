<template lang="pug">
   .ico-block(:class="{'ico-block_step': step}")
    .ico-block__icon(:class="iconClass")
      template(v-if="step")
        span {{ item.id }}
      template(v-else)
        img(v-lazy="item.icon")
    .ico-block__wrap
      template(v-if="step")
        .ico-block__step Шаг {{ item.id }}
        .ico-block__text(v-html="item.txt")
      template(v-else)
        .ico-block__text(v-html="item.txt")
</template>

<script>
  export default {
    name: 'IconBlock',
    props: {
      item: {
        type: Object,
        default: () => {}
      },
      step: {
        type: Boolean,
        default: false
      },
      iconClass: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/ico-block";
</style>
