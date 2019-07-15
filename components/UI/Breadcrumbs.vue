<template lang="pug">
  .breadcrumbs
    router-link.breadcrumbs__item(to="/") Главная
    router-link.breadcrumbs__item(
      v-for="item in folder"
      :key="item.id"
      :to="item.link"
      ) {{ item.title }}
    span.breadcrumbs__item.current {{ current }}
</template>

<script>
  export default {
    name: 'Breadcrumbs',
    props: {
      current: String,
      folder: Array
    }
  }
</script>
