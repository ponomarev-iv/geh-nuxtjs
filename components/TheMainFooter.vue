<template lang="pug">
  footer.main-footer.main-footer_fixed(ref="foot")
    .c-wrap
      .main-footer__nav
        router-link.main-footer__link(to="in-dev") Оставить заявку
        router-link.main-footer__link(to="in-dev") Заказать звонок
        router-link.main-footer__link(to="in-dev") Презентация
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
