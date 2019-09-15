<template lang="pug">
  .upload
    template(v-if="file")
      .upload__file
        img(src="/img/ico-remove.svg" @click.prevent="handlerRemoveFile")
        p.upload__txt {{ file.name }}
    template(v-else)
      label.upload__lbl(for="upload")
        img(src="/img/ico-add.svg")
        | {{ label }}
    input.upload__inp#upload(
      type="file"
      ref="file"
      @change="handlerFileUpload()")
</template>

<script>
  export default {
    name: 'Upload',
    props: {
      label: String
    },
    data () {
      return {
        file: ''
      }
    },
    methods: {
      handlerFileUpload () {
        this.file = this.$refs.file.files[0];
      },
      handlerRemoveFile () {
        this.file = ''
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/upload";
</style>
