<template lang="pug">
  div.wrapper
    TheHeader(:white="true" :activeClass="'company'")
    .second-menu
      .c-wrap
        CompanyMenu(:inHeader="true" :inSubMenu="true")
    .main-block.main-block_alone
      .c-wrap
        Breadcrumbs(
          :folder="breadCrumbsFolder"
          :current="title"
        )
        h1.section-title {{ title }}
        p.par В&nbsp;данном подразделе содержатся ссылки на&nbsp;тексты действующих федеральных законов, указов Президента Российской Федерации, постановлений Правительства Российской Федерации и&nbsp;иных нормативных правовых актов по&nbsp;вопросам противодействия коррупции.
        ul.link-list
          li.link-list__item(v-for="(item, idx) in linkArr" :key="idx")
            a.link-list__link(:href="item.url" v-html="item.text" target="_blank")
    TheFooter
</template>

<script>
  import TheHeader from '../../../components/TheHeader';
  import CompanyMenu from '../../../components/blocks/CompanyMenu';
  import Breadcrumbs from '../../../components/UI/Breadcrumbs';
  import TheFooter from '../../../components/TheFooter';

  export default {
    name: 'Normativnye-pravovye-i-inye-akty',
    layout: 'empty',
    components: { TheFooter, Breadcrumbs, CompanyMenu, TheHeader },
    head () {
      return {
        title: 'Нормативные правовые и иные акты в сфере противодействия коррупции | ГлобалЭнергоХолдинг'
      }
    },
    data () {
      return {
        title: 'Нормативные правовые и иные акты в сфере противодействия коррупции',
        breadCrumbsFolder: [
          { id: 0, title: 'Компания', link: '/company/about' },
          { id: 1, title: 'Антикоррупционная деятельность', link: '/company/antikorrupcionnaya-deyatelnost' }
        ],
        linkArr: [
          {
            text: 'Федеральный закон от&nbsp;25.12.2008 &#8470;&nbsp;273-ФЗ &laquo;О&nbsp;противодействии коррупции&raquo;',
            url: 'http://pravo.gov.ru/proxy/ips/?docbody=&nd=102126657&intelsearch=25.12.2008+%B9+273-%D4%C7'
          },
          {
            text: 'Федеральный закон от&nbsp;17.07.2009 &#8470;&nbsp;172-ФЗ &laquo;Об&nbsp;антикоррупционной экспертизе нормативных правовых актов и&nbsp;проектов нормативных правовых актов&raquo;',
            url: 'http://pravo.gov.ru/proxy/ips/?docbody=&nd=102131168&intelsearch=17.07.2009+%B9+172-%D4%C7'
          },
          {
            text: 'Федеральный закон от&nbsp;03.04.2017 &#8470;&nbsp;64-ФЗ &laquo;О&nbsp;внесении изменений в&nbsp;отдельные законодательные акты Российской Федерации в&nbsp;целях совершенствования государственной политики в&nbsp;области противодействия коррупции&raquo;',
            url: 'http://pravo.gov.ru/proxy/ips/?docbody=&nd=102429553&intelsearch=03.04.2017+%B9+64-%D4%C7+'
          },
          {
            text: 'Указ Президента Российской Федерации от&nbsp;19.05.2008 &#8470;&nbsp;815 &laquo;О&nbsp;мерах по&nbsp;противодействию коррупции&raquo;',
            url: 'http://pravo.gov.ru/proxy/ips/?docbody=&nd=102122053&intelsearch=19.05.2008+%B9+815'
          },
          {
            text: 'Указ Президента Российской Федерации от&nbsp;13.04.2010 &#8470;&nbsp;460 &laquo;О&nbsp;Национальной стратегии противодействия коррупции и&nbsp;Национальном плане противодействия коррупции на&nbsp;2010&nbsp;&mdash; 2011&nbsp;годы&raquo;',
            url: 'http://pravo.gov.ru/proxy/ips/?docbody=&nd=102137438&intelsearch=13+%E0%EF%F0%E5%EB%FF+2010+%E3.+%B9+460'
          },
          {
            text: 'Указ Президента Российской Федерации от&nbsp;21.07.2010 &#8470;&nbsp;925 &laquo;О&nbsp;мерах по&nbsp;реализации отдельных положений Федерального закона &laquo;О&nbsp;противодействии коррупции&raquo;',
            url: 'http://pravo.gov.ru/proxy/ips/?docbody=&nd=102140280&intelsearch=21.07.2010+%B9+925'
          },
          {
            text: 'Указ Президента Российской Федерации от&nbsp;13.03.2012 &#8470;&nbsp;297 &laquo;О&nbsp;Национальном плане противодействия коррупции на&nbsp;2012&nbsp;&mdash; 2013 годы и&nbsp;внесении изменений в&nbsp;некоторые акты Президента Российской Федерации по&nbsp;вопросам противодействия коррупции&raquo;',
            url: 'http://pravo.gov.ru/proxy/ips/?docbody=&nd=102154482&intelsearch=13+%EC%E0%F0%F2%E0+2012+%E3.+%B9+297'
          },
          {
            text: 'Указ Президента Российской Федерации от&nbsp;02.04.2013 &#8470;&nbsp;309 &laquo;О&nbsp;мерах по&nbsp;реализации отдельных положений Федерального закона &laquo;О&nbsp;противодействии коррупции&raquo;',
            url: 'http://pravo.gov.ru/proxy/ips/?docbody=&nd=102164304&intelsearch=02.04.2013+%B9+309'
          },
          {
            text: 'Указ Президента Российской Федерации от&nbsp;08.07.2013 &#8470;&nbsp;613 &laquo;Вопросы противодействия коррупции&raquo;',
            url: 'http://pravo.gov.ru/proxy/ips/?docbody=&nd=102166580&intelsearch=08.07.2013+%B9+613'
          },
          {
            text: 'Указ Президента Российской Федерации от&nbsp;11.04.2014 &#8470;&nbsp;226 &laquo;О&nbsp;Национальном плане противодействия коррупции на&nbsp;2014&nbsp;&mdash; 2015&nbsp;годы&raquo;',
            url: 'http://pravo.gov.ru/proxy/ips/?docbody=&nd=102348935&intelsearch=11+%E0%EF%F0%E5%EB%FF+2014+%B9226'
          },
          {
            text: 'Указ Президента Российской Федерации от&nbsp;23.06.2014 &#8470;&nbsp;453 &laquo;О&nbsp;внесении изменений в&nbsp;некоторые акты Президента Российской Федерации по&nbsp;вопросам противодействия коррупции&raquo;',
            url: 'http://pravo.gov.ru/proxy/ips/?docbody=&nd=102353809&intelsearch=23.06.2014+%B9+453+'
          },
          {
            text: 'Указ Президента Российской Федерации от&nbsp;08.03.2015 &#8470;&nbsp;120 &laquo;О&nbsp;некоторых вопросах противодействия коррупции&raquo;',
            url: 'http://pravo.gov.ru/proxy/ips/?docbody=&nd=102368620&intelsearch=08.03.2015+%B9+120+'
          },
          {
            text: 'Указ Президента Российской Федерации от&nbsp;15.07.2015 &#8470;&nbsp;364 &laquo;О&nbsp;мерах по&nbsp;совершенствованию организации деятельности в&nbsp;области противодействия коррупции&raquo;',
            url: 'http://pravo.gov.ru/proxy/ips/?docbody=&nd=102375996&intelsearch=15.07.2015+%B9+364+'
          },
          {
            text: 'Указ Президента Российской Федерации от&nbsp;01.04.2016 &#8470;&nbsp;147 &laquo;О&nbsp;национальном плане противодействия коррупции на&nbsp;2016-2017&nbsp;годы&raquo;',
            url: 'http://pravo.gov.ru/proxy/ips/?docbody=&nd=102393795&intelsearch=01.04.2016+%B9+147'
          },
          {
            text: 'Указ Президента Российской Федерации от&nbsp;29.06.2018 &#8470;&nbsp;378 &laquo;О&nbsp;Национальном плане противодействия коррупции на&nbsp;2018&nbsp;&mdash; 2020&nbsp;годы&raquo;',
            url: 'http://pravo.gov.ru/proxy/ips/?docbody=&nd=102474013&intelsearch=29.06.2018+%B9+378'
          },
          {
            text: 'Постановление Правительства Российской Федерации от&nbsp;26.02.2010 &#8470;&nbsp;96&nbsp;&laquo;Об&nbsp;антикоррупционной экспертизе нормативных правовых актов и&nbsp;проектов нормативных правовых актов&raquo; (вместе с&nbsp;&laquo;Правилами проведения антикоррупционной экспертизы нормативных правовых актов и&nbsp;проектов нормативных правовых актов&raquo;, &laquo;Методикой проведения антикоррупционной экспертизы нормативных правовых актов и&nbsp;проектов нормативных правовых актов&raquo;)',
            url: 'http://pravo.gov.ru/proxy/ips/?docbody=&nd=102136170&intelsearch=26.02.2010+%B9+96'
          },
          {
            text: 'Постановление Правительства Российской Федерации от&nbsp;06.11.2014 &#8470;&nbsp;1164 &laquo;О&nbsp;внесении изменений в&nbsp;некоторые акты Правительства Российской Федерации&raquo;',
            url: 'http://pravo.gov.ru/proxy/ips/?docbody=&nd=102361334&intelsearch=06.11.2014+%B9+1164'
          }
        ]
      }
    }
  }
</script>
