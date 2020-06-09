<template lang="pug">
  picture
    .zoom-bg(v-if="zoom" :class="imgClass" :style="imgStyle")
      .zoom-bg__wrap
        img(
          v-lazy="`/img/${img}.${imgType}`"
          :alt="imgAlt"
        )
        .zoom-bg__content
          img(v-lazy="`/img/${zoom.icon}`" :alt="zoom.title").zoom-bg__icon
          h3.zoom-bg__title {{ zoom.title }}
          img.hide-img(
            :src="`/img/blagotv-big.png`"
            v-img)
    img(
      v-else
      v-lazy="`/img/${img}.${imgType}`"
      :data-srcset="retinaImg"
      :class="imgClass"
      :alt="imgAlt"
      :style="imgStyle"
    )
</template>

<script>
  export default {
    name: 'Picture',
    props: {
      img: {
        type: String,
        default: ''
      },
      imgType: {
        type: String,
        default: 'png'
      },
      imgClass: {
        type: String,
        default: ''
      },
      imgAlt: {
        type: String,
        default: ''
      },
      imgStyle: {
        type: String,
        default: ''
      },
      isRetina: {
        type: Boolean,
        default: false
      },
      zoom: {
        type: Object,
        default: () => {}
      }
    },
    computed: {
      retinaImg () {
        return (this.isRetina)
          ? `/img/${this.img}.${this.imgType}, /img/${this.img}@2x.${this.imgType} 2x`
          : ``
      }
    }
  }
</script>
