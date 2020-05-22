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
        h1.section-title.section-title_mrg-xl {{ title }}
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
    name: 'Antikorrupcionnaya-politika',
    layout: 'empty',
    components: { TheFooter, LinkDonwload, Breadcrumbs, CompanyMenu, TheHeader },
    head () {
      return {
        title: 'Антикоррупционная политика | ГлобалЭнергоХолдинг'
      }
    },
    data () {
      return {
        title: 'Антикоррупционная политика',
        breadCrumbsFolder: [
          { id: 0, title: 'Компания', link: '/company/about' },
          { id: 1, title: 'Антикоррупционная деятельность', link: '/company/antikorrupcionnaya-deyatelnost' }
        ],
        linkArr: [
          {
            text: '&laquo;Антикоррупционная политика АО&nbsp;ГЭХ&raquo;',
            notes: 'pdf, 5,07 МБ',
            url: 'antikorrupcionnaya-politika-ao-gehkh.pdf'
          }
        ]
      }
    }
  }
</script>
