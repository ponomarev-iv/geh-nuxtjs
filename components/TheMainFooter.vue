<template lang="pug">
  footer.main-footer.main-footer_fixed(ref="foot")
    .c-wrap
      .main-footer__nav
        a.main-footer__link(href="mailto:sale@globalenergoholding.com")
          | Оставить заявку
        // a.main-footer__link(href="/doc/referens-list-ao-globalehnergoholding.pdf") Референс-лист
        // a.main-footer__link(href="/doc/kp-ao-globalehnergoholding.pdf") Презентация
      .main-footer__rigth-col.soc-link
        a.soc-link__item.soc-link__item_vk(href="#" target="_blank")
        a.soc-link__item.soc-link__item_fb(href="#" target="_blank")
        a.soc-link__item.soc-link__item_insta(href="#" target="_blank")
        a.soc-link__item.soc-link__item_youtube(href="#" target="_blank")
        a.soc-link__item.soc-link__item_classmate(href="#" target="_blank")
</template>

<script>
  export default {
    name: 'TheMainFooter',
    mounted () {
      this.animate()
    },
    methods: {
      animate () {
        this.$refs.foot.classList.add('is-show');
      }
    }
  }
</script>
<style lang="scss" scoped>
  .main-footer{
    @media screen and (max-width: 767px) {
      padding: 1.25rem 0;

      & .c-wrap{
        flex-direction: column;
        align-items: stretch;
      }

      &__rigth-col{
        flex: 0 0 100%;
        margin: 1rem 0 0;
        justify-content: space-between;
      }
    }
  }
</style>
