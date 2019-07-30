<template lang="pug">
  div
    video(playsinline autoplay muted pip="false" data-play="0" loop)
      source#channel(src="/video/002.mp4" type="video/mp4")
    .fade-video.dark
    main.hero
      section.c-wrap
        form.c-form
          router-link(to="/").close-btn
          .c-form__group
            h1.c-form__title Войти в&nbsp;личный кабинет
            .c-form__row
              label.f-lbl Номер вашего договора
              input.f-inp(placeholder="№")
            .c-form__row
              label.f-lbl Пароль
              input.f-inp(placeholder="Пароль можно найти на бланке с договором")
            .c-form__row.btn-block
              button(type="submit").f-btn Войти
              a(href="#").f-link Восстановить доступ в&nbsp;кабинет

</template>

<script>
  export default {
    name: 'index'
  }
</script>
