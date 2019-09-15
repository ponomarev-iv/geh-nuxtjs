<template lang="pug">
   .ico-block(:class="{'ico-block_step': step}")
    .ico-block__icon
      template(v-if="step")
        span {{ item.id }}
      template(v-else)
        img(:src="item.icon")
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
      item: Object,
      step: Boolean
    }
  }
</script>

<style lang="scss">
  @import "../../assets/ico-block";
</style>
