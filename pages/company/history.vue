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
            p В&nbsp;основе деятельности &laquo;ГЛОБАЛЭНЕРГОХОЛДИНГ&raquo; лежит фундаментальная для нас концепция, которая базируется на&nbsp;принципах коммерческой деятельности и&nbsp;нашем опыте, что служит основой нашего продвижения вперед. В&nbsp;основе указанной концепции лежат такие ценности как:
            ul.main-block__list
              li
                strong Честность и&nbsp;порядочность.<br>
                | Мы&nbsp;дорожим доверием наших партнеров, соблюдаем все требования закона и&nbsp;основываем на&nbsp;этом всю нашу деятельность.
              li
                strong Ориентированность на&nbsp;клиента.<br>
                | Мы&nbsp;учитываем потребности наших клиентов не&nbsp;просто для того чтобы удовлетворять их&nbsp;требования. Мы&nbsp;стремимся к&nbsp;пониманию глубинных потребностей наших клиентов, чтобы быть уверенными в&nbsp;том, что мы&nbsp;предлагаем по-настоящему работающие решения.
              li
                strong Опыт и&nbsp;личная ответственность.<br>
                | Люди являются ключом нашего успеха.<br>
                | Мы&nbsp;с&nbsp;уважением относимся друг к&nbsp;другу и&nbsp;ожидаем, что все наши сотрудники будут руководствоваться чувством личной ответственности. У&nbsp;нас работают компетентные и&nbsp;опытные сотрудники, обладающие знаниями и&nbsp;умениями самых лучших специалистов топливно-энергетической отрасли, которым мы&nbsp;предоставляем возможность постоянно улучшать показатели уровня квалификации, развиваем компетентность во&nbsp;всех аспектах их&nbsp;работы, используя личностные и&nbsp;профессиональные тренинги и&nbsp;семинары.
          aside.main-block__menu
    article.c-block
      .c-wrap
        section.flex-row.flex-row_valign-center
          .col-6.col-md-4.col-sm-12
            img(src="/img/about-1.jpg")
          .col-6.col-md-8.col-sm-12.col-sm-order-1
            .c-block__txt
              p Мы&nbsp;дорожим доверием наших партнеров, которое основывается на&nbsp;общепринятых мировых стандартах ведения бизнеса. Грамотная навигация и&nbsp;техническое консультационное сопровождение сделки с&nbsp;нашей стороны позволит Вам оценить предоставляемые сервисные услуги высочайшего качества.
        section.flex-row.flex-row_valign-center
          .col-6.col-md-8.col-sm-12
            .c-block__txt.c-block__txt_first
              p &laquo;ГЛОБАЛЭНЕРГОХОЛДИНГ&raquo; придерживается долгосрочной перспективы развития бизнеса и&nbsp;находится в&nbsp;постоянном поиске единомышленников и&nbsp;заинтересованных лиц, руководствующихся твердыми убеждениями, которые помогли&nbsp;бы нам повысить эффективность работы на&nbsp;этих ключевых направлениях.
          .col-6.col-md-4.col-sm-12
            img(src="/img/about-2.jpg")
        section.flex-row.flex-row_valign-center
          .col-6.col-md-4.col-sm-12
            img(src="/img/about-3.jpg")
          .col-6.col-md-8.col-sm-12.col-sm-order-1
            .c-block__txt
              p Используя новые технологии и&nbsp;оценивая каждую мельчайшую деталь как основу создания общего полотна, мы&nbsp;задаем высокие стандарты промышленной отрасли на&nbsp;благо наших партнеров и&nbsp;экономики России.
    TheFooter
</template>

<script>
  import CompanyMenu from '../../components/blocks/CompanyMenu';
  import Breadcrumbs from '../../components/UI/Breadcrumbs';
  import TheHeader from '../../components/TheHeader';
  import TheFooter from '../../components/TheFooter';
  export default {
    name: 'History',
    layout: 'empty',
    components: { TheFooter, TheHeader, Breadcrumbs, CompanyMenu },
    head () {
      return {
        title: 'ГлобалЭнергоХолдинг | История'
      }
    },
    data () {
      return {
        title: 'История'
      }
    }
  }
</script>
