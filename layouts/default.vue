<template>
  <div>
    <TheHeader />
    <nuxt/>
    <template v-if="isMainPage">
      <TheMainFooter />
    </template>
  </div>
</template>

<script>
  import TheHeader from '../components/TheHeader';
  import TheMainFooter from '../components/TheMainFooter';
  export default {
    components: { TheMainFooter, TheHeader },
    computed: {
      isMainPage () {
        return (this.$route.name === 'index')
      }
    }
  }
</script>
