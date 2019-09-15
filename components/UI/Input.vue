<template lang="pug">
  .input
    label.input__label(:for="inpId") {{ label }}
    input.input__item(:placeholder="plh" v-model="val" type="" :id="inpId")
</template>

<script>
  export default {
    name: 'Input',
    props: {
      type: {
        type: String,
        default: 'text'
      },
      plh: String,
      label: String,
      inpId: String
    },
    data () {
      return {
        val: ''
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/input";
</style>
