<template lang="pug">
  #app
    app-header
    app-notification(v-show="showNotification")
      p(slot="body") Not results found
    app-loader(v-show="isLoading")
    section.section(v-show="!isLoading")
      nav.nav
        .container
          .field.has-addons(v-show="!isLoading")
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
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            app-track(
              v-bind:class="{ 'is-active': t.id === selectedTrack }"
              v-bind:track="t"
              @select="setSelectedTrack"
            )
    app-footer
</template>

<script>
import trackService from '@/services/track'

import AppFooter from '@/components/layout/Footer'
import AppHeader from '@/components/layout/Header'
import AppTrack from '@/components/Track'
import AppLoader from '@/components/shared/Loader'
import AppNotification from '@/components/shared/Notification'

export default {
  name: 'app',
  components: { AppFooter, AppHeader, AppTrack, AppLoader, AppNotification },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      selectedTrack: '',
      showNotification: false
    }
  },
  computed: {
    searchMessage () {
      return `Found ${this.tracks.length} songs`
    }
  },

  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  },

  methods: {
    search () {
      if (!this.searchQuery) return

      this.isLoading = true
      trackService.search(this.searchQuery)
        .then(res => {
          this.showNotification = res.tracks.total === 0
          this.tracks = res.tracks.items
          this.isLoading = false
        })
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';

.results {
  margin-top: 50px;
}

.is-active {
  border: 3px solid #23d160;
}
</style>
