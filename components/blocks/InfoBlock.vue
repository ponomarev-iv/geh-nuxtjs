<template lang="pug">
  .info-block
    .info-block__col
      p.adres
        span Адрес:&nbsp;
        | 614007, г. Пермь, ул. Николая Островского, д.&nbsp;59/1, строение БЦ &laquo;Парус&raquo;, 13&nbsp;этаж&nbsp;
        a(href="#").adres__link На карте
      p.adres
        span Телефон/факс:&nbsp;
        a(href="tel:+73422482444") +7(342) 248-24-44,&nbsp;
        a(href="tel:+78004443940") +7(800) 444-39-40
      p.adres
        span Email:&nbsp;
        a(href="mailto:info@globalenergoholding.com") info@globalenergoholding.com
    .info-block__col.info-block__col_sm
      .flex-row
        p.adres
          span Режим работы:
        ul.job-time
          li
          li
          li
          li
          li
          li.job-time__free
          li.job-time__free
      p.adres понедельник-пятница
      p.adres 9:00 до 18:00 (без обеда)
</template>

<script>
  export default {
    name: 'InfoBlock'
  }
</script>
