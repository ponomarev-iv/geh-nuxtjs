<template lang="pug">
  div.m-page(@wheel="handlerWheel")
    .m-page__bg
    video(playsinline autoplay muted pip="false" data-play="0" loop)
      source#channel(src="/video/002.mp4" type="video/mp4")
    .fade-video
    //main.hero
    //  .c-wrap
    //    MainInfo(:isShow="showScreen")
    //  ul.hero__pagination.js-pag
    //    li.hero__pag-item(
    //      :class="{'is-active': !showScreen}"
    //      @click="handlerClick"
    //      )
    //    li.hero__pag-item(
    //      :class="{'is-active': showScreen}"
    //      @click="handlerClick"
    //      )
</template>

<script>
import MainInfo from '../components/wraps/MainInfo';
export default {
  components: { MainInfo },
  head () {
    return {
      title: 'ГлобалЭнергоХолдинг | Главная страница'
    }
  },
  data () {
    return {
      showScreen: false
    }
  },
  methods: {
    handlerWheel (event) {
      this.showScreen = event.deltaY > 0;
    },
    handlerClick () {
      this.showScreen = !this.showScreen
    }
  }
}
</script>
