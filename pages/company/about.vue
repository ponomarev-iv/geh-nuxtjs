<template lang="pug">
  div.wrapper
    TheHeader(:white="true" :activeClass="'company'")
    .second-menu
      .c-wrap
        CompanyMenu(:inHeader="true")
    main.main-block
      .c-wrap
        .flex-row
          article.main-block__txt
            Breadcrumbs(
              :folder="[{id: 0, title: 'Компания', link: '/company/about'}]"
              :current="title"
              )

            h1.section-title {{ title }}
            p &laquo;ГЛОБАЛЭНЕРГОХОЛДИНГ&raquo;&nbsp;&mdash; одно из&nbsp;ведущих российских предприятий, предоставляющих комплексные индивидуальные решения в&nbsp;сфере оптимизации закупочной деятельности для промышленных и&nbsp;высокотехнологичных инфраструктурных объектов.
            p Одной из&nbsp;основных целей деятельности &laquo;ГЛОБАЛЭНЕРГОХОЛДИНГ&raquo; является благополучие партнеров предприятия. Наше стремление развивать долгосрочные взаимовыгодные отношения&nbsp;&mdash; является гарантией надежного и&nbsp;честного сотрудничества.
            p &laquo;ГЛОБАЛЭНЕРГОХОЛДИНГ&raquo; работает на&nbsp;рынке не&nbsp;так давно, но&nbsp;опыт наших сотрудников в&nbsp;данной отрасли более 10&nbsp;лет. Сотрудничая с&nbsp;нами, Вы&nbsp;получаете знания и&nbsp;мастерство лучших специалистов, не&nbsp;переплачивая за&nbsp;громкое имя.
          aside.main-block__menu
    article.c-block
      .c-wrap
        section.flex-row.flex-row_valign-center
          .col-6.col-md-4.col-sm-12
            img(src="/img/about-1.jpg")
          .col-6.col-md-8.col-sm-12.col-sm-order-1
            .c-block__txt
              p Приоритетными направлением работы предприятия является изготовление металлоконструкций и&nbsp;комплексные решения в&nbsp;сфере оптимизации закупочной деятельности для промышленных и&nbsp;высокотехнологичных инфраструктурных объектов, которые включают в&nbsp;себя решения по&nbsp;любым направлениям деятельности в&nbsp;топливно-энергетической отрасли.
        section.flex-row.flex-row_valign-center
          .col-6.col-md-8.col-sm-12
            .c-block__txt.c-block__txt_first
              p Основными критериями ведения бизнеса предприятия является прозрачность всех организационных процессов. Это гарантирует профессиональное управление операционными рисками и&nbsp;полное исключение необоснованных расходов. Мы&nbsp;предоставляем индивидуальные решения в&nbsp;сфере оптимизации закупочной деятельности, что позволит Вам экономить денежные средства без потери качества поставляемой продукции. Сотрудничая с&nbsp;&laquo;ГЛОБАЛЭНЕРГОХОЛДИНГ&raquo;, вы&nbsp;можете быть абсолютно уверены в&nbsp;безопасности сделки, так как мы&nbsp;несем полную юридическую и&nbsp;финансовую ответственность за&nbsp;каждый пункт контракта.
          .col-6.col-md-4.col-sm-12
            img(src="/img/about-2.jpg")
        section.flex-row.flex-row_valign-center
          .col-6.col-md-4.col-sm-12
            img(src="/img/about-3.jpg")
          .col-6.col-md-8.col-sm-12.col-sm-order-1
            .c-block__txt
              p На&nbsp;сегодняшний день нашему предприятию удалось объединить множество динамично развивающихся рынков, что позволило выстроить уникальные и&nbsp;максимально продуктивные отношения с&nbsp;крупными промышленными предприятиями, включая ведущих отечественных и&nbsp;зарубежных партнеров. География наших партнеров распространяется по&nbsp;всей территории страны и&nbsp;за&nbsp;ее&nbsp;пределами, что позволяет оптимально и&nbsp;быстро, а&nbsp;главное выгодно с&nbsp;экономической точки зрения решать задачи наших клиентов.
    article.concluding
      .c-wrap
        p Применяя новые технологии и&nbsp;имеющийся опыт, мы&nbsp;задаем высокие стандарты ведения бизнеса промышленной отрасли, которые без сомнения оказывают благоприятные воздействия на&nbsp;наших партнеров и&nbsp;экономику России в&nbsp;целом.
    TheFooter
</template>

<script>
  import Breadcrumbs from '../../components/UI/Breadcrumbs';
  import CompanyMenu from '../../components/blocks/CompanyMenu';
  import TheHeader from '../../components/TheHeader';
  import TheFooter from '../../components/TheFooter';
  export default {
    name: 'About',
    layout: 'empty',
    components: { TheFooter, TheHeader, CompanyMenu, Breadcrumbs },
    head () {
      return {
        title: 'ГлобалЭнергоХолдинг | О компании'
      }
    },
    data () {
      return {
        title: 'О компании'
      }
    }
  }
</script>
