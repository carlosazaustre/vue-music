<template lang="pug">
  li
    h2
      a(:href="artist.url" target="_blank") {{ artist.name }}
    img(:src="artist.image[2]['#text']")
</template>


<script>
export default {
  name: 'artist',
  props: ['artist'],
}
</script>

<style lang="stylus" scoped>
h2
  font-weight normal

li
  display block
  margin 10px 0

a
  color #42b983
</style>
