<template lang="pug">
  div.wrapper
    TheHeader(:white="true" :activeClass="'company'")
    .second-menu
      .c-wrap
        CompanyMenu(:inSubMenu="true" :inHeader="true")
    .main-block.structura
      .c-wrap
        Breadcrumbs(
          :folder="[{id: 0, title: 'Компания', link: '/company/about'}]"
          :current="title"
        )
        h1.section-title.section-title_mrg-xl {{ title }}
      .pp
        .c-wrap
          .pp__wrap
            .pp__content.mb_xl
              p.pp__par
                | Благотворительная деятельность в&nbsp;современном мире&nbsp;&mdash; неотъемлемый элемент целого комплекса качеств нынешнего предпринимательства, его культуры.
              p.pp__par
                | &laquo;ГлобалЭнергоХолдинг&raquo; оказывает поддержку Фонду НБФПД &laquo;Дедморозим&raquo;. Фонд был учрежден в&nbsp;2012&nbsp;году, основной его целью является помощь и&nbsp;реабилитация детей с&nbsp;тяжелыми заболеваниями.
              p.pp__par
                | Можно спасти жизнь ребенка уже сегодня! Присоединяйтесь и&nbsp;Вы к&nbsp;совершению чудес!
              h2.pp__title.mt_xl
                | Некоммерческий благотворительный фонд помощи детям &laquo;Дедморозим&raquo;
              LblBlock(v-for="item in contactInfo" :item="item" :key="item.id")
              .pp-info-block.mt_xl
                h3.pp-info-block__title.mb_mid
                  | Благотворительный счет &laquo;Дедморозим&raquo;
                IconBlock(
                  v-for="item in iconSet.slice(0, 1)"
                  :item="item"
                  :iconClass="'ico-block__icon_top'"
                  :textClass="'ico-block__text_black'"
                  :key="item.id"
                )
                p.pp__par.mt_mid
                  | Некоммерческий благотворительный фонд помощи детям &laquo;Дедморозим&raquo;
                LblBlock.mt(v-for="item in schetInfo" :item="item" :key="item.id")
              .pp-info-block.mt_xl
                h3.pp-info-block__title.mb_mid
                  | Административный счет &laquo;Дедморозим&raquo;
                IconBlock(
                  v-for="item in iconSet.slice(1)"
                  :item="item"
                  :iconClass="'ico-block__icon_top'"
                  :textClass="'ico-block__text_black'"
                  :key="item.id"
                )
                p.pp__par.mt_mid
                  | Некоммерческий благотворительный фонд помощи детям &laquo;Дедморозим&raquo;
                LblBlock.mt(v-for="item in schetInfo1" :item="item" :key="item.id")
              p.pp__par
                | Узнать о&nbsp;том, как были потрачены переведенные вами средства, можно, в&nbsp;разделе
                |
                span.nowrap &laquo;
                  a(href="" target="_blank").link Отчеты в&nbsp;цифрах
                  | &raquo;
                |
                | или обратившись в&nbsp;фонд. Свяжитесь с&nbsp;нами по&nbsp;телефону горячей линии&nbsp;
                a.link.link_in-text.nowrap(href="tel:+73422700870") 8 (342) 270-08-70
                |
                | или отправьте запрос по&nbsp;электронной почте на&nbsp;адрес
                |
                a.link.link_in-text(href="mailto:info@dedmorozim.ru") info@dedmorozim.ru
                | .
              LblBlock.mt(v-for="item in companyInfo" :item="item" :key="item.id")
            .pp__aside
              Picture(
                :img="'blagotvoritelnost-letter'"
                :imgClass="'pp__img'"
                :imgStyle="'width: 25.5vw; top: 0; left: 0;'"
                :isRetina="true"
                :zoom="zoomInfo"
              )
          Picture(
            :img="'blagotvoritelnost'"
            :imgClass="'pp__img'"
            :imgStyle="'max-width: 40vw; top: 27.5vw;'"
            :isRetina="true"
          )
    TheFooter
</template>

<script>
  import TheHeader from '../../components/TheHeader';
  import CompanyMenu from '../../components/blocks/CompanyMenu';
  import Breadcrumbs from '../../components/UI/Breadcrumbs';
  import LblBlock from '../../components/wraps/lblBlock/LblBlock';
  import IconBlock from '../../components/wraps/iconBlock/IconBlock';
  import TheFooter from '../../components/TheFooter';
  import Picture from '../../components/UI/Picture';
  export default {
    name: 'Blagotvoritelnost',
    layout: 'empty',
    components: { Picture, TheFooter, IconBlock, LblBlock, Breadcrumbs, CompanyMenu, TheHeader },
    head () {
      return {
        title: 'ГлобалЭнергоХолдинг | Благотворительность'
      }
    },
    data () {
      return {
        title: 'Благотворительность',
        contactInfo: [
          {
            id: 0,
            label: 'Полное наименование:',
            text: 'Некоммерческий благотворительный фонд помощи детям &laquo;Дедморозим&raquo;'
          },
          {
            id: 1,
            label: 'Юридический адрес:',
            text: '614097, г.&nbsp;Пермь, ул.&nbsp;Куфонина, 16-126'
          },
          {
            id: 2,
            label: 'Фактический адрес:',
            text: '614007, г.&nbsp;Пермь, ул.&nbsp;Максима Горького, 60'
          },
          {
            id: 3,
            label: 'Почтовый адрес:',
            text: '614007, г.&nbsp;Пермь, ул.&nbsp;Максима Горького, 60'
          },
          {
            id: 4,
            label: 'Банковские реквизиты:',
            text: 'ИНН 5903994507, КПП 590301001'
          }
        ],
        schetInfo: [
          {
            id: 10,
            label: 'ИНН/КПП:',
            text: '5903994507/590301001'
          },
          {
            id: 11,
            label: 'Расчётный счёт:',
            text: '40703810349770000275'
          },
          {
            id: 12,
            label: 'Банк получателя:',
            text: 'Западно-Уральский банк Сбербанка России г.&nbsp;Пермь'
          },
          {
            id: 13,
            label: 'БИК:',
            text: '045773603'
          },
          {
            id: 14,
            label: 'К/сч:',
            text: '30101810900000000603'
          }
        ],
        schetInfo1: [
          {
            id: 20,
            label: 'ИНН/КПП:',
            text: '5903994507/590301001'
          },
          {
            id: 21,
            label: 'Расчётный счёт:',
            text: '40703810349770000276'
          },
          {
            id: 22,
            label: 'Банк получателя:',
            text: 'Западно-Уральский банк Сбербанка России г.&nbsp;Пермь'
          },
          {
            id: 23,
            label: 'БИК:',
            text: '045773603'
          },
          {
            id: 24,
            label: 'К/сч:',
            text: '30101810900000000603'
          }
        ],
        companyInfo: [
          {
            id: 30,
            label: 'Тел./факс:',
            text: '(342) 270-08-70'
          },
          {
            id: 31,
            label: 'E-mail:',
            text: '<a class="link" href="mailto:info@dedmorozim.ru">info@dedmorozim.ru</a>'
          },
          {
            id: 32,
            label: 'Сайт:',
            text: '<a class="link" href="http://www.dedmorozim.ru" target="_blank">www.dedmorozim.ru</a>'
          },
          {
            id: 33,
            label: 'Директор:',
            text: 'Ли Надежда Юрьевна, <span class="lbl-block__text_notes">действует на&nbsp;основании Устава.</span>'
          }
        ],
        iconSet: [
          {
            id: 40,
            icon: '/img/ico-blago.svg',
            txt: '100% полученных средств будут потрачены только на&nbsp;помощь детям:\n' +
              'адресную поддержку, реализацию благотворительных программ\n' +
              'и&nbsp;проектов.'
          },
          {
            id: 41,
            icon: '/img/ico-blago-home.svg',
            txt: '100% полученных средств будут потрачены на&nbsp;административные расходы\n' +
              'фонда. Сделать свой вклад во&nbsp;все чудеса сразу можно по&nbsp;реквизитам:'
          }
        ],
        zoomInfo: {
          show: true,
          title: 'Увеличить',
          icon: 'icon-loop.svg'
        }
      }
    }
  }
</script>
