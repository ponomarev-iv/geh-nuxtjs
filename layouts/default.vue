<template>
  <div class="wrapper">
    <TheHeader />
    <nuxt/>
    <template v-if="isMainPage">
      <TheMainFooter />
    </template>
    <template v-else >
      <TheFooter />
    </template>
  </div>
</template>

<script>
  import TheHeader from '../components/TheHeader';
  import TheMainFooter from '../components/TheMainFooter';
  import TheFooter from '../components/TheFooter';
  export default {
    components: { TheFooter, TheMainFooter, TheHeader },
    computed: {
      isMainPage () {
        return (this.$route.name === 'index' || this.$route.path === '/cabinet')
      }
    }
  }
</script>
