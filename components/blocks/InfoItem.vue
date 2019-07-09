<template lang="pug">
  article.info-item
    img.info-item__icon(:src="info.img")
    p.info-item__txt(v-html="info.text")
</template>

<script>
  export default {
    name: 'InfoItem',
    props: {
      info: Object
    }
  }
</script>
