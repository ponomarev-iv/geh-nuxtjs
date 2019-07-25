<template lang="pug">
  .map
    no-ssr
      l-map(
        :zoom="zoom"
        :center="center"
      )
        l-marker(:lat-lng="marker")
</template>

<script>
  import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

  export default {
    name: 'MapLeaflet',
    components: {
      LMap,
      LTileLayer,
      LMarker
    },
    data () {
      return {
        zoom: 13,
        center: [47.413220, -1.219482],
        marker: [47.413220, -1.219482]
      }
    }
  }
</script>
