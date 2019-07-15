<template lang="pug">
  router-link.header__logo(to="/")
    slot

</template>

<script>
  export default {
    name: 'CompanyLogo'
  }
</script>
