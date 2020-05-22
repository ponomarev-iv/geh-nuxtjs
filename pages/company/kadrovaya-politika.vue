<template lang="pug">
  div
    TheHeader(:white="true" :activeClass="'company'")
    .second-menu
      .c-wrap
        CompanyMenu(:activeClass="'company'" :inHeader="true")
    main.main-block.structura
      .c-wrap
        Breadcrumbs(
          :folder="[{id: 0, title: 'Компания', link: '/company/about'}]"
          :current="title"
        )
        h1.section-title {{ title }}
      .pp
        .c-wrap
          h2.pp__title Принципы управления персоналом
          .pp__wrap
            article.pp__content
              p.pp__par Система управления персоналом в&nbsp;АО&nbsp;&laquo;ГлобалЭнергоХолдинг&raquo; строится на&nbsp;принципах взаимной ответственности предприятия в&nbsp;сфере трудовых отношений и&nbsp;самих сотрудников за&nbsp;вклад в&nbsp;развитие предприятия. Вместе мы&nbsp;строим эффективную и&nbsp;динамичную команду, которая готова постоянно развиваться.
              p.pp__par Основным документом, определяющим стратегию развития и&nbsp;принципы работы в&nbsp;АО&nbsp;&laquo;ГлобалЭнергоХолдинг&raquo; является Политика управления персоналом.
              .pp-info-block
                h3.pp-info-block__title
                  | Основные принципы, на&nbsp;которых базируется
                  br
                  | Политика управления персоналом
                IconBlock(v-for="icon in iconsSet1" :key="icon.id" :item="icon")
              h3.pp__title Развитие и обучение персонала
              p.pp__par АО&nbsp;&laquo;ГлобалЭнергоХолдинг&raquo; высоко ценит профессионализм и&nbsp;компетентность своих сотрудников. Поэтому уделяет большое внимание развитию и&nbsp;обучению персонала.
              p.pp__par Ежегодно более&nbsp;75% от&nbsp;численности всего персонала компании проходят обучение по&nbsp;различным программам повышения квалификации, участвуют в&nbsp;семинарах и&nbsp;тренингах.
              p.pp__par АО&nbsp;&laquo;ГлобалЭнергоХолдинг&raquo; имеет свою учебную территорию, где мы&nbsp;можем проводить обучение и&nbsp;обмен опытом силами своих специалистов, а&nbsp;также приглашать сторонних тренеров.
              section.pp-info
                p.pp-info__txt В&nbsp;АО&nbsp;&laquo;ГлобалЭнергоХолдинг&raquo; на&nbsp;базе современных портальных технологий активно развивается Корпоративная система управления знаниями в&nbsp;целях обеспечения обмена профессиональным опытом и&nbsp;знаниями как между работниками, так и&nbsp;между партнерами предприятия.
              p.pp__par В&nbsp;компании развита система дистанционного обучения с&nbsp;использованием корпоративного портала, к&nbsp;которому подключены все сотрудники предприятия. На&nbsp;портале содержатся более 125&nbsp;учебных курсов. Благодаря возможностям корпоративного портала обеспечено обучение и&nbsp;повышение квалификации специалистов компании. Сотрудники имеют возможность обучаться в&nbsp;удобное время, в&nbsp;том числе с&nbsp;личных компьютеров.
          Picture(
            :img="'pp-img-1'"
            :imgClass="'pp__img'"
            :imgStyle="'top:-9rem; max-width: 39vw;'"
          )
      .pp
        .c-wrap
          h2.pp__title Cистема мотивации и&nbsp;оплаты труда
          .pp__wrap
            article.pp__content
              p.pp__par Заработная плата в&nbsp;АО&nbsp;&laquo;ГлобалЭнергоХолдинг&raquo; состоит из&nbsp;окладной части и&nbsp;стимулирующих выплат. Выплачивается заработная согласно Трудовому Кодексу РФ&nbsp;два раза в&nbsp;месяц.
              p.pp__par Величина окладной части заработной платы зависит от&nbsp;выполняемых обязанностей, cложности решаемых задач, уровня ответственности и&nbsp;устанавливается для каждого работника с&nbsp;учетом его квалификации.
              .pp-info-block
                h3.pp-info-block__title
                  | Стимулирующие выплаты включают в&nbsp;себя
                IconBlock(v-for="icon in iconsSet2" :key="icon.id" :item="icon")
              p.pp__par Переменная часть вознаграждения состоит из&nbsp;ежемесячных и&nbsp;долгосрочных премиальных выплат. Ежемесячные премиальные выплаты производятся при достижении установленных показателей деятельности за&nbsp;месяц, с&nbsp;учетом результативности каждого сотрудника.
              p.pp__par Система оплаты труда в&nbsp;АО&nbsp;&laquo;ГлобалЭнергоХолдинг&raquo; строится на&nbsp;принципах единства, прозрачности, объективности и&nbsp;конкурентоспособности заработной платы на&nbsp;рынке труда.
              p.pp__par Постоянный мониторинг рынка труда позволяет своевременно реагировать на&nbsp;изменения размера заработной платы в&nbsp;регионах присутствия с&nbsp;тем, чтобы обеспечить ее&nbsp;конкурентоспособный уровень.
        Picture(
          :img="'pp-img-2'"
          :imgClass="'pp__img'"
          :imgStyle="'top:4rem; max-width: 39vw;'"
        )
      .pp(style='padding-bottom:20vw')
        .c-wrap
          h2.pp__title.pp__title_no-mrg Карьера
          .pp__wrap
            article.pp__content
              .pp-info-block.pp-info-block_step
                h3.pp-info-block__title
                  | Процесс подбора
                IconBlock(v-for="icon in iconsStep" :key="icon.id" :item="icon" :step="true")
              h3.pp__sec-title Секреты успеха
              p.pp__par Сотрудники&nbsp;&mdash; главная ценность нашей компании. Мы&nbsp;стремимся к&nbsp;тому, чтобы все позиции в&nbsp;компании занимали квалифицированные и&nbsp;компетентные специалисты.
              h4.pp__c-title У нас вы найдете
              ul.pp__list
                li Интересную работу
                li Дружный коллектив
                li Перспективы профессионального и&nbsp;карьерного роста
                li Конкурентную заработную плату
              p.pp__par Нам нужны люди, владеющие современными знаниями и технологиями, инициативные, амбициозные, готовые нести ответственность за результаты своей работы.
              h4.pp__c-title В&nbsp;наших сотрудниках мы ценим
              ul.pp__list
                li Качество коммуникации (устная и&nbsp;письменная)
                li Готовность постоянно развиваться
                li Системное мышление
                li Ответственность за&nbsp;результат
              p.pp__par В&nbsp;зависимости от&nbsp;должности для кандидатов устанавливаются дополнительные требования к&nbsp;опыту работы и&nbsp;образованию.
            aside.pp__aside
              form.pp-form
                h3.pp-form__title
                  | Начните с&nbsp;первого шага,
                  | отправьте свое резюме!
                .pp-form__row
                  Input(
                    :inpId="'fio'"
                    :label="'Представьтесь, пожалуйста'"
                    :plh="'Ваше ФИО'")
                .pp-form__row
                  Input(
                    :inpId="'position'"
                    :label="'Желаемая должность'"
                    :plh="'Выберите должность'")
                .pp-form__row
                  Input(
                    :inpId="'phone'"
                    :label="'Ваш телефон'"
                    :plh="'Телефон'"
                    :type="'tel'")
                .pp-form__row
                  Input(
                    :inpId="'mail'"
                    :label="'Ваша электронная почта'"
                    :plh="'E-mail'"
                    :type="'email'")
                .pp-form__row
                  Upload(:label="'Прикрепить резюме'")
                .pp-form__row.pp-form__row_last
                  button.pp-form__btn Отправить

        Picture(
          :img="'pp-img-3'"
          :imgClass="'pp__img'"
          :imgStyle="'bottom:-5vh; right: -3.5vw; top: auto; max-width: 39vw;'"
        )
    TheFooter
</template>

<script>
  import Breadcrumbs from '../../components/UI/Breadcrumbs';
  import TheHeader from '../../components/TheHeader';
  import CompanyMenu from '../../components/blocks/CompanyMenu';
  import IconBlock from '../../components/wraps/IconBlock';
  import TheFooter from '../../components/TheFooter';
  import Input from '../../components/UI/Input';
  import Upload from '../../components/UI/Upload';
  import Picture from '../../components/UI/Picture';

  export default {
    name: 'Kadrovaya-politika',
    layout: 'empty',
    components: { Picture, Upload, Input, TheFooter, IconBlock, CompanyMenu, TheHeader, Breadcrumbs },
    head () {
      return {
        title: 'ГлобалЭнергоХолдинг | Кадровая политика'
      }
    },
    data () {
      return {
        title: 'Кадровая политика',
        iconsSet1: [
          {
            id: 0,
            icon: '/img/pp-ico-1.svg',
            txt: 'Мотивировать каждого сотрудника на&nbsp;достижение целей компании'
          },
          { id: 1, icon: '/img/pp-ico-2.svg', txt: 'Объективно оценивать вклад каждого сотрудника ' },
          {
            id: 2,
            icon: '/img/pp-ico-3.svg',
            txt: 'Справедливо вознаграждать и&nbsp;поощрять сотрудников за&nbsp;их достижения'
          }
        ],
        iconsSet2: [
          { id: 0, icon: '/img/pp-ico-4.svg', txt: 'Ежемесячные выплаты за&nbsp;выполнение производственных <br />показателей (KPI)' },
          { id: 1, icon: '/img/pp-ico-5.svg', txt: 'Ежемесячные премии по&nbsp;результату работы за&nbsp;отчетный период' },
          { id: 2, icon: '/img/pp-ico-6.svg', txt: 'Денежные вознаграждения за&nbsp;достижение определенных результатов' }
        ],
        iconsStep: [
          { id: 1, txt: 'Направить своё резюме' },
          { id: 2, txt: 'Пройти телефонное собеседование с&nbsp;HR-специалистом' },
          { id: 3, txt: 'Пройти личное собеседование с&nbsp;руководителем по&nbsp;направлению. <br>При необходимости пройти дополнительную оценку, предоставить <br>рекомендации с&nbsp;предыдущих мест' },
          { id: 4, txt: 'Получить приглашение на&nbsp;работу' }
        ]
      }
    }
  }
</script>
