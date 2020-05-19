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
        p.par Данный подраздел обеспечивает доступ к&nbsp;списку форм обращений и&nbsp;уведомлений, заполняемых гражданами, работниками в&nbsp;рамках реализации законодательства о&nbsp;противодействии коррупции.
        LinkDonwload(v-for="(item, idx) in linkArr" :link="item" :key="idx")
    TheFooter
</template>

<script>
  import TheHeader from '../../../components/TheHeader';
  import CompanyMenu from '../../../components/blocks/CompanyMenu';
  import Breadcrumbs from '../../../components/UI/Breadcrumbs';
  import LinkDonwload from '../../../components/UI/linkDonload/LinkDonwload';
  import TheFooter from '../../../components/TheFooter';
  export default {
    name: 'Formy-dokumentov',
    layout: 'empty',
    components: { TheFooter, LinkDonwload, Breadcrumbs, CompanyMenu, TheHeader },
    head () {
      return {
        title: 'Формы документов, связанных с противодействием коррупции, для заполнения | ГлобалЭнергоХолдинг'
      }
    },
    data () {
      return {
        title: 'Формы документов, связанных с противодействием коррупции, для заполнения',
        breadCrumbsFolder: [
          { id: 0, title: 'Компания', link: '/company/about' },
          { id: 1, title: 'Антикоррупционная деятельность', link: '/company/antikorrupcionnaya-deyatelnost' }
        ],
        linkArr: [
          {
            text: 'Уведомление о&nbsp;факте обращения каких-либо лиц в&nbsp;целях склонения работника',
            notes: 'pdf, 112 Kб',
            url: 'uvedomlenie-o-fakte-obrashcheniya-kakih-libo-lic-v-celyah-skloneniya-rabotnika.pdf'
          },
          {
            text: 'Обращение по&nbsp;фактам коррупционных правонарушений',
            notes: 'pdf, 176 КБ',
            url: 'obrashchenie-po-faktam-korrupcionnyh-pravonarushenij.pdf'
          },
          {
            text: 'Уведомление о&nbsp;возникновении личной заинтересованности',
            notes: 'pdf, 191 Kб',
            url: 'uvedomlenie-o-vozniknovenii-lichnoj-zainteresovannosti.pdf'
          },
          {
            text: 'Уведомление о&nbsp;получении подарка',
            notes: 'pdf, 187 Kб',
            url: 'uvedomlenie-o-poluchenii-podarka.pdf'
          }
        ]
      }
    }
  }
</script>
