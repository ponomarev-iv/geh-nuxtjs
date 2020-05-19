<template lang="pug">
  nuxt-link.link-download(:to="`/doc/${link.url}`")
    svg.link-download__icon(xmlns='http://www.w3.org/2000/svg', width='100%', height='100%')
      use(xlink:href='/img/svg-lib.svg#ico-download')
    .link-download__text
      span(v-html="link.text")
      span.link-download__notes {{ link.notes }}
</template>

<script>
  export default {
    name: 'LinkDonwload',
    props: {
      link: {
        type: Object,
        default: () => {}
      }
    }
  }
</script>

<style lang="scss" src="./assets/_link-download.scss" scoped></style>
