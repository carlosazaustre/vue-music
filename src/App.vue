<template lang="pug">
  #app
    section.section
      nav.nav.has-shadow
        .container
          field.has-addons
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
          .column(v-for="t in tracks") {{ t.name }} - {{ t.artist }}
</template>

<script>
const tracks = [
  { name: 'Tu jardín con enanitos', artist: 'Melendi' },
  { name: 'In the End', artist: 'Linkin Park' },
  { name: 'Americana', artist: 'The Offspring' }
]

export default {
  name: 'app',
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
      this.tracks = tracks
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';

</style>
