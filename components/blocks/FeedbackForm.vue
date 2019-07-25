<template lang="pug">
  form.feedback-form.form
    h3.form__title Написать генеральному директору
    .form__row
      label.lbl(for="name") Представьтесь, пожалуйста
      input.inp(type="text" placeholder="Ваше ФИО" id="name" name="name")
    .form__row
      label.lbl(for="phone") Номер телефона
      .rel-block
        span.prefix +7
        input.inp.inp_prefix(type="tel" placeholder="" id="phone" name="phone")
    .form__row
      label.lbl(for="email") Адрес электронной почты
      input.inp(type="email" placeholder="E-mail" id="email" name="email")
    .form__row
      textarea.inp.inp_text(placeholder="Ваше сообщение..." rows="3")
    .form__row
      button.form__btn(type="submit") Отправить
</template>

<script>
  // TODO: сделать маску для телефона
  export default {
    name: 'FeedbackForm'
  }
</script>
