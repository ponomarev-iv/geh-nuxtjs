<template>
  <div>
    <header class="header" ref="header">
      <TheHeader />
      <div class="header__menu">
        <HeaderNavigation />
      </div>
    </header>
    <nuxt/>
  </div>
</template>

<script>
  import TheHeader from '../components/TheHeader';
  import HeaderNavigation from '../components/HeaderNavigation';
  export default {
    components: { HeaderNavigation, TheHeader },
    mounted () {
      this.animateHeader()
    },
    methods: {
      animateHeader () {
        this.$refs.header.classList.add('is-show')
      }
    }
  }
</script>
