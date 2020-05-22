<template lang="pug">
  picture
    img(
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
