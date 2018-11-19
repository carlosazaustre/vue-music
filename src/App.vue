<template lang="pug">
  #app
    app-header
    section.section
      nav.nav.has-shadow
        .container
          .field.has-addons
            .control
              input.input.is-large(
                type="text",
                placeholder="Search songs",
                v-model="searchQuery"
              )
            .control
              a.button.is-info.is-large(@click="search") Buscar
              a.button.is-danger.is-large &times;
          p.help.is-info.has-text-right
            small {{ searchMessage }}

      .container
        .columns
          .column(v-for="t in tracks")
            | {{ t.name }} - {{ t.artists[0].name }}
    app-footer
</template>

<script>
import trackService from './services/track'
import AppFooter from './components/layout/Footer'
import AppHeader from './components/layout/Header'

// const tracks = [
//   { name: 'Tu jardín con enanitos', artist: 'Melendi' },
//   { name: 'In the End', artist: 'Linkin Park' },
//   { name: 'Americana', artist: 'The Offspring' }
// ]

export default {
  name: 'app',
  components: { AppFooter, AppHeader },
  data () {
    return {
      searchQuery: '',
      tracks: []
    }
  },
  computed: {
    searchMessage () {
      return `Found ${this.tracks.length} songs`
    }
  },

  methods: {
    search () {
      if (!this.searchQuery) return

      trackService.search(this.searchQuery)
        .then(res => {
          this.tracks = res.tracks.items
        })
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';

</style>
