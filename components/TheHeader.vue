<template lang="pug">
  header.header(
    ref="top"
    :class="[{'header_fixed': !white}, {'header_white': white}]")
    .header__first-line
      CompanyLogo
        img(:src="srcLogo" alt="ГлобалЭнергоХолдинг")
      .header__phone
        a.header__phone-num(href="tel:+78005502259") 8 (800) 550 22 59
        span.header__phone-txt для звонков по Российской Федерации
      .header__right-col
        router-link(to="/search").search
          template(v-if="white")
            img(src="/img/ico-search_blue.svg" width="24" height="24")
          template(v-else)
            svg.icon-search(xmlns='http://www.w3.org/2000/svg', width='100%', height='100%')
              use(xlink:href='/img/svg-lib.svg#ico-search')
        router-link.header__btn(to="/cabinet") Склад
        .land-switch
          .land-switch__item(
            v-for="(item, idx) in lang"
            :key="item.id"
            :class="{'is-active': activeLang === idx}"
            @click="handlerLang(idx)") {{ item.name }}
        router-link(to="/search").header__m-btn
          img(src="/img/ico-gamburger.svg" v-if="white")
    .header__menu
      HeaderNavigation(:isSmall="white" :activeClass="activeClass")

      CompanyMenu(
        v-if="showCompanyMenu"
        :activeClass="activeClass"
        :inHeader="showCompanyMenu")
</template>

<script>
  import CompanyLogo from './CompanyLogo';
  import HeaderNavigation from './HeaderNavigation';
  import CompanyMenu from './blocks/CompanyMenu';

  export default {
    name: 'TheHeader',
    components: { CompanyMenu, HeaderNavigation, CompanyLogo },
    props: {
      white: Boolean,
      activeClass: String,
      showCompanyMenu: Boolean
    },
    data () {
      return {
        lang: [
          { id: 0, name: 'Рус', link: '/' },
          { id: 1, name: 'Eng', link: '/in-dev' }
        ]
      }
    },
    computed: {
      srcLogo () {
        return (!this.white) ? '/img/logo.png' : '/img/logo-white.svg'
      },
      activeLang () {
        return this.$store.state.lang
      }
    },
    mounted () {
      this.animatePage()
    },
    created () {
      if (process.browser) {
        window.addEventListener('scroll', this.handleScroll);
      }
    },
    destroyed () {
      if (process.browser) {
        window.removeEventListener('scroll', this.handleScroll);
      }
    },
    methods: {
      handlerLang (idx) {
        if (idx !== this.activeLang) {
          this.$store.commit('SET_LANG', idx);
          this.$router.push(this.lang[idx].link)
        }
      },
      animatePage () {
        this.$refs.top.classList.add('is-show');
      },
      handleScroll () {
        // TODO: временное решение, пока нет окончательного дизайна
        if (window.scrollY > 200) {
          this.$refs.top.classList.add('is-dark');
        } else {
          this.$refs.top.classList.remove('is-dark')
        }
      }
    }
  }
</script>
