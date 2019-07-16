<template lang="pug">
  .info-block
    .info-block__col
      p.adres
        span Адрес:&nbsp;
        | 614015, г. Пермь,  ул. Екатерининская, д. 120, 1 этаж&nbsp;
        a(href="#").adres__link На карте
      p.adres
        span Телефон/факс:&nbsp;
        a(href="tel:+73422008595") +7 (342) 200 85 95,&nbsp;
        a(href="tel:+78005502259") 8 800 550 22 59
      p.adres
        span Email:&nbsp;
        a(href="mailto:info@globalenergoholding.ru") info@globalenergoholding.ru
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
