<template lang="pug">
  router-link(:to="info.src").hero__tile
    h3(v-html="info.text")
    .hero__tile-btn Подробнее
</template>

<script>
  export default {
    name: 'HeroTile',
    props: {
      info: Object
    }
  }
</script>
