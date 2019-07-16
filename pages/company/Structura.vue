<template lang="pug">
  div
    .header-wrap.header-wrap_company
      .title-block
    main.main-block.structura
      .c-wrap
        .flex-row
          article.main-block__txt
            Breadcrumbs(
              :folder="[{id: 0, title: 'Компания', link: '/company/about'}]"
              :current="title"
            )
            h2.section-title {{ title }}
            p АО&nbsp;&laquo;ГлобалЭнергоХолдинг&raquo;&nbsp;&mdash; одно из&nbsp;ведущих российских предприятий предоставляющих комплексные индивидуальные решения в&nbsp;сфере оптимизации закупочной деятельности и&nbsp;профессиональных поставок для промышленных и&nbsp;высокотехнологичных инфраструктурных объектов.
            p Одной из&nbsp;основных целей деятельности АО&nbsp;&laquo;ГлобалЭнергоХолдинг&raquo; является благополучие акционеров и&nbsp;партнеров предприятия. Наше стремление развивать долгосрочные взаимовыгодные отношения&nbsp;&mdash; является гарантией надежного и&nbsp;честного сотрудничества.
            p АО&nbsp;&laquo;ГлобалЭнергоХолдинг&raquo; работает на&nbsp;рынке не&nbsp;так давно, но&nbsp;опыт наших сотрудников в&nbsp;данной отрасли более 10&nbsp;лет. Сотрудничая с&nbsp;нами, Вы&nbsp;получаете знания и&nbsp;мастерство лучших специалистов, не&nbsp;переплачивая за&nbsp;громкое имя.
          CompanyMenu
    article.c-block.structura
      .c-wrap
        img(src="/img/structura.jpg")
</template>

<script>
  import CompanyMenu from '../../components/blocks/CompanyMenu';
  import Breadcrumbs from '../../components/UI/Breadcrumbs';
  export default {
    name: 'Structura',
    components: { Breadcrumbs, CompanyMenu },
    head () {
      return {
        title: 'ГлобалЭнергоХолдинг | Структура компании'
      }
    },
    data () {
      return {
        title: 'Структура компании'
      }
    }
  }
</script>
