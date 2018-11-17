<template lang="pug">
  #app
    img(src='./assets/logo.png')
    h1 VueMusic
    select(v-model="selectedCountry")
      option(v-for="country in countries" v-bind:value="country.value") {{ country.name }}
    ul
      artist(v-for='artist in artists' v-bind:artist="artist" v-bind:key="artist.mbid")
</template>


<script>
import Artist from './components/Artist'
import getArtists from './api';

export default {
  name: 'app',
  data () {
    return {
      artists: [],
      countries: [
        { name: 'Spain', value: 'spain' },
        { name: 'Mexico', value: 'mexico' },
        { name: 'Colombia', value: 'colombia' },
        { name: 'Argentina', value: 'argentina' },
      ],
      selectedCountry: 'spain',
    }
  },
  components: { Artist },
  methods: {
    refreshArtists() {
      const self = this;
      getArtists(this.selectedCountry)
        .then(function (artists) {
          self.artists = artists
        });
    },
  },

  mounted () {
    this.refreshArtists();
  },

  watch: {
    selectedCountry: function () {
      this.refreshArtists();
    }
  }
}
</script>

<style lang="stylus" scoped>
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px

h1
  font-weight normal

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
